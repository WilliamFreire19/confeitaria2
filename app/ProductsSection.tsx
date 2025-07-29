"use client";

import Link from "next/link";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Bolos Personalizados",
      description: "Bolos únicos e especiais para todas as ocasiões",
      category: "bolo-personalizado",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20elegant%20custom%20birthday%20cake%20with%20multiple%20layers%2C%20realistic%20buttercream%20flowers%2C%20gold%20accents%2C%20professional%20bakery%20lighting%2C%20high-end%20pastry%20photography%2C%20detailed%20decoration%20work&width=400&height=300&seq=real-cake-1&orientation=landscape",
    },
    {
      id: 2,
      name: "Cupcakes Gourmet",
      description: "Cupcakes artesanais com sabores exclusivos",
      category: "cupcakes",
      image:
        "https://readdy.ai/api/search-image?query=High-quality%20studio%20photography%20of%20gourmet%20cupcakes%20with%20perfectly%20swirled%20buttercream%20frosting%2C%20realistic%20textures%2C%20professional%20bakery%20lighting%2C%20elegant%20presentation%2C%20detailed%20piping%20work&width=400&height=300&seq=real-cupcakes-1&orientation=landscape",
    },
    {
      id: 3,
      name: "Macarons Franceses",
      description: "Deliciosos macarons com recheios irresistíveis",
      category: "macarons",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20French%20macarons%20with%20smooth%20shells%20and%20perfect%20feet%2C%20realistic%20almond%20flour%20texture%2C%20elegant%20color%20palette%2C%20high-end%20pastry%20photography%20lighting&width=400&height=300&seq=real-macarons-1&orientation=landscape",
    },
    {
      id: 4,
      name: "Tortas Artesanais",
      description: "Tortas doces e salgadas feitas com ingredientes frescos",
      category: "tortas",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20artisan%20fruit%20tart%20with%20perfectly%20arranged%20fresh%20berries%2C%20glossy%20glaze%2C%20golden%20pastry%20crust%2C%20realistic%20textures%2C%20high-end%20bakery%20photography&width=400&height=300&seq=real-tarts-1&orientation=landscape",
    },
    {
      id: 5,
      name: "Docinhos de Festa",
      description: "Brigadeiros, beijinhos e docinhos variados",
      category: "docinhos",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20Brazilian%20party%20sweets%20brigadeiros%20and%20beijinhos%20with%20realistic%20chocolate%20coating%2C%20colorful%20sprinkles%2C%20elegant%20presentation%2C%20detailed%20texture%20work&width=400&height=300&seq=real-sweets-1&orientation=landscape",
    },
    {
      id: 6,
      name: "Cookies Decorados",
      description: "Cookies personalizados para eventos especiais",
      category: "cookies",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20decorated%20sugar%20cookies%20with%20perfect%20royal%20icing%20work%2C%20realistic%20smooth%20finish%2C%20intricate%20designs%2C%20high-end%20bakery%20photography%20lighting&width=400&height=300&seq=real-cookies-1&orientation=landscape",
    },
  ];

  const handleQuoteRequest = (category) => {
    // Navegar para a seção de contato com o produto selecionado
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      // Atualizar a URL com o parâmetro do produto
      const url = new URL(window.location);
      url.searchParams.set("produto", category);
      window.history.pushState({}, "", url);

      // Fazer scroll suave para a seção
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Disparar evento customizado para notificar o formulário
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("productSelected", {
            detail: { product: category },
          })
        );
      }, 500);
    }
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de doces artesanais, feitos com ingredientes
            de primeira qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  onClick={() => handleQuoteRequest(product.category)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer w-full"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
