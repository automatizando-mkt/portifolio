/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, Suspense, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Link2, QrCode, CheckCircle2, Loader2, ArrowLeft, Copy, Smartphone } from 'lucide-react';

function ConectarContent() {
    const searchParams = useSearchParams();
    const cfgParam = searchParams.get('cfg');

    const [view, setView] = useState<'config' | 'scanner'>('config');
    const [config, setConfig] = useState<{ url: string; name: string; token: string }>({ url: '', name: '', token: '' });

    const [linkGenerated, setLinkGenerated] = useState('');

    const [qrBase64, setQrBase64] = useState<string | null>(null);
    const [status, setStatus] = useState<'waiting' | 'connected' | 'error' | 'loading'>('loading');
    const [timeLeft, setTimeLeft] = useState(30);
    const [debugStatus, setDebugStatus] = useState('Aguardando verificação...');

    const qrIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const statusIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (cfgParam) {
            try {
                const decoded = JSON.parse(atob(cfgParam));
                if (decoded.url && decoded.token) {
                    setConfig(decoded);
                    setView('scanner');
                }
            } catch (err) {
                alert("Link inválido.");
            }
        }
    }, [cfgParam]);

    useEffect(() => {
        if (view === 'scanner' && config.url && config.token) {
            startConnectionLoop();
        }
        return () => {
            clearTimers();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view, config]);

    function clearTimers() {
        if (qrIntervalRef.current) clearInterval(qrIntervalRef.current);
        if (statusIntervalRef.current) clearInterval(statusIntervalRef.current);
    }

    async function startConnectionLoop() {
        setStatus('loading');
        setQrBase64(null);
        setTimeLeft(30);

        await fetchQRCode();
        checkConnectionStatus();

        qrIntervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    fetchQRCode();
                    return 30;
                }
                return prev - 1;
            });
        }, 1000);

        statusIntervalRef.current = setInterval(checkConnectionStatus, 3000);
    }

    async function fetchQRCode() {
        try {
            const response = await fetch(`${config.url.replace(/\/+$/, '')}/instance/connect`, {
                method: 'POST',
                headers: { 'token': config.token, 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });

            if (!response.ok) {
                setDebugStatus(`Erro QR: ${response.status}`);
                return;
            }

            const data = await response.json();

            if (data.instance && (data.instance.state === 'open' || data.instance.status === 'open')) {
                handleConnected();
                return;
            }

            const base64 = data.base64 || data.qrcode || (data.instance ? data.instance.qrcode : null);

            if (base64) {
                const cleanBase64 = base64.replace(/^data:image\/png;base64,/, '');
                setQrBase64(`data:image/png;base64,${cleanBase64}`);
                setStatus('waiting');
            }
        } catch (err) {
            console.error(err);
            setDebugStatus("Erro ao buscar QR Code");
        }
    }

    async function checkConnectionStatus() {
        try {
            const response = await fetch(`${config.url.replace(/\/+$/, '')}/instance/status`, {
                method: 'GET',
                headers: { 'token': config.token }
            });

            if (!response.ok) {
                setDebugStatus(`Status API: Erro HTTP ${response.status}`);
                return;
            }

            const data = await response.json();

            const state = (data.instance && data.instance.state) ||
                (data.instance && data.instance.status) ||
                data.status ||
                data.state ||
                "desconhecido";

            setDebugStatus(`Status API: ${state}`);

            if (['open', 'connected', 'authenticated'].includes(state)) {
                handleConnected();
            }

        } catch (err) {
            setDebugStatus("Status API: Falha de Rede");
        }
    }

    function handleConnected() {
        clearTimers();
        setStatus('connected');
        setDebugStatus("Status API: Conexão Confirmada");
        setTimeLeft(30);
    }

    function handleGenerateLink() {
        if (!config.url || !config.token) {
            alert("Preencha URL e Token!");
            return;
        }
        const payload = btoa(JSON.stringify(config));
        const urlWithoutQuery = window.location.href.split('?')[0];
        const link = `${urlWithoutQuery}?cfg=${payload}`;
        setLinkGenerated(link);
    }

    function handleCopyLink() {
        navigator.clipboard.writeText(linkGenerated);
        alert("Copiado!");
    }

    function resetView() {
        clearTimers();
        setView('config');
    }

    return (
        <div className="min-h-screen grid-background flex flex-col items-center justify-center p-4">
            {view === 'config' ? (
                <div className="glass w-full max-w-md p-8 rounded-2xl flex flex-col items-center border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent opacity-50"></div>

                    <Link2 className="w-10 h-10 text-[#FF6B1A] mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider text-center">Gerador de Link</h1>
                    <p className="text-neutral-400 text-sm mb-8 text-center">Configure a reconexão para seu cliente</p>

                    <div className="w-full space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-neutral-400 mb-1">URL da API</label>
                            <input
                                type="text"
                                value={config.url}
                                onChange={e => setConfig({ ...config, url: e.target.value })}
                                placeholder="https://automatizando.uazapi.com"
                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-neutral-400 mb-1">Nome da Instância</label>
                            <input
                                type="text"
                                value={config.name}
                                onChange={e => setConfig({ ...config, name: e.target.value })}
                                placeholder="Ex: Mercado Junior"
                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-neutral-400 mb-1">Token da Instância</label>
                            <input
                                type="password"
                                value={config.token}
                                onChange={e => setConfig({ ...config, token: e.target.value })}
                                placeholder="Cole o token aqui"
                                className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                            />
                        </div>

                        <button
                            onClick={handleGenerateLink}
                            className="w-full beam-badge rounded-lg mt-6 group"
                        >
                            <div className="beam-badge-beam"></div>
                            <div className="beam-badge-content bg-[#FF6B1A] hover:bg-[#e65a28] text-white font-semibold py-3 px-4 rounded-[7px] transition-colors flex items-center justify-center gap-2">
                                <Link2 className="w-4 h-4" />
                                Gerar Link
                            </div>
                        </button>
                    </div>

                    {linkGenerated && (
                        <div className="w-full mt-6 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-400 break-all">
                                {linkGenerated}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleCopyLink}
                                    className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                >
                                    <Copy className="w-4 h-4" /> Copiar
                                </button>
                                <button
                                    onClick={() => setView('scanner')}
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
                                >
                                    <Smartphone className="w-4 h-4" /> Testar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="glass w-full max-w-md p-8 rounded-2xl flex flex-col items-center border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent opacity-50"></div>

                    <QrCode className="w-10 h-10 text-[#FF6B1A] mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-1 uppercase tracking-wider text-center">Conectar WhatsApp</h1>
                    <p className="text-neutral-400 text-sm mb-6 text-center">{config.name || 'Instância'}</p>

                    <div className="mb-6 flex flex-col items-center w-full">
                        {status === 'waiting' && (
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-semibold uppercase tracking-wider mb-6 border border-yellow-500/20">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                                Escaneie o QR Code
                            </span>
                        )}
                        {status === 'connected' && (
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-500/20">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                WhatsApp Sincronizado
                            </span>
                        )}
                        {status === 'loading' && (
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-neutral-700">
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                Iniciando...
                            </span>
                        )}

                        <div className={`p-4 bg-white rounded-xl shadow-inner ${status === 'connected' ? 'bg-emerald-50' : ''} min-w-[250px] min-h-[250px] flex flex-col items-center justify-center transition-all duration-500`}>
                            {status === 'connected' ? (
                                <div className="flex flex-col items-center animate-in zoom-in duration-500">
                                    <CheckCircle2 className="w-24 h-24 text-emerald-500 mb-4" />
                                    <span className="text-emerald-700 font-bold text-lg">Conectado!</span>
                                </div>
                            ) : qrBase64 ? (
                                <img src={qrBase64} alt="QR Code" className="w-full h-auto rounded-lg animate-in fade-in duration-300" />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-neutral-400">
                                    <Loader2 className="w-8 h-8 animate-spin mb-2" />
                                    <span className="text-sm">Carregando QR...</span>
                                </div>
                            )}
                        </div>

                        {status !== 'connected' && (
                            <div className="w-full max-w-[250px] mt-6">
                                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#FF6B1A] transition-all duration-1000 ease-linear rounded-full"
                                        style={{ width: `${(timeLeft / 30) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="text-[10px] text-neutral-500 text-center mt-2">Atualiza em {timeLeft}s</div>
                            </div>
                        )}
                    </div>

                    <div className="w-full pt-4 border-t border-neutral-800/50">
                        <div className="font-mono text-[10px] text-neutral-500 text-center break-all">
                            {debugStatus}
                        </div>
                    </div>

                    {!cfgParam && (
                        <button
                            onClick={resetView}
                            className="mt-6 w-full bg-transparent hover:bg-neutral-800/50 text-neutral-400 hover:text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm border border-neutral-800"
                        >
                            <ArrowLeft className="w-4 h-4" /> Voltar
                        </button>
                    )}

                </div>
            )}
        </div>
    );
}

export default function ConectarPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen grid-background flex flex-col items-center justify-center p-4">
                <div className="glass p-8 rounded-2xl flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#FF6B1A]" />
                </div>
            </div>
        }>
            <ConectarContent />
        </Suspense>
    );
}
