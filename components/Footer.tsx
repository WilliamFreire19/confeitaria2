'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-pacifico text-pink-400 mb-4">Doce Encanto</h3>
            <p className="text-gray-300">
              Criando momentos doces e especiais para sua vida desde 2015.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-phone-line text-pink-400"></i>
                </div>
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-pink-400"></i>
                </div>
                <span className="text-gray-300">contato@doceencanto.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário</h4>
            <div className="text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 16h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <i className="ri-whatsapp-line text-white"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Doce Encanto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}