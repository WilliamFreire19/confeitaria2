'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      event: "Casamento",
      rating: 5,
      comment: "O bolo do nosso casamento superou todas as expectativas! Além de lindo, estava delicioso. Todos os convidados elogiaram. A Doce Encanto fez nosso dia ainda mais especial!",
      image: "https://readdy.ai/api/search-image?query=Happy%20bride%20smiling%20in%20wedding%20dress%2C%20professional%20portrait%20photography%2C%20natural%20lighting%2C%20joyful%20expression%2C%20elegant%20appearance%2C%20clean%20background&width=80&height=80&seq=bride-maria&orientation=squarish"
    },
    {
      id: 2,
      name: "João Santos",
      event: "Aniversário",
      rating: 5,
      comment: "Encomendei cupcakes para o aniversário da minha filha e foi um sucesso total! Os sabores estavam incríveis e a decoração ficou perfeita. Já virei cliente fiel!",
      image: "https://readdy.ai/api/search-image?query=Happy%20father%20holding%20his%20daughter%2C%20family%20portrait%2C%20warm%20smile%2C%20casual%20clothing%2C%20loving%20expression%2C%20natural%20lighting%2C%20clean%20background&width=80&height=80&seq=father-joao&orientation=squarish"
    },
    {
      id: 3,
      name: "Ana Costa",
      event: "Evento Corporativo",
      rating: 5,
      comment: "Contratamos a Doce Encanto para nosso evento corporativo e foi uma escolha certeira. Os docinhos estavam divinos e o atendimento foi impecável. Recomendo muito!",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20smiling%2C%20corporate%20headshot%2C%20confident%20expression%2C%20business%20attire%2C%20clean%20professional%20background&width=80&height=80&seq=ana-corporate&orientation=squarish"
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      event: "Formatura",
      rating: 5,
      comment: "A torta da minha formatura estava simplesmente perfeita! O sabor de chocolate belga com frutas vermelhas foi uma combinação incrível. Obrigado por tornarem minha festa inesquecível!",
      image: "https://readdy.ai/api/search-image?query=Young%20graduate%20man%20smiling%20with%20cap%20and%20gown%2C%20graduation%20photo%2C%20proud%20expression%2C%20academic%20achievement%2C%20clean%20background&width=80&height=80&seq=graduate-pedro&orientation=squarish"
    },
    {
      id: 5,
      name: "Carla Mendes",
      event: "Batizado",
      rating: 5,
      comment: "Os macarons do batizado do meu filho ficaram lindos e saborosos! A apresentação estava impecável e todos adoraram. A qualidade da Doce Encanto é excepcional!",
      image: "https://readdy.ai/api/search-image?query=Young%20mother%20holding%20baby%2C%20maternal%20love%2C%20gentle%20smile%2C%20family%20portrait%2C%20warm%20lighting%2C%20soft%20expression%2C%20clean%20background&width=80&height=80&seq=mother-carla&orientation=squarish"
    },
    {
      id: 6,
      name: "Roberto Lima",
      event: "Aniversário",
      rating: 5,
      comment: "Já são 3 anos seguidos pedindo bolo de aniversário na Doce Encanto. A qualidade sempre impecável, sabores únicos e um atendimento que faz a diferença. Parabéns pelo trabalho!",
      image: "https://readdy.ai/api/search-image?query=Middle%20aged%20man%20smiling%20warmly%2C%20friendly%20expression%2C%20casual%20clothing%2C%20genuine%20happiness%2C%20natural%20lighting%2C%20clean%20background&width=80&height=80&seq=customer-roberto&orientation=squarish"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de quem já confiou na Doce Encanto para tornar seus momentos ainda mais especiais
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-3xl p-12 text-center">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex text-pink-500 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
            </div>

            <div className="mt-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonials[currentTestimonial].comment}"
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover object-top mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-pink-600 font-medium">
                  {testimonials[currentTestimonial].event}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    index === currentTestimonial ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl text-gray-600"></i>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl text-gray-600"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-pink-50 rounded-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-600 rounded-full mx-auto mb-4">
                <i className="ri-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Ingredientes selecionados e receitas tradicionais</p>
            </div>

            <div className="text-center p-6 bg-pink-50 rounded-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-600 rounded-full mx-auto mb-4">
                <i className="ri-time-fill text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pontualidade</h3>
              <p className="text-gray-600">Sempre entregamos no prazo combinado</p>
            </div>

            <div className="text-center p-6 bg-pink-50 rounded-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-600 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-fill text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Atendimento Especial</h3>
              <p className="text-gray-600">Suporte personalizado do início ao fim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}