export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#17141D] text-white">
      {/* Glow decorativo */}
      <div
        className="
          pointer-events-none absolute
          -top-40 left-1/2 -translate-x-1/2
          h-72 w-96 rounded-full
          bg-primary/15 blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-3 md:py-20">
          {/* Marca */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center gap-2">
              <img src="" />
            </a>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Tecnologia, conforto e qualidade sonora em uma experiência pensada
              para acompanhar você.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              Navegação
            </h4>

            <nav className="flex flex-col items-start gap-3 text-sm text-zinc-300">
              <a
                href="#inicio"
                className="transition-colors hover:text-primary"
              >
                Início
              </a>
              <a
                href="#produto"
                className="transition-colors hover:text-primary"
              >
                Produto
              </a>
              <a
                href="#tecnologia"
                className="transition-colors hover:text-primary"
              >
                Tecnologia
              </a>
              <a
                href="#modelos"
                className="transition-colors hover:text-primary"
              >
                Modelos
              </a>
            </nav>
          </div>

          {/* Produto */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              Produto
            </h4>

            <div className="space-y-3 text-sm text-zinc-300">
              <p>Obsidian Black</p>
              <p>Pure White</p>

              <p className="pt-2 font-semibold text-white">R$ 259,00</p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-px w-full bg-white/10" />

        {/* Rodapé inferior */}
        <div
          className="
          flex flex-col items-center justify-between
          gap-4 py-6 text-center
          sm:flex-row sm:text-left
        "
        >
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Aurora. Todos os direitos reservados.
          </p>

          <a
            href="#inicio"
            className="
              flex items-center gap-2
              text-xs text-zinc-400
              transition-colors hover:text-primary
            "
          >
            Voltar ao topo
            <span className="text-base">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
