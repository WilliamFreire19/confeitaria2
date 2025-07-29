'use client';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Há mais de 8 anos, a Doce Encanto nasceu do sonho de transformar momentos 
                especiais em lembranças ainda mais doces. Começamos como uma pequena 
                confeitaria familiar e hoje somos referência em doces artesanais.
              </p>
              <p>
                Nossa paixão pela confeitaria nos levou a aperfeiçoar constantemente 
                nossas receitas, sempre priorizando ingredientes de qualidade superior 
                e técnicas tradicionais que fazem toda a diferença.
              </p>
              <p>
                Cada doce é feito com amor e dedicação, pensando em proporcionar não 
                apenas sabor, mas uma experiência única que marca os momentos mais 
                importantes da sua vida.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
                <div className="text-gray-600">Bolos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">8</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20female%20baker%20in%20apron%20decorating%20a%20beautiful%20cake%20in%20modern%20bakery%20kitchen%2C%20warm%20lighting%2C%20focused%20expression%2C%20pastry%20chef%20at%20work%2C%20clean%20modern%20kitchen%20environment&width=600&height=500&seq=baker-story&orientation=landscape"
              alt="Nossa confeiteira trabalhando"
              className="rounded-2xl shadow-2xl w-full object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white p-6 rounded-xl shadow-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg mb-2">
                <i className="ri-heart-fill text-pink-600 text-2xl"></i>
              </div>
              <div className="font-semibold">Feito com amor</div>
              <div className="text-pink-200">em cada detalhe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}