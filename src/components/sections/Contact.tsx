import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Linkedin, Send, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Simulate form submission
    toast.success('Mensagem enviada com sucesso! Retornarei em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "(21) 99350-6065",
      link: "https://wa.me/5521993506065",
      color: "text-green-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      value: "smaleymark@gmail.com",
      link: "mailto:smaleymark@gmail.com",
      color: "text-purple-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "/SmaleyMarques",
      link: "https://linkedin.com/in/SmaleyMarques",
      color: "text-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Rio de Janeiro, RJ",
      link: "#",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar seu negócio com soluções em dados e Business Intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Informações de Contato
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Estou sempre aberto para discutir novos projetos, oportunidades criativas ou parcerias. 
                Entre em contato comigo através de qualquer um dos canais abaixo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${info.color} hover:underline text-sm font-medium`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/5521993506065" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors hover:scale-110 transform duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/SmaleyMarques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors hover:scale-110 transform duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:smaleymark@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors hover:scale-110 transform duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="mt-2 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="mt-2 border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou como posso ajudá-lo..."
                    rows={5}
                    className="mt-2 border-slate-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}