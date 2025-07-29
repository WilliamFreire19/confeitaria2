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
    // ... (restante das imagens permanece o mesmo)
  ];

  const filteredImages = selectedCategory === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Cabeçalho e botões de categoria permanecem iguais */}
      
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
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-md md:max-w-2xl lg:max-w-6xl bg-white rounded-2xl overflow-hidden my-8" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 md:h-96 lg:h-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6 md:p-8 space-y-4 md:space-y-6 overflow-y-auto max-h-[80vh]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <div className="text-xl md:text-2xl font-bold text-pink-600">{selectedImage.price}</div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <div className="flex items-center mb-1 md:mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-cake-3-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Sabor:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.flavor}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1 md:mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-palette-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Cobertura:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.frosting}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1 md:mb-2">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className="ri-star-line text-pink-600"></i>
                      </div>
                      <span className="font-semibold text-gray-900">Detalhes:</span>
                    </div>
                    <p className="text-gray-600 ml-9">{selectedImage.details}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-1 md:mb-2">
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