<div align="center">
  <img src="./public/images/tubarao-com%20nome.png.PNG" alt="Logotipo da Tropa do Tubarão" width="220" />

  # Tropa do Tubarão

  **Comunidade de corrida em Paulista, Pernambuco.**

  Correr · Superar · Vencer

  [Grupo no WhatsApp](https://chat.whatsapp.com/DJ76xuBQOzH4hf4CSbPNFe?s=sw&amp;p=i&amp;mlu=4) · [Clube no Strava](https://www.strava.com/clubs/2318364) · [Instagram](https://www.instagram.com/tropadotubaraorun)
</div>

## Sobre o projeto

Site institucional da Tropa do Tubarão, desenvolvido para apresentar a comunidade, divulgar treinos e corridas e facilitar o contato com novos participantes.

A experiência combina direção visual esportiva, mascotes da marca, animações ligadas à rolagem e uma interface responsiva baseada na paleta azul, ciano e magenta da Tropa.

> O projeto está em desenvolvimento. Datas, endereços e eventos devem ser revisados antes de cada publicação.

## Funcionalidades

- Hero responsiva com shader WebGL, mascote animado e fallback estático.
- Header compacto durante a rolagem, indicador da seção ativa e progresso da página.
- Apresentação da comunidade e dos seus diferenciais.
- Agenda do próximo treino com confirmação pelo WhatsApp.
- Jornada dos níveis iniciante, intermediário e avançado sincronizada com o scroll no desktop.
- Fluxo vertical simplificado para os níveis em dispositivos móveis.
- Calendário de corridas com links externos para a PE Running.
- Galeria em estado de espera até a primeira corrida da comunidade.
- Seção com acesso ao grupo oficial do WhatsApp e ao clube no Strava.
- CTA de participação, FAQ acessível e página de política de privacidade.
- Menu mobile com contenção de foco, fechamento por `Escape` e retorno do foco ao acionador.
- Suporte a `prefers-reduced-motion` e ao modo de economia de dados.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| Next.js 16 | App Router, renderização e otimização de imagens |
| React 19 | Componentes e interface |
| TypeScript | Tipagem estática |
| Tailwind CSS 4 | Layout, responsividade e identidade visual |
| Framer Motion | Reveals, menu mobile e microinterações |
| GSAP + ScrollTrigger | Jornada dos níveis ligada à rolagem |
| WebGL | Shader animado da hero sem dependências adicionais |
| Radix UI | Accordion acessível do FAQ |
| Lucide React | Ícones da interface |

## Estrutura principal

```text
src/
├── app/
│   ├── layout.tsx                 # Layout raiz e metadados
│   ├── page.tsx                   # Composição da página inicial
│   ├── globals.css                # Tema e estilos globais
│   └── politica-de-privacidade/   # Página de privacidade
├── components/
│   ├── ui/                        # Primitivos e componentes visuais
│   ├── hero.tsx                   # Hero principal
│   ├── running-level-journey.tsx  # Experiência GSAP dos níveis
│   ├── community-channels.tsx     # WhatsApp e Strava
│   └── ...                        # Demais seções da página
├── data/
│   └── site-data.ts               # Treino, níveis, corridas e FAQ
└── lib/
    ├── gsap.ts                    # Carregamento sob demanda do GSAP
    └── utils.ts                   # Utilitários e URL do WhatsApp

public/images/                      # Logotipos, mascotes, fotos e mídia
scripts/visual-check.mjs            # Auditoria visual com Chrome
```

## Executar localmente

### Pré-requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
git clone https://github.com/diegocoodes/TropadoTuba.git
cd TropadoTuba
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Produção local

```bash
npm run build
npm run start
```

## Variável de ambiente

Copie `.env.example` para `.env.local` e informe somente os dígitos do telefone, incluindo código do país e DDD:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=55DDDNUMERO
```

Essa variável alimenta a confirmação direta do próximo treino. Os CTAs de participação usam o link público do grupo oficial da comunidade.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Executa o ESLint |
| `npm run typecheck` | Valida os tipos sem gerar arquivos |
| `npm run build` | Cria o build otimizado de produção |
| `npm run start` | Inicia o servidor de produção após o build |

## Conteúdo e manutenção

- Próximo treino, níveis, corridas e FAQ: `src/data/site-data.ts`
- Links do WhatsApp e Strava: `src/components/community-channels.tsx`
- Metadados e compartilhamento social: `src/app/layout.tsx`
- Identidade visual e responsividade: `src/app/globals.css`
- Imagens e mascotes: `public/images/`
- Créditos de imagens provisórias: `public/images/CREDITS.md`

A galeria não exibe fotos neste momento. Os primeiros registros devem ser publicados somente depois da primeira corrida da comunidade.

## Mídia e performance

- O mascote animado da hero utiliza `tubarao-correndo-hero.webp`.
- `tubarao-correndo-poster.webp` é exibido inicialmente e funciona como fallback estático.
- O GIF original foi preservado como fonte, mas não é carregado pela página.
- O shader limita resolução e DPR, pausa fora da viewport e respeita aba oculta.
- GSAP e ScrollTrigger são carregados sob demanda apenas na jornada dos níveis.
- Imagens informativas usam `next/image`, dimensões estáveis e `sizes` responsivo.

## Acessibilidade e responsividade

- Conteúdo organizado com landmarks e headings semânticos.
- Foco visível nos controles e links.
- Menu mobile operável por teclado.
- Alternativas estáticas para redução de movimento e economia de dados.
- CTAs com áreas de toque adequadas.
- Layout verificado em smartphone estreito, smartphone amplo e desktop.

## Qualidade

Execute antes de publicar:

```bash
npm run lint
npm run typecheck
npm run build
```

Para a auditoria visual, gere o build e execute o servidor na porta esperada pelo script:

```bash
npm run build
npm run start -- -p 3010
```

Em outro terminal:

```bash
node scripts/visual-check.mjs
```

O script usa o Google Chrome no caminho padrão do Windows e verifica desktop, mobile, overflow horizontal, carregamento de imagens, menu, erros de console e falhas de rede.

## Checklist de publicação

- [ ] Revisar data, endereço e horários do próximo treino.
- [ ] Confirmar o número em `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- [ ] Validar os links de WhatsApp, Strava, Instagram e eventos.
- [ ] Executar lint, typecheck, build e auditoria visual.
- [ ] Testar teclado, redução de movimento e dispositivos móveis.
- [ ] Atualizar a imagem de compartilhamento social com um asset oficial.
- [ ] Revisar créditos e direitos de uso de todas as mídias.
- [ ] Publicar fotos da galeria somente após a primeira corrida da comunidade.

## Créditos e licença

Os créditos das fotografias provisórias estão documentados em [`public/images/CREDITS.md`](./public/images/CREDITS.md). Logotipos, mascotes e demais elementos da identidade da Tropa do Tubarão não são automaticamente cobertos por uma licença de código aberto.

O repositório ainda não possui um arquivo `LICENSE`. Até que uma licença seja definida, o código e os assets devem ser tratados como **todos os direitos reservados**.
