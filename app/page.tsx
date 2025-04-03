"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"

import { MapPin, Phone, Mail } from "lucide-react"
import type React from "react"

const expansions = [
  {
    title: "Creación de GAS TRAKER",
    description: `Gas Traker nace con la misión de desarrollar tecnología que transforme y modernice distintos sectores productivos. Su objetivo es ofrecer herramientas que mejoren la eficiencia operativa, con un enfoque centrado en la innovación, la precisión y la escalabilidad.`
  },
  {
    title: "Expansión con EXPRESS 57",
    description: `Empresa mexicana en expansión con una cadena de 12 tiendas de conveniencia. Orgullosamente coahuilense, Express 57 busca atender con cercanía, eficiencia y buen servicio a las comunidades del centro y norte del estado.`
  },
  {
    title: "Expansión con GAS 57",
    description: `Gas 57 es una empresa 100% mexicana con 5 estaciones de servicio en operación. Se distingue por su compromiso con el abastecimiento seguro, eficiente y confiable de gasolina, siempre enfocados en la atención al cliente.`
  },
  {
    title: "INTEGSA en telecomunicaciones",
    description: `Empresa de telecomunicaciones con más de 20 años en el mercado. Se especializa en brindar soluciones tecnológicas personalizadas en infraestructura, comunicación y seguridad. Su enfoque integral la ha posicionado como socio estratégico en sectores que demandan innovación y confiabilidad.`
  },
  {
    title: "INMOBILIARIA 57 en el sector inmobiliario",
    description: `Inmobiliaria 57 se especializa en el desarrollo y comercialización de soluciones inmobiliarias. Ofrece un servicio profesional, confiable y personalizado, con enfoque en la calidad y el detalle en cada proyecto.`
  },
  {
    title: "EL QUIJOTE en el sector comercial",
    description: `Quijote Group es un grupo empresarial orientado al desarrollo comercial e innovación en productos y servicios. Su modelo flexible le permite adaptarse a diversos mercados, detectando oportunidades y ejecutando proyectos con visión estratégica.`
  },
  {
    title: "DRULA CONSTRUCTORA en infraestructura",
    description: `Empresa constructora enfocada en infraestructura moderna y funcional. Ofrece soluciones de alto nivel técnico, asegurando calidad, cumplimiento y eficiencia en cada obra. Su compromiso es construir espacios duraderos y confiables.`
  }
];

export default function Page() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm h-16">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <Link href="/" className="relative z-10" style={{ top: '1px' }}>
            <Image
              src="/images/grupo57.png"
              alt="Grupo 57 Logo"
              width={100}
              height={100}
              className="w-20 h-20 object-contain"
              priority
            />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem><Link href="#" className="px-4 py-2 text-sm">Inicio</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="#about" className="px-4 py-2 text-sm">Nosotros</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="#companies" className="px-4 py-2 text-sm">Empresas</Link></NavigationMenuItem>
              <NavigationMenuItem><Link href="#contact" className="px-4 py-2 text-sm">Contáctanos</Link></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-red-900 opacity-50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Image src="/images/grupo57.png" alt="Grupo 57 Logo" width={200} height={200} className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-7xl font-display mb-8 leading-tight">Grupo 57</h1>
        </div>
      </section>

      {/* Nosotros */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Acerca de Grupo 57</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">En 1999, un grupo de visionarios en el norte de México decidió apostar por la innovación y el crecimiento empresarial.</p>

          {/* Historia */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold">Nuestra Historia</h3>
            <p className="mt-4 text-gray-300">Comenzamos con una pequeña empresa dedicada a la distribución de suministros energéticos. Con el paso de los años, nos expandimos a distintos sectores clave, evolucionando hacia una organización multifacética.</p>
          </div>

          {/* Expansión y Crecimiento */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold">Expansión y Crecimiento</h3>
            <ul className="mt-4 space-y-4">
              {expansions.map((item, i) => (
                <ExpandableCard key={i} title={item.title} description={item.description} />
              ))}
            </ul>
          </div>

          {/* Misión / Visión */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            <div className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Misión</h3>
              <p className="text-gray-300">Ser líderes en soluciones integrales en el sector energético y de construcción, comprometidos con la excelencia y la satisfacción de nuestros clientes.</p>
            </div>
            <div className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Visión</h3>
              <p className="text-gray-300">Consolidarnos como un grupo empresarial de referencia, innovando constantemente y contribuyendo al desarrollo sostenible de nuestra comunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas */}
      <section id="companies" className="py-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CompanyCard logo="/images/gas57.png" name="GAS 57" link="https://express57.mx/" />
          <CompanyCard logo="/images/express.png" name="EXPRESS 57" link="https://express57.mx/" />
          <CompanyCard logo="/images/integsa.png" name="INTEGSA" link="https://es.integsa.com/" />
          <CompanyCard logo="/images/gastraker.png" name="GAS TRAKER" link="http://www.gas-tracker.com.mx/" />
          <CompanyCardNoLink logo="/images/drula.png" name="DRULA CONSTRUCTORA" />
          <CompanyCardNoLink logo="/images/imob57.png" name="INMOBILIARIA 57" />
          <div className="col-span-full flex justify-center">
            <CompanyCardNoLink logo="/images/elquijote.png" name="EL QUIJOTE GROUP" />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <ContactDetail icon={<MapPin className="w-6 h-6" />} label="Ubicación" value="Sabinas, COAH, México" />
              <ContactDetail icon={<Phone className="w-6 h-6" />} label="Teléfono" value="+52 818-362-4064" />
              <ContactDetail icon={<Mail className="w-6 h-6" />} label="Email" value="administracion@gastraker.com" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
              <Input type="email" placeholder="Correo Electrónico" required />
              <Input type="tel" placeholder="Teléfono" required />
              <Textarea placeholder="Escribe tu mensaje..." required />
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// Cards
function CompanyCard({ logo, name, link }: { logo: string; name: string; link: string }) {
  return (
    <Card className="bg-white/5 border-white/10 hover:border-white/20 transform hover:scale-105 duration-300 transition-all flex flex-col items-center text-center h-full">
      <CardContent className="p-6 flex flex-col items-center justify-between h-full">
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <Image src={logo} alt={name} width={128} height={128} className="object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
        <Button asChild className="w-full mt-auto">
          <Link href={link} target="_blank">Visitar Sitio</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function CompanyCardNoLink({ logo, name }: { logo: string; name: string }) {
  return (
    <Card className="bg-white/5 border-white/10 hover:border-white/20 transform hover:scale-105 duration-300 transition-all flex flex-col items-center text-center h-full">
      <CardContent className="p-6 flex flex-col items-center justify-between h-full">
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <Image src={logo} alt={name} width={128} height={128} className="object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
      </CardContent>
    </Card>
  )
}

// Expandable card
function ExpandableCard({ title, description }: { title: string, description: string }) {
  const [open, setOpen] = useState(false)
  return (
    <li
      onClick={() => setOpen(!open)}
      className="bg-gray-700 p-4 rounded-lg font-bold text-white cursor-pointer transition-all duration-300 text-center"
    >
      <div className="flex justify-center items-center space-x-2">
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && (
        <p className="text-sm font-normal text-gray-300 mt-3">
          {description}
        </p>
      )}
    </li>
  )
}


// Contact detail
function ContactDetail({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="font-semibold text-white mb-1">{label}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  )
}
