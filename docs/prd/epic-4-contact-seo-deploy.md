# Epic 4: Formulário de Contato, SEO, Analytics e Deploy

**Expanded Goal:** Finalizar o portfólio com funcionalidades de conversão (formulário funcional), otimização completa de SEO (metadata, sitemap, schema.org, Open Graph), integração de analytics, e deploy na Hostinger. Ao final, o site estará pronto para produção.

## Story 4.1: Formulário de Contato Funcional

As a potencial cliente,
I want enviar uma mensagem pelo formulário e receber confirmação,
so that eu saiba que meu contato foi recebido.

**Acceptance Criteria:**
1. API route `/api/contact` recebe dados do formulário e envia email (via Resend, Nodemailer ou serviço configurável)
2. Formulário exibe estado de loading durante envio
3. Mensagem de sucesso exibida após envio bem-sucedido
4. Mensagem de erro amigável em caso de falha
5. Rate limiting básico na API route (prevenir spam)
6. Dados do formulário validados no servidor (sanitização)

**Complexity:** M (Medium)

## Story 4.2: SEO Avançado e Open Graph

As a Gestor de Automação com IA,
I want que o site tenha SEO otimizado para rankeamento orgânico,
so that potenciais clientes me encontrem via busca.

**Acceptance Criteria:**
1. Metadata única por página (title, description) via Next.js Metadata API
2. Open Graph tags (og:title, og:description, og:image) para todas as páginas, especialmente cases
3. `sitemap.xml` gerado automaticamente com todas as páginas e cases
4. `robots.txt` configurado permitindo indexação
5. Schema.org implementado: Person (sobre), Service (serviços), CreativeWork (cases)
6. Canonical URLs definidas

**Complexity:** M (Medium)

## Story 4.3: Google Analytics e Otimização de Performance

As a Gestor de Automação com IA,
I want analytics integrado e performance otimizada,
so that eu possa medir visitas e garantir boa experiência do usuário.

**Acceptance Criteria:**
1. Google Analytics 4 integrado via `next/script` com consent-aware loading
2. Eventos personalizados rastreados: clique em case, envio de formulário, clique em CTA
3. Score Lighthouse 90+ em todas as 4 categorias (Performance, Accessibility, Best Practices, SEO)
4. Imagens otimizadas com Next.js Image (lazy loading, WebP/AVIF, responsive sizes)
5. Bundle size analisado e otimizado (code splitting, dynamic imports onde necessário)

**Complexity:** M (Medium)

## Story 4.4: Deploy na Hostinger

As a Gestor de Automação com IA,
I want o site publicado e acessível na Hostinger,
so that leads possam acessar meu portfólio online.

**Acceptance Criteria:**
1. Build de produção (`next build`) funciona sem erros
2. Estratégia de deploy definida para Hostinger (SSG export ou Node.js hosting)
3. Configuração de domínio/subdomínio funcional
4. HTTPS ativo
5. Variáveis de ambiente de produção configuradas (analytics ID, email service keys)
6. Smoke test manual confirma que todas as páginas carregam corretamente em produção

**Complexity:** M (Medium)

---
