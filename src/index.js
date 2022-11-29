import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`

const urls = ['https://www.jasminemansbridge.com/wp-content/uploads/2022/09/2E4CB7BF-3CE4-455C-998D-2D1FB774055E-2.jpg']

const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  //{ position: [0, 0, 1.5], rotation: [0, 0, 0], url: "https://www.jasminemansbridge.com/wp-content/uploads/2022/09/2E4CB7BF-3CE4-455C-998D-2D1FB774055E-2.jpg" },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
