import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Automatizando Soluções',
  description: 'Política de privacidade da Automatizando Soluções LTDA.',
};

export default function PoliticaDePrivacidadePage() {
  return (
    <FadeSlideIn>
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-canvas-accent mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-sm text-neutral-500 mb-12">
              Última atualização: fevereiro de 2026
            </p>

            <div className="space-y-10 text-neutral-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-medium text-white mb-3">1. Quem somos</h2>
                <p>
                  A <strong className="text-white">Automatizando Soluções LTDA</strong>, inscrita no
                  CNPJ 54.536.607/0001-10, é responsável pelo tratamento dos dados pessoais
                  coletados neste site. Para dúvidas ou solicitações relacionadas à privacidade,
                  entre em contato pelo e-mail{' '}
                  <a
                    href="mailto:contato@automatizando.site"
                    className="text-canvas-accent hover:underline"
                  >
                    contato@automatizando.site
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">2. Dados que coletamos</h2>
                <p>Coletamos os seguintes dados quando você preenche nossos formulários:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone / WhatsApp</li>
                  <li>Informações sobre seu projeto ou necessidade</li>
                  <li>Nome da empresa (quando informado)</li>
                </ul>
                <p className="mt-3">
                  Também podemos coletar dados de navegação de forma anonimizada, como páginas
                  visitadas e tempo de sessão, para melhorar a experiência no site.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">
                  3. Finalidade do tratamento
                </h2>
                <p>Utilizamos seus dados para:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Responder ao seu contato e apresentar propostas de serviços</li>
                  <li>Enviar informações relevantes sobre automação e IA (somente com consentimento)</li>
                  <li>Melhorar nossos serviços e a experiência no site</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">4. Base legal (LGPD)</h2>
                <p>
                  O tratamento de dados é realizado com base no consentimento do titular (art. 7º,
                  I, LGPD), no legítimo interesse para contato comercial (art. 7º, IX, LGPD) e no
                  cumprimento de obrigações legais (art. 7º, II, LGPD).
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">5. Compartilhamento de dados</h2>
                <p>
                  Seus dados não são vendidos a terceiros. Podemos compartilhá-los com ferramentas
                  de automação e CRM utilizadas em nossa operação (ex.: plataformas de e-mail
                  marketing, gestão de leads), sempre sob acordos de confidencialidade e no âmbito
                  das finalidades declaradas.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">6. Armazenamento e segurança</h2>
                <p>
                  Seus dados são armazenados em servidores seguros e tratados com medidas técnicas
                  e organizacionais adequadas para prevenir acesso não autorizado, perda ou
                  destruição. Mantemos os dados pelo tempo necessário para cumprir as finalidades
                  descritas ou conforme exigido por lei.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">7. Seus direitos</h2>
                <p>Conforme a LGPD, você tem direito a:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Confirmar a existência de tratamento dos seus dados</li>
                  <li>Acessar seus dados</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Solicitar a exclusão dos seus dados</li>
                </ul>
                <p className="mt-3">
                  Para exercer qualquer direito, acesse nossa{' '}
                  <a href="/exclusao-de-dados" className="text-canvas-accent hover:underline">
                    página de exclusão de dados
                  </a>{' '}
                  ou entre em contato pelo e-mail{' '}
                  <a
                    href="mailto:contato@automatizando.site"
                    className="text-canvas-accent hover:underline"
                  >
                    contato@automatizando.site
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">8. Cookies</h2>
                <p>
                  Este site pode utilizar cookies técnicos essenciais para o funcionamento correto
                  das páginas. Não utilizamos cookies de rastreamento de terceiros sem seu
                  consentimento explícito.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">9. Alterações nesta política</h2>
                <p>
                  Podemos atualizar esta política periodicamente. Recomendamos que você a revise
                  regularmente. Alterações significativas serão comunicadas pelo site ou por e-mail.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">10. Contato</h2>
                <p>
                  Para qualquer dúvida sobre esta política ou sobre o tratamento dos seus dados,
                  entre em contato:
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <strong className="text-white">E-mail:</strong>{' '}
                    <a
                      href="mailto:contato@automatizando.site"
                      className="text-canvas-accent hover:underline"
                    >
                      contato@automatizando.site
                    </a>
                  </li>
                  <li>
                    <strong className="text-white">WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/5592981866864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-canvas-accent hover:underline"
                    >
                      (92) 98186-6864
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FadeSlideIn>
  );
}
