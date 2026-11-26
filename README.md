# Sonora

Landing page do headphone **Sonora** com animações sincronizadas ao scroll usando GSAP (`ScrollTrigger` e `matchMedia`), navegação por etapas/snap no desktop, trajetória adaptada para mobile e encaixe (dock) do fone no card da seção de modelos.

## Tecnologias

- **React** + **TypeScript**
- **GSAP** (`ScrollTrigger`, `matchMedia`, `gsap.context`)
- **Motion** (animações interativas na seção de cenários/hélice)
- **Tailwind CSS**

## Estrutura Principal

- `src/App.tsx`: Orquestra o estado de encaixe do fone (`isHeadphoneDocked`), refs das seções e inicialização das animações.
- `src/Gsap.config.ts`: Define a entrada do Hero, revelação de seções, trajetórias responsivas (desktop e mobile) e controle de snap/dock.
- `src/components/SectionHero.tsx`: Cabeçalho e tipografia principal.
- `src/components/SectionInfo.tsx`: Apresentação e destaques do produto.
- `src/components/SectionHelix.tsx`: Seletor interativo em hélice para diferentes cenários de uso.
- `src/components/SectionVideo.tsx`: Seção em vídeo.
- `src/components/SectionModels.tsx`: Comparativo/slider dos modelos (**Obsidian Black** e **Pure White**) com área de encaixe do fone.
- `src/components/FloatingHeadphone.tsx`: Fone flutuante acompanhando o scroll antes do encaixe.
- `src/components/Footer.tsx`: Rodapé da página.

## Como rodar o projeto

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
