import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react'

import logo from '../imagenes/logo.jpeg'
import wovenBag from '../imagenes/carteras/WhatsApp Image 2026-10-27 at 1.07.04 PM.jpeg'
import pinkBag from '../imagenes/carteras/WhatsApp Image 2026-10-27 at 1.07.04 PM (1).jpeg'
import neutralBag from '../imagenes/carteras/WhatsApp Image 2026-10-27 at 1.07.04 PM (2).jpeg'
import burgundyBag from '../imagenes/carteras/WhatsApp Image 2026-10-27 at 1.07.03 PM.jpeg'
import stripedBag from '../imagenes/carteras/WhatsApp Image 2026-10-27 at 1.07.03 PM (1).jpeg'

const whatsappMessage = 'Hola, me gustaría comprar una de tus carteras.'
const whatsappUrl = `https://wa.me/5355207629?text=${encodeURIComponent(whatsappMessage)}`

const products = [
  {
    name: 'Tierra cálida',
    tag: 'Favorita',
    image: wovenBag,
    color: 'Marrón · Mostaza',
    description: 'Amplia y ligera, perfecta para acompañarte todos los días.',
  },
  {
    name: 'Rosa nube',
    tag: 'Nuevo',
    image: pinkBag,
    color: 'Rosa pastel',
    description: 'Suave, delicada y con el espacio justo para tus esenciales.',
  },
  {
    name: 'Lino sereno',
    tag: 'Versátil',
    image: neutralBag,
    color: 'Topo · Marfil',
    description: 'Una silueta atemporal con acabados que hablan de lo hecho a mano.',
  },
  {
    name: 'Borgoña',
    tag: 'Clásica',
    image: burgundyBag,
    color: 'Vino tinto',
    description: 'Diseño con carácter para elevar tus looks de cada temporada.',
  },
  {
    name: 'Arcoíris suave',
    tag: 'Artesanal',
    image: stripedBag,
    color: 'Multicolor',
    description: 'Una pieza especial, colorida y tejida puntada a puntada.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf5] text-[#2d2926]">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="flex items-center gap-2.5" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-[#f4b0c5] ring-2 ring-white/80">
              <img src={logo} alt="Logo Ada Crochet" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-[#3b322f]">Ada Crochet</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-[#d5a393]/50 bg-white/70 text-[#553f38] backdrop-blur md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#715e55] md:flex">
            <a className="nav-link" href="#coleccion">Colección</a>
            <a className="nav-link" href="#historia">Nuestra historia</a>
            <a className="nav-link" href="#contacto">Contacto</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary !px-5 !py-2.5">
              <MessageCircle size={16} />
              Escríbeme
            </a>
          </nav>
        </div>

        {menuOpen && (
          <div className="mx-4 rounded-3xl border border-[#ead9d1] bg-[#fffaf5]/95 p-3 shadow-xl backdrop-blur md:hidden">
            <nav className="flex flex-col text-center text-sm font-medium text-[#715e55]">
              <a className="mobile-link" href="#coleccion" onClick={closeMenu}>Colección</a>
              <a className="mobile-link" href="#historia" onClick={closeMenu}>Nuestra historia</a>
              <a className="mobile-link" href="#contacto" onClick={closeMenu}>Contacto</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="button-primary mt-2 justify-center">
                <MessageCircle size={17} />
                Hablar por WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden pb-20 pt-32 sm:min-h-[840px] lg:min-h-[900px] lg:pt-40">
          <div className="absolute inset-0 -z-20 bg-[#f6d9dc]" />
          <div className="absolute -right-28 top-36 -z-10 h-96 w-96 rounded-full bg-[#f4b6c5]/60 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
          <div className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#e9c4a9]/40 blur-3xl" />
          <div className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(#9f675d_0.8px,transparent_0.8px)] [background-size:23px_23px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12">
            <div className="max-w-xl lg:pb-14">
              <div className="eyebrow mb-6"><Sparkles size={15} /> Hecho a mano en Cuba</div>
              <h1 className="font-serif text-[3.65rem] leading-[.93] tracking-[-0.06em] text-[#44332f] sm:text-7xl lg:text-[6.4rem]">
                Lleva contigo
                <span className="block italic text-[#b66c7d]">algo único.</span>
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#745c55] sm:text-lg sm:leading-8">
                Carteras tejidas con calma, color y mucho cariño. Diseños que cuentan tu historia y hacen especial cada día.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#coleccion" className="button-primary">
                  Ver la colección <ArrowDown size={17} />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-text">
                  Encarga la tuya <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8 border-t border-[#b7857e]/30 pt-6 text-xs uppercase tracking-[0.18em] text-[#8c675e]">
                <span>Diseño</span><span>Calidad</span><span>Con cariño</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-[580px]">
              <div className="absolute -right-3 -top-8 h-24 w-24 rounded-full border border-white/60 bg-white/30 sm:-right-8 sm:-top-12 sm:h-32 sm:w-32" />
              <div className="relative overflow-hidden rounded-[48%_48%_13%_13%] bg-[#e1b7a8] shadow-[18px_24px_0_rgba(174,107,105,0.15)]">
                <img src={wovenBag} alt="Cartera tejida Tierra cálida de Ada Crochet" className="aspect-[.88] w-full object-cover transition duration-700 hover:scale-105" />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#654d46] backdrop-blur sm:bottom-7 sm:left-7">
                  Colección 2026
                </div>
              </div>
              <div className="absolute -bottom-7 -left-5 hidden max-w-[215px] rounded-2xl bg-[#fffaf5] p-4 shadow-xl shadow-[#a86f6d]/15 sm:block">
                <div className="mb-2 flex items-center gap-1 text-[#d48898]">
                  <Heart size={15} fill="currentColor" />
                  <Heart size={15} fill="currentColor" />
                  <Heart size={15} fill="currentColor" />
                  <Heart size={15} fill="currentColor" />
                  <Heart size={15} fill="currentColor" />
                </div>
                <p className="font-serif text-lg leading-5 text-[#513e37]">“La pieza que faltaba en mi clóset.”</p>
              </div>
            </div>
          </div>
          <a href="#coleccion" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.25em] text-[#936c64] sm:flex">
            Descubre
            <ArrowDown size={17} />
          </a>
        </section>

        <section id="coleccion" className="bg-[#fffaf5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="eyebrow mb-4">Piezas con personalidad</div>
                <h2 className="section-title">La colección <span className="italic text-[#b66c7d]">Ada.</span></h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#866f67] sm:text-right">Cada cartera nace de una idea, un color y muchas horas de manos creadoras.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className={`group relative overflow-hidden rounded-[2rem] bg-[#f0e2d8] ${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-3' : index === 2 ? 'lg:col-span-4' : 'lg:col-span-4'}`}
                >
                  <img
                    src={product.image}
                    alt={`Cartera ${product.name}`}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'aspect-[.93] sm:aspect-[.82] lg:aspect-[.92]' : index === 2 ? 'aspect-[1.05] lg:aspect-[.92]' : 'aspect-square'}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-5 pt-20 text-white sm:p-6 sm:pt-24">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.16em] backdrop-blur">{product.tag}</span>
                        <h3 className="font-serif text-2xl">{product.name}</h3>
                        <p className="mt-1 text-xs text-white/75">{product.color}</p>
                      </div>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Comprar cartera ${product.name}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#5d4841] transition hover:bg-[#f6b7c7] hover:text-[#563742]">
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#eadbd2] bg-[#fdf4ed] px-6 py-5 sm:flex-row sm:items-center sm:px-8">
              <p className="font-serif text-xl text-[#5c453f]">¿Tienes un color en mente?</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary">
                Cuéntame tu idea <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="historia" className="relative overflow-hidden bg-[#4b3935] px-5 py-24 text-[#fffaf5] sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute -right-36 -top-36 h-[32rem] w-[32rem] rounded-full border border-[#e4a8a8]/20" />
          <div className="absolute -right-20 -top-20 h-[20rem] w-[20rem] rounded-full border border-[#e4a8a8]/20" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div className="relative">
              <div className="mx-auto max-w-sm overflow-hidden rounded-[48%_48%_4%_4%] border-8 border-[#6b5149] bg-[#e2c2b7] shadow-2xl shadow-black/20">
                <img src={pinkBag} alt="Cartera Rosa nube tejida a mano" className="aspect-[.86] w-full object-cover" />
              </div>
              <div className="absolute -bottom-7 right-2 rounded-2xl bg-[#f4b0c5] px-5 py-4 text-[#563d42] shadow-xl sm:right-4">
                <p className="font-serif text-2xl italic">Puntada a puntada.</p>
              </div>
            </div>
            <div className="max-w-xl">
              <div className="eyebrow mb-5 !text-[#e9b2bc]"><Sparkles size={15} /> Una historia que se lleva</div>
              <h2 className="section-title !text-[#fffaf5]">Más que una cartera, <span className="italic text-[#f4b0c5]">un pedacito de ti.</span></h2>
              <p className="mt-7 text-base leading-8 text-[#dfc9c1]">
                Ada Crochet nació del amor por crear con las manos. Cada pieza es tejida con paciencia, cuidando las texturas, los colores y esos pequeños detalles que hacen que una cartera se sienta verdaderamente tuya.
              </p>
              <div className="mt-9 grid gap-5 border-t border-white/15 pt-7 sm:grid-cols-2">
                <div className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#f4b0c5]" size={19} /><p className="text-sm leading-6 text-[#e5d3cc]">Materiales seleccionados con cariño</p></div>
                <div className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#f4b0c5]" size={19} /><p className="text-sm leading-6 text-[#e5d3cc]">Diseños únicos y personalizables</p></div>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-pink mt-10">Conoce a Ada <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="bg-[#f8e9e1] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between">
              <div><div className="eyebrow mb-4">Hechas para acompañarte</div><h2 className="section-title">Tu próxima favorita.</h2></div>
              <div className="hidden gap-2 sm:flex">
                <button onClick={() => setActiveProduct(Math.max(0, activeProduct - 1))} className="icon-button" aria-label="Producto anterior"><ChevronLeft size={19} /></button>
                <button onClick={() => setActiveProduct(Math.min(products.length - 1, activeProduct + 1))} className="icon-button" aria-label="Producto siguiente"><ChevronRight size={19} /></button>
              </div>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
              <div className="overflow-hidden rounded-[2.25rem] bg-[#ddc1b0]">
                <img src={products[activeProduct].image} alt={products[activeProduct].name} className="aspect-[1.16] w-full object-cover transition duration-500" />
              </div>
              <div className="max-w-md">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#b66c7d]">0{activeProduct + 1} / 0{products.length}</span>
                <h3 className="mt-5 font-serif text-5xl tracking-[-.04em] text-[#4b3833]">{products[activeProduct].name}</h3>
                <p className="mt-5 text-base leading-7 text-[#806962]">{products[activeProduct].description}</p>
                <div className="my-7 h-px w-full bg-[#dbc1b4]" />
                <div className="flex items-center gap-3 text-sm text-[#705a52]"><span className="h-3 w-3 rounded-full bg-[#b66c7d]" /> {products[activeProduct].color}</div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-9">Preguntar disponibilidad <MessageCircle size={17} /></a>
                <div className="mt-6 flex gap-2 sm:hidden">
                  <button onClick={() => setActiveProduct(Math.max(0, activeProduct - 1))} className="icon-button" aria-label="Producto anterior"><ChevronLeft size={19} /></button>
                  <button onClick={() => setActiveProduct(Math.min(products.length - 1, activeProduct + 1))} className="icon-button" aria-label="Producto siguiente"><ChevronRight size={19} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-[#f6d9dc] px-5 py-24 text-center sm:px-8 lg:py-32">
          <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b66c7d]/10" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#fffaf5] text-[#b66c7d] shadow-sm"><MessageCircle size={25} /></div>
            <div className="eyebrow justify-center">Hablemos de tu próxima cartera</div>
            <h2 className="mt-5 font-serif text-5xl leading-[.98] tracking-[-.05em] text-[#4b3833] sm:text-6xl">¿Cuál se va contigo?</h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#80615e]">Escríbeme y te cuento qué modelos están disponibles. También puedo crear una pieza especialmente para ti.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-9">Hola, Ada <MessageCircle size={17} /></a>
            <p className="mt-5 text-xs tracking-[.12em] text-[#9b7470]">WhatsApp · +53 55207629</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#2f2523] px-5 py-9 text-[#eadbd4] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ada Crochet" className="h-10 w-10 rounded-full object-cover" />
            <div><p className="font-serif text-lg text-[#fffaf5]">Ada Crochet</p><p className="text-xs text-[#ad938b]">Hecho con amor en Cuba</p></div>
          </div>
          <div className="flex items-center gap-5 text-xs text-[#ad938b]">
            <a href="#coleccion" className="transition hover:text-white">Colección</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Instagram de Ada Crochet" className="transition hover:text-white"><Instagram size={17} /></a>
          </div>
          <p className="text-[11px] text-[#806b64]">© 2026 Ada Crochet</p>
        </div>
      </footer>
    </div>
  )
}

export default App
