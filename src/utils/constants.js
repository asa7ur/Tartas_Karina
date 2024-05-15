import icon_1 from '../assets/icon_1.webp'
import icon_2 from '../assets/icon_2.webp'
import icon_3 from '../assets/icon_3.webp'

export const links = [
  {
    id: 1,
    text: 'inicio',
    url: '/',
  },
  {
    id: 2,
    text: 'productos',
    url: '/productos',
  },
  {
    id: 3,
    text: 'contacto',
    url: '/contacto',
  },
]

export const services = [
  {
    id: 1,
    icon: icon_1,
    title: 'Tienda online',
    text: 'En nuestra tienda online encontrarás la tarta que estás buscando: tenemos una amplia selección de tartas y dulces a tu disposición.',
  },
  {
    id: 2,
    icon: icon_2,
    title: 'Hostelería',
    text: '¿Trabajas en restauración? Tenemos una gran variedad de postres para ti. Para más información ponte en contacto con nosotras.',
  },
  {
    id: 3,
    icon: icon_3,
    title: 'Eventos y Catering',
    text: 'Si tienes un evento de más de 50 personas, te asesoramos para que encuentres las opciones dulces perfectas para tu celebración.',
  },
]

export const products_url = '/.netlify/functions/products'
