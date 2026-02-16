import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomeSection() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-stone-700 to-stone-600 text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            💎 Piedras Preciosas
          </h1>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="hover:text-amber-400 transition-colors font-medium" href="#">
              Inicio
            </a>
            <a className="hover:text-amber-400 transition-colors font-medium" href="#about">
              Nosotros
            </a>
            <a className="hover:text-amber-400 transition-colors font-medium" href="#productos">
              Productos
            </a>
            <a className="hover:text-amber-400 transition-colors font-medium" href="#contact">
              Contacto
            </a>
          </nav>
          <button className="md:hidden text-white">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518568403628-df55701ade9e?w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Piedras <span className="text-amber-400">Preciosas</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-8">
            Las mejores piedras naturales para tu jardín y decoración.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg rounded-full transition-all hover:scale-105">
            Ver Precios
          </Button>
        </div>
      </section>
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-white" id="about">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Quiénes Somos</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 mt-2">
                  Piedras <span className="text-stone-600">100% Naturales</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nos dedicamos a la venta de piedras naturales. Piedras lisas 
                  y redondeadas perfectas para cualquier proyecto.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 text-lg">
                  Perfectas para decorar jardines, macetas, fuentes, acuarios o cualquier 
                  espacio que quieras embellecer con un toque natural.
                </p>
                <div className="mt-8 flex gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-stone-700">100%</div>
                    <div className="text-gray-500 text-sm">Naturales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-stone-700">5+</div>
                    <div className="text-gray-500 text-sm">Tamaños</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-stone-700">Envío</div>
                    <div className="text-gray-500 text-sm">A Domicilio</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-stone-400 to-amber-400 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  alt="Piedras de río"
                  className="rounded-2xl shadow-2xl relative z-10"
                  height={400}
                  src="https://images.unsplash.com/photo-1518568403628-df55701ade9e?w=600&q=80"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width={600} />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-100 to-white" id="productos">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Nuestros Productos</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Piedras Por Tamaño</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Elige el tamaño perfecto para tu proyecto</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    alt="Piedras pequeñas"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">Popular</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Piedras Pequeñas</h3>
                  <p className="text-gray-600 text-sm">1-3 cm. Ideales para macetas, acuarios y detalles decorativos.</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-amber-600 font-bold text-xl">$8/kg</p>
                    <Button className="bg-stone-700 hover:bg-stone-800">Cotizar</Button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    alt="Piedras medianas"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?w=400&q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Piedras Medianas</h3>
                  <p className="text-gray-600 text-sm">4-8 cm. Perfectas para jardines, senderos y bordes.</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-amber-600 font-bold text-xl">$6/kg</p>
                    <Button className="bg-stone-700 hover:bg-stone-800">Cotizar</Button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    alt="Piedras grandes"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=400&q=80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Piedras Grandes</h3>
                  <p className="text-gray-600 text-sm">10-20 cm. Para decoración de espacios amplios y fuentes.</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-amber-600 font-bold text-xl">$5/kg</p>
                    <Button className="bg-stone-700 hover:bg-stone-800">Cotizar</Button>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Sección de usos */}
            <div className="mt-16 bg-stone-800 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">¿Para Qué Sirven?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="text-4xl mb-3">🌿</div>
                  <h4 className="font-bold">Jardines</h4>
                  <p className="text-stone-400 text-sm mt-1">Decoración natural</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-3">🪴</div>
                  <h4 className="font-bold">Macetas</h4>
                  <p className="text-stone-400 text-sm mt-1">Cobertura y drenaje</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-3">🐠</div>
                  <h4 className="font-bold">Acuarios</h4>
                  <p className="text-stone-400 text-sm mt-1">Fondo decorativo</p>
                </div>
                <div className="p-4">
                  <div className="text-4xl mb-3">⛲</div>
                  <h4 className="font-bold">Fuentes</h4>
                  <p className="text-stone-400 text-sm mt-1">Estética natural</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gradient-to-r from-stone-800 to-stone-700 text-white py-12 px-6 md:px-12" id="contact">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>💎</span> Piedras Preciosas
            </h3>
            <p className="text-stone-300">¿Quieres piedras? ¡Escríbenos!</p>
            <p className="text-amber-400 font-semibold mt-2">Tel: (123) 456-7890</p>
            <div className="mt-6 flex space-x-4">
              <Link className="bg-white/10 p-3 rounded-full hover:bg-amber-500 transition-colors" href="#">
                <MailIcon className="h-5 w-5" />
              </Link>
              <Link className="bg-white/10 p-3 rounded-full hover:bg-amber-500 transition-colors" href="#">
                <PhoneIcon className="h-5 w-5" />
              </Link>
              <Link className="bg-white/10 p-3 rounded-full hover:bg-amber-500 transition-colors" href="#">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link className="bg-white/10 p-3 rounded-full hover:bg-amber-500 transition-colors" href="#">
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-stone-300">© 2026 Piedras Preciosas</p>
            <p className="text-stone-400 text-sm mt-1">Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}

function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}

function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}

function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}

function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
