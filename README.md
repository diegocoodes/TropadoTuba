# Tropa do Tubarão

Site institucional da **Tropa do Tubarão**, comunidade de corrida localizada em Paulista–PE. A aplicação apresenta a equipe, divulga treinos e eventos e transforma o interesse do visitante em uma conversa com a equipe pelo WhatsApp.

O projeto foi desenvolvido como uma landing page completa, responsiva e pronta para receber os dados oficiais da comunidade. A identidade combina linguagem esportiva e editorial, tipografia condensada, fotografias de corrida e a paleta azul, ciano e magenta da marca.

## Principais funcionalidades

- Hero institucional com chamadas para inscrição e agenda de treinos.
- Apresentação da comunidade e dos seus diferenciais.
- Agenda de treinos filtrável por nível.
- Descrição dos níveis iniciante, intermediário e avançado.
- Estatísticas locais com contadores animados.
- Calendário de eventos e provas.
- Galeria responsiva com imagens otimizadas.
- Depoimentos de participantes.
- Formulário validado que prepara uma mensagem para o WhatsApp.
- FAQ acessível com accordion.
- Menu mobile, botão flutuante contextual e página de privacidade.
- SEO, Open Graph, HTML semântico e navegação por teclado.
- Suporte a `prefers-reduced-motion`.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Componentes no padrão shadcn/ui e Radix UI
- Lucide Icons
- Framer Motion
- React Hook Form e Zod
- `next/font` e `next/image`

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para testar a versão de produção:

```bash
npm run build
npm start
```

## Configurar o WhatsApp

Crie `.env.local` a partir de `.env.example` e informe apenas os dígitos do número, incluindo código do país e DDD:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=55DDDNUMERO
```

Nenhum telefone fictício está incluído. Sem essa variável, os atalhos direcionam ao formulário e o envio informa que o contato ainda precisa ser configurado.

O formulário não persiste dados: as informações são usadas no navegador para montar a mensagem e abrir o WhatsApp.

## Organização do projeto

```text
src/
├── app/                   # Rotas, metadados, estilos e política de privacidade
├── components/            # Seções, navegação e componentes de interface
│   └── ui/                # Primitivos no padrão shadcn/ui
├── data/site-data.ts      # Treinos, eventos, números e depoimentos provisórios
└── lib/                   # Utilitários compartilhados
public/images/             # Fotografias locais e créditos
scripts/visual-check.mjs   # Auditoria visual automatizada com Chrome
```

## Atualizar o conteúdo

- Treinos, eventos, estatísticas, galeria e depoimentos: `src/data/site-data.ts`
- Fotografias provisórias: `public/images`
- Créditos das fotografias: `public/images/CREDITS.md`
- Metadados de SEO e compartilhamento: `src/app/layout.tsx`
- Número de WhatsApp: variável `NEXT_PUBLIC_WHATSAPP_NUMBER`

Antes da publicação definitiva, devem ser substituídos pelos dados reais: logo oficial, fotografias da equipe, agenda de treinos, eventos, números, depoimentos e regras de participação.

## Qualidade e validação

```bash
npm run lint
npm run typecheck
npm run build
```

Também há uma auditoria visual automatizada para desktop e celular:

```bash
npm start -- -p 3010
node scripts/visual-check.mjs
```

O script visual pressupõe Google Chrome instalado no caminho padrão do Windows. Ele verifica seções em 1440 px e 390 px, carregamento das imagens, overflow horizontal, menu mobile, filtros, validações, erros de console e falhas de rede.

## Fotografias

As imagens atuais são provisórias e foram obtidas no Pexels. As referências e atribuições estão em `public/images/CREDITS.md`. Para a versão oficial, recomenda-se utilizar fotografias próprias da Tropa do Tubarão.
