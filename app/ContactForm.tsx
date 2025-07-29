"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    productType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Função para mapear categoria para nome do produto
  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      "bolo-personalizado": "Bolo Personalizado",
      cupcakes: "Cupcakes",
      macarons: "Macarons",
      tortas: "Tortas",
      docinhos: "Docinhos de Festa",
      cookies: "Cookies Decorados",
    };
    return categoryMap[category] || category;
  };

  // Efeito para capturar parâmetros da URL
  useEffect(() => {
    const product = searchParams.get("produto");
    if (product) {
      setFormData((prev) => ({
        ...prev,
        productType: product,
      }));
    }
  }, [searchParams]);

  // Efeito para escutar eventos customizados do ProductsSection
  useEffect(() => {
    const handleProductSelected = (event) => {
      const { product } = event.detail;
      setFormData((prev) => ({
        ...prev,
        productType: product,
      }));
    };

    window.addEventListener("productSelected", handleProductSelected);

    return () => {
      window.removeEventListener("productSelected", handleProductSelected);
    };
  }, []);

  // Efeito para detectar mudanças na URL sem reload da página
  useEffect(() => {
    const handleURLChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const product = urlParams.get("produto");
      if (product) {
        setFormData((prev) => ({
          ...prev,
          productType: product,
        }));
      }
    };

    window.addEventListener("popstate", handleURLChange);

    return () => {
      window.removeEventListener("popstate", handleURLChange);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.message.length > 500) {
      setSubmitMessage("A mensagem não pode exceder 500 caracteres.");
      setIsSubmitting(false);
      return;
    }

    // Redirecionar para WhatsApp
    const whatsappNumber = "5591991883384";
    const productDisplayName = getCategoryDisplayName(formData.productType);

    const message = `Olá! Gostaria de fazer um orçamento:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo de Evento: ${formData.eventType || "Não informado"}
Data do Evento: ${formData.eventDate || "Não informado"}
Número de Convidados: ${formData.guests || "Não informado"}
Produto: ${productDisplayName || "Não informado"}
Orçamento: ${formData.budget || "Não informado"}
Mensagem: ${formData.message || "Nenhuma mensagem adicional"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    setSubmitMessage("Redirecionando para WhatsApp...");
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Faça seu Pedido
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para criar o doce perfeito para sua ocasião
            especial
          </p>
          {formData.productType && (
            <div className="mt-4 inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
              <i className="ri-cake-2-line mr-2"></i>
              Produto selecionado:{" "}
              {getCategoryDisplayName(formData.productType)}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tipo de Evento
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm pr-8"
                >
                  <option value="">Selecione o tipo de evento</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="casamento">Casamento</option>
                  <option value="batizado">Batizado</option>
                  <option value="formatura">Formatura</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Data do Evento
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Número de Convidados
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm"
                  placeholder="Ex: 50"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Tipo de Produto
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm pr-8"
                >
                  <option value="">Selecione o produto</option>
                  <option value="bolo-personalizado">Bolo Personalizado</option>
                  <option value="cupcakes">Cupcakes</option>
                  <option value="macarons">Macarons</option>
                  <option value="tortas">Tortas</option>
                  <option value="docinhos">Docinhos de Festa</option>
                  <option value="cookies">Cookies Decorados</option>
                  <option value="mesa-doces">Mesa de Doces Completa</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Orçamento Aproximado
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm pr-8"
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="ate-200">Até R$ 200</option>
                  <option value="200-500">R$ 200 - R$ 500</option>
                  <option value="500-1000">R$ 500 - R$ 1000</option>
                  <option value="acima-1000">Acima de R$ 1000</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem Adicional
                  <span className="text-sm text-gray-500">
                    ({formData.message.length}/500 caracteres)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 text-sm resize-none"
                  placeholder="Descreva detalhes específicos sobre seu pedido, cores, sabores preferidos, decoração, etc."
                />
                {formData.message.length > 450 && (
                  <p className="text-orange-500 text-sm mt-1">
                    Atenção: Você está próximo do limite de caracteres.
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? "Enviando..." : "Enviar via WhatsApp"}
                </button>
              </div>

              {submitMessage && (
                <div className="md:col-span-2 text-center">
                  <p
                    className={`mt-4 p-4 rounded-lg ${
                      submitMessage.includes("Redirecionando")
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg mr-3">
                    <i className="ri-phone-fill text-pink-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">(91) 99188-3384</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg mr-3">
                    <i className="ri-mail-fill text-pink-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@doceencanto.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg mr-3 mt-1">
                    <i className="ri-map-pin-fill text-pink-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua das Flores, 123
                      <br />
                      Bairro Centro, Belém - PA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda - Sexta</span>
                  <span className="font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-semibold">8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-semibold">Fechado</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-pink-700">
                  <i className="ri-information-line mr-1"></i>
                  Atendemos por encomenda com 48h de antecedência
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Nossa Localização
          </h3>
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819592491591!2d-48.503662085542846!3d-1.455833798659524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c35d88b0d5f%3A0x5f2b58a4d5c0b4f!2sVer-o-Peso%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt!2sbr!4v1654020000000!5m2!1spt!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
