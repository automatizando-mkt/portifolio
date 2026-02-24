import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FadeSlideIn } from '@/components/effects/FadeSlideIn';

export const metadata: Metadata = {
  title: 'Termos de Uso | Automatizando Soluções',
  description: 'Termos de uso do site e serviços da Automatizando Soluções LTDA.',
};

export default function TermosDeUsoPage() {
  return (
    <FadeSlideIn>
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-canvas-accent mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-white mb-4">Termos de Uso</h1>
            <p className="text-sm text-neutral-500 mb-12">
              Última atualização: fevereiro de 2026
            </p>

            <div className="space-y-10 text-neutral-400 leading-relaxed">
              <div>
                <h2 className="text-lg font-medium text-white mb-3">1. Aceitação dos termos</h2>
                <p>
                  Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Se
                  não concordar com qualquer parte destes termos, pedimos que não utilize o site.
                  Este site é operado pela{' '}
                  <strong className="text-white">Automatizando Soluções LTDA</strong>, CNPJ
                  54.536.607/0001-10.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">2. Uso permitido</h2>
                <p>Você pode utilizar este site para:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Conhecer nossos serviços de automação e inteligência artificial</li>
                  <li>Entrar em contato para solicitar propostas comerciais</li>
                  <li>Acessar conteúdos educativos disponibilizados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">3. Uso proibido</h2>
                <p>É expressamente proibido:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Copiar, reproduzir ou redistribuir o conteúdo sem autorização prévia</li>
                  <li>Utilizar o site para fins ilegais ou fraudulentos</li>
                  <li>Enviar spam ou conteúdo malicioso por meio dos formulários</li>
                  <li>Tentar acessar áreas restritas ou sistemas de terceiros</li>
                  <li>Praticar engenharia reversa de qualquer sistema ou software apresentado</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">
                  4. Propriedade intelectual
                </h2>
                <p>
                  Todo o conteúdo deste site — incluindo textos, imagens, logotipos, design e
                  código-fonte — é de propriedade exclusiva da Automatizando Soluções LTDA ou de
                  seus licenciantes. A reprodução total ou parcial sem autorização expressa é
                  proibida.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">5. Serviços e contratação</h2>
                <p>
                  As informações presentes neste site têm caráter informativo. A contratação de
                  serviços está sujeita à análise de viabilidade, proposta formal e assinatura de
                  contrato específico. Não há compromisso de prestação de serviços pela simples
                  solicitação de contato ou preenchimento de formulário.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">6. Isenção de responsabilidade</h2>
                <p>
                  As informações neste site são fornecidas &ldquo;como estão&rdquo;, sem garantias
                  de qualquer tipo. Não nos responsabilizamos por danos diretos ou indiretos
                  decorrentes do uso ou da impossibilidade de uso do site, nem pela exatidão ou
                  completude das informações apresentadas.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">7. Links externos</h2>
                <p>
                  Este site pode conter links para sites de terceiros. Não nos responsabilizamos
                  pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites externos.
                  O acesso a esses links é de sua inteira responsabilidade.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">8. Disponibilidade do site</h2>
                <p>
                  Não garantimos disponibilidade ininterrupta do site. Podemos suspender o acesso
                  temporariamente para manutenção, atualizações ou por razões técnicas, sem aviso
                  prévio.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">9. Lei aplicável e foro</h2>
                <p>
                  Estes termos são regidos pelas leis da República Federativa do Brasil. Para
                  dirimir eventuais controvérsias, fica eleito o foro da comarca de Manaus/AM, com
                  renúncia expressa a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">10. Alterações nos termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. A
                  continuidade do uso do site após as alterações implica na aceitação dos novos
                  termos.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-3">11. Contato</h2>
                <p>Para dúvidas sobre estes termos, entre em contato:</p>
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
