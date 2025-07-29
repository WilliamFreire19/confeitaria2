
'use client';

import { useState } from 'react';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'bolos', name: 'Bolos' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'macarons', name: 'Macarons' },
    { id: 'tortas', name: 'Tortas' },
    { id: 'docinhos', name: 'Docinhos' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'bolos',
      title: 'Bolo de Casamento Clássico',
      flavor: 'Baunilha com Morangos',
      frosting: 'Buttercream Suíço',
      details: 'Decorado com flores de açúcar feitas à mão',
      serves: '80 pessoas',
      price: 'A partir de R$ 450',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20elegant%20three-tier%20white%20wedding%20cake%20with%20realistic%20sugar%20flowers%2C%20perfect%20buttercream%20texture%2C%20professional%20bakery%20lighting%2C%20detailed%20craftsmanship%2C%20luxury%20wedding%20dessert&width=400&height=500&seq=real-wedding-1&orientation=portrait'
    },
    {
      id: 2,
      category: 'cupcakes',
      title: 'Cupcakes de Chocolate',
      flavor: 'Chocolate Belga Premium',
      frosting: 'Ganache de Chocolate Meio Amargo',
      details: 'Cobertura com raspas de chocolate 70% cacau',
      serves: '1 pessoa por unidade',
      price: 'R$ 8 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20luxury%20chocolate%20cupcakes%20with%20realistic%20ganache%20frosting%2C%20professional%20bakery%20lighting%2C%20rich%20chocolate%20texture%2C%20high-end%20pastry%20photography&width=400&height=500&seq=real-choc-cup&orientation=portrait'
    },
    {
      id: 3,
      category: 'macarons',
      title: 'Macarons Coloridos',
      flavor: 'Sortido: Baunilha, Chocolate, Morango',
      frosting: 'Recheios Cremosos Especiais',
      details: 'Casquinhas perfeitas com pés bem definidos',
      serves: '1-2 pessoas por unidade',
      price: 'R$ 6 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20colorful%20French%20macarons%20with%20perfect%20smooth%20shells%20and%20defined%20feet%2C%20realistic%20almond%20flour%20texture%2C%20elegant%20arrangement%2C%20luxury%20pastry%20photography&width=400&height=500&seq=real-mac-color&orientation=portrait'
    },
    {
      id: 4,
      category: 'bolos',
      title: 'Bolo de Aniversário Unicórnio',
      flavor: 'Massa Colorida de Baunilha',
      frosting: 'Buttercream com Cores Naturais',
      details: 'Chifre dourado e orelhas comestíveis',
      serves: '25 pessoas',
      price: 'A partir de R$ 180',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20realistic%20unicorn%20birthday%20cake%20with%20detailed%20horn%20and%20ears%2C%20professional%20buttercream%20work%2C%20magical%20colors%2C%20high-end%20bakery%20photography%20lighting&width=400&height=500&seq=real-unicorn&orientation=portrait'
    },
    {
      id: 5,
      category: 'tortas',
      title: 'Torta de Frutas Vermelhas',
      flavor: 'Base de Biscoito Amanteigado',
      frosting: 'Creme de Confeiteiro',
      details: 'Frutas frescas da estação selecionadas',
      serves: '12 pessoas',
      price: 'R$ 85',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20elegant%20berry%20tart%20with%20fresh%20strawberries%20and%20blueberries%2C%20realistic%20pastry%20crust%20texture%2C%20glossy%20finish%2C%20luxury%20bakery%20photography&width=400&height=500&seq=real-berry-tart&orientation=portrait'
    },
    {
      id: 6,
      category: 'docinhos',
      title: 'Brigadeiros Gourmet',
      flavor: 'Chocolate Belga e Leite Ninho',
      frosting: 'Cobertura Variada Premium',
      details: 'Granulado belga, castanhas e coco',
      serves: '1 pessoa por unidade',
      price: 'R$ 3,50 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20gourmet%20brigadeiros%20with%20realistic%20chocolate%20coating%2C%20luxury%20toppings%2C%20professional%20bakery%20lighting%2C%20detailed%20texture%20work%2C%20elegant%20presentation&width=400&height=500&seq=real-brig-gour&orientation=portrait'
    },
    {
      id: 7,
      category: 'bolos',
      title: 'Bolo Red Velvet',
      flavor: 'Red Velvet Tradicional',
      frosting: 'Cream Cheese Americano',
      details: 'Massa vermelha aveludada autêntica',
      serves: '20 pessoas',
      price: 'R$ 120',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20authentic%20red%20velvet%20cake%20with%20visible%20red%20layers%2C%20realistic%20cream%20cheese%20frosting%20texture%2C%20professional%20bakery%20lighting%2C%20luxury%20presentation&width=400&height=500&seq=real-red-velvet&orientation=portrait'
    },
    {
      id: 8,
      category: 'cupcakes',
      title: 'Cupcakes de Baunilha',
      flavor: 'Baunilha Madagascar Premium',
      frosting: 'Buttercream de Baunilha',
      details: 'Decoração com pérolas comestíveis',
      serves: '1 pessoa por unidade',
      price: 'R$ 7 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20vanilla%20cupcakes%20with%20perfect%20swirled%20buttercream%20frosting%2C%20realistic%20texture%2C%20edible%20pearls%20decoration%2C%20luxury%20bakery%20photography&width=400&height=500&seq=real-vanilla-cup&orientation=portrait'
    },
    {
      id: 9,
      category: 'macarons',
      title: 'Macarons de Lavanda',
      flavor: 'Lavanda Francesa',
      frosting: 'Ganache Branco com Lavanda',
      details: 'Flores de lavanda cristalizadas',
      serves: '1-2 pessoas por unidade',
      price: 'R$ 7 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20purple%20lavender%20macarons%20with%20perfect%20shells%2C%20realistic%20lavender%20flowers%20decoration%2C%20elegant%20presentation%2C%20luxury%20pastry%20photography&width=400&height=500&seq=real-lavender-mac&orientation=portrait'
    },
    {
      id: 10,
      category: 'tortas',
      title: 'Torta de Chocolate',
      flavor: 'Chocolate 70% Cacau',
      frosting: 'Ganache Espelhada',
      details: 'Acabamento brilhante profissional',
      serves: '16 pessoas',
      price: 'R$ 95',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20decadent%20chocolate%20tart%20with%20mirror%20glaze%20finish%2C%20realistic%20glossy%20texture%2C%20luxury%20presentation%2C%20high-end%20bakery%20photography&width=400&height=500&seq=real-choc-tart&orientation=portrait'
    },
    {
      id: 11,
      category: 'docinhos',
      title: 'Beijinhos de Coco',
      flavor: 'Leite Condensado e Coco',
      frosting: 'Coco Ralado Fresco',
      details: 'Receita tradicional da família',
      serves: '1 pessoa por unidade',
      price: 'R$ 3 por unidade',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20traditional%20Brazilian%20coconut%20beijinhos%20with%20realistic%20coconut%20flakes%2C%20authentic%20appearance%2C%20professional%20bakery%20lighting&width=400&height=500&seq=real-beijinhos&orientation=portrait'
    },
    {
      id: 12,
      category: 'bolos',
      title: 'Bolo de Limão',
      flavor: 'Limão Siciliano',
      frosting: 'Cobertura de Limão com Merengue',
      details: 'Raspas de limão e decoração cítrica',
      serves: '18 pessoas',
      price: 'R$ 110',
      image: 'https://readdy.ai/api/search-image?query=Professional%20studio%20photograph%20of%20fresh%20lemon%20cake%20with%20realistic%20meringue%20topping%2C%20lemon%20zest%20decoration%2C%20bright%20citrus%20colors%2C%20luxury%20bakery%20photography&width=400&height=500&seq=real-lemon-cake&orientation=portrait'
    }
  ];

  const filteredImages = selectedCategory === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa Galeria</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Veja alguns dos nossos trabalhos mais especiais e inspire-se para seu próximo pedido
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === category.id
                ? 'bg-pink-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <div className="h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-96 lg:h-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <div className="text-2xl font-bold text-pink-600">{selectedImage.price}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-cake-3-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Sabor:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.flavor}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-palette-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Cobertura:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.frosting}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-star-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Detalhes:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.details}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-group-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Serve:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.serves}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <button 
                    onClick={() => {
                      window.open(`https://wa.me/5591991883384?text=Olá! Tenho interesse no ${selectedImage.title}. Gostaria de mais informações!`, '_blank');
                    }}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
