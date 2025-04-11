import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface ContactSectionProps {
  businessName?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

export const ContactSection: React.FC = ({
  address = "Av. Monsenhor Gerônimo Galo, 432 - Sala 3 - Vila Rezende, Piracicaba - SP",
  phone = "(19) 98444-8330",
  email = "andre@medinamplanejados.com.br",
  hours = "Segunda a Sexta: 9h às 18h | Sábado: 9h às 13h",
}: ContactSectionProps) => {
  const budgetOptions: Array<{ value: string; label: string }> = [
    { value: "under-5000", label: "Até R$ 5.000" },
    { value: "5000-10000", label: "R$ 5.000 a R$ 10.000" },
    { value: "10000-20000", label: "R$ 10.000 a R$ 20.000" },
    { value: "20000-30000", label: "R$ 20.000 a R$ 30.000" },
    { value: "30000-50000", label: "R$ 30.000 a R$ 50.000" },
    { value: "above-50000", label: "Acima de R$ 50.000" },
  ];

  const projectTypeOptions: Array<{ value: string; label: string }> = [
    { value: "kitchen", label: "Cozinha Planejada" },
    { value: "bedroom", label: "Quarto Planejado" },
    { value: "living-room", label: "Sala Planejada" },
    { value: "office", label: "Escritório Planejado" },
    { value: "other", label: "Outro" },
  ];

  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar seus espaços com móveis planejados
            de alta qualidade. Preencha o formulário abaixo para solicitar um
            orçamento ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Solicite um Orçamento
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid w-full gap-1.5">
                  <Label>Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label>E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid w-full gap-1.5">
                  <Label>Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label>Tipo de Projeto</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipo de Projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipos</SelectLabel>
                        {projectTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>{" "}
                </div>
              </div>

              <div className="grid w-full gap-1.5">
                <Label>Faixa de Orçamento</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o Orçamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Orçamentos</SelectLabel>
                      {budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full gap-1.5">
                <Label>Mensagem</Label>
                <Textarea
                  placeholder="Digite sua mensagem aqui."
                  id="message-area"
                  className="resize-none h-50"
                />
                <p className="text-sm text-muted-foreground">
                  Sua mensagem será enviada para nosso time!
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[hsl(210,100%,30%)] hover:bg-[hsl(210,100%,20%)] text-white py-3 rounded-md transition-colors"
              >
                Enviar Solicitação
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[hsl(210,100%,30%)] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">Endereço</h4>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[hsl(210,100%,30%)] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <p className="text-gray-600">{phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[hsl(210,100%,30%)] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">E-mail</h4>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[hsl(210,100%,30%)] mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5401112783165!2d-47.65989558852277!3d-22.708157779309445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6318ea10603d3%3A0x74d28ccd703a1fce!2sMedina%20M%C3%B3veis%20Planejados!5e0!3m2!1spt-BR!2sbr!4v1744400489630!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Medina Planejados"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
