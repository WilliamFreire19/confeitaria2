'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Beautiful%20modern%20bakery%20interior%20with%20elegant%20display%20cases%20filled%20with%20colorful%20macarons%2C%20cupcakes%2C%20and%20pastries%2C%20warm%20lighting%2C%20marble%20counters%2C%20soft%20pink%20and%20cream%20color%20scheme%2C%20professional%20photography%2C%20inviting%20atmosphere%2C%20high-end%20confectionery%20shop&width=1920&height=1080&seq=hero-bakery&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Doces que <span className="text-pink-300">Encantam</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Criamos experiências únicas através de doces artesanais feitos com amor, 
            ingredientes selecionados e muito carinho para tornar seus momentos especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#produtos" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Ver Produtos
            </a>
            <a 
              href="#contato" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Fazer Pedido
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}