// Importe seus arquivos locais aqui:
import logoImg from "@/assets";

export const Header = () => {
  return (
    <header className="relative z-30 flex items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-8">
      {/* Substitua o src pela sua logo */}
      <a href="#" className="flex items-center gap-3 group">
        <img
          src={logoImg}
          alt="Logo da marca"
          className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Botão usando a cor primary definida no :root */}
      <button className="bg-primary hover:bg-primary-hover text-surface font-semibold text-sm md:text-base px-6 py-2.5 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
        Comprar Agora
      </button>
    </header>
  );
};
