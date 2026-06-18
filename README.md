# DevPortfolio — Portfólio de Desenvolvedor

Portfólio pessoal de **Kaio Vieira Nunes**, desenvolvido com HTML, CSS e JavaScript puros. Design escuro com glassmorphism, tipografia Inter e schema de cores Material Design 3.

## Tecnologias

- HTML5 semântico
- CSS3 puro (variáveis CSS, glassmorphism, grid, flexbox)
- JavaScript (EmailJS para formulário de contato)
- Google Fonts (Inter, JetBrains Mono)
- Material Symbols

## Seções

| Seção     | Descrição                                 |
| --------- | ----------------------------------------- |
| Hero      | Apresentação principal com CTA            |
| Sobre     | Biografia e tecnologias principais        |
| Projetos  | Grid de projetos com cards interativos    |
| Contato   | Formulário com integração EmailJS         |

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/portfolio-pessoal.git
   ```
2. Abra o `index.html` no navegador (ou use Live Server).

Não requer build, instalação ou dependências.

## Estrutura

```
portfolio-pessoal/
├── index.html          # Página principal
├── css/
│   └── style.css       # Variáveis CSS e estilos
├── js/
│   └── main.js         # Envio do formulário (EmailJS)
├── img/                # Screenshots dos projetos
├── opencode.json       # Configuração opencode (Stitch API)
└── README.md
```

## Variáveis CSS

O design system completo está definido em `:root` no `css/style.css`:

- **Cores:** paleta Material Design 3 (~40 tokens entre surface, primary, secondary, tertiary, error)
- **Tipografia:** 7 níveis tipográficos (display-xl a code)
- **Espaçamento:** container, gutter, section-gap, pilha (sm/md/lg)
- **Bordas:** escala de radius (sm a full)

Todas as variáveis seguem o padrão `--color-*`, `--text-*`, `--spacing-*`, `--rounded-*`.

## Autor

**Kaio Vieira Nunes** — Estudante de Engenharia da Computação (UFC) e Desenvolvedor Front-end na Loading Júnior.
