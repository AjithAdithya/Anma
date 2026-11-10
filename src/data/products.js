// Glob imports — one array per category folder (HEIC excluded)
// Bag images removed from the page (files remain in src/assets/Bags)
const bagImages = []
const bangleImages = Object.values(
  import.meta.glob('../assets/Bangles/*.{jpg,png,webp}', { eager: true, import: 'default' })
)
const chainImages = Object.values(
  import.meta.glob('../assets/Chains/*.{jpg,png,webp}', { eager: true, import: 'default' })
)
const clipImages = Object.values(
  import.meta.glob('../assets/Clips/*.jpg', { eager: true, import: 'default' })
)
const beanieImages = Object.values(
  import.meta.glob('../assets/Crochet Beanie/*.jpg', { eager: true, import: 'default' })
)
const dollImages = Object.values(
  import.meta.glob('../assets/Dolls/*.jpg', { eager: true, import: 'default' })
)
// Only the new earring-*.png photos are shown (old .jpg files are ignored)
const earringFiles = Object.entries(
  import.meta.glob('../assets/Earrings/*.png', { eager: true, import: 'default' })
)
// Earrings sold in several colours are grouped into one product with variants
const colourHex = { blue: '#6F95DD', pink: '#F58FA3', red: '#D61F3B', purple: '#B58CE0' }
const groupFiles = (marker) => earringFiles
  .filter(([path]) => path.includes(marker))
  .map(([path, image]) => {
    const key = Object.keys(colourHex).find((c) => path.includes(`-${c}-`))
    return { label: key === 'purple' ? 'Violet' : key[0].toUpperCase() + key.slice(1), color: colourHex[key], image }
  })
const heartVariants = groupFiles('-heart')
const flowerVariants = groupFiles('-puff-flower')
const earringImages = earringFiles
  .filter(([path]) => !path.includes('-heart') && !path.includes('-puff-flower'))
  .map(([, image]) => image)
const flowerPotImages = Object.values(
  import.meta.glob('../assets/Flower Pots/*.jpg', { eager: true, import: 'default' })
)
const bouquetImages = Object.values(
  import.meta.glob('../assets/Flowers & Bouquets/*.{jpg,png}', { eager: true, import: 'default' })
)
const gajraImages = Object.values(
  import.meta.glob('../assets/Gajra/*.jpg', { eager: true, import: 'default' })
)
const keychainImages = Object.values(
  import.meta.glob('../assets/Keychains/*.{jpg,webp}', { eager: true, import: 'default' })
)
const magnetImages = Object.values(
  import.meta.glob('../assets/Magnets/*.jpg', { eager: true, import: 'default' })
)
const sweaterImages = Object.values(
  import.meta.glob('../assets/Sweater/*.{jpg,png}', { eager: true, import: 'default' })
)

// Expand an image array into individual product entries
let _id = 1
function expand(category, images, price, description, bgColor, accentColor) {
  return images.map((image) => ({
    id: _id++,
    name: category,
    category,
    price,
    description,
    bgColor,
    accentColor,
    image,
  }))
}

export const products = [
  ...expand('Bags',               bagImages,       800,  'Handcrafted crochet bag. Sturdy, stylish, and made with love.',                       '#FFE8E8', '#FF6B6B'),
  ...expand('Bangles',            bangleImages,    300,  'Handmade crochet bangles — colourful, comfy, and perfect for stacking.',                '#FFE8F4', '#FF6BA8'),
  ...expand('Chains',             chainImages,     350,  'Delicate handmade crochet chain — a unique accessory to dress up any outfit.',          '#FFF8DC', '#FFD93D'),
  ...expand('Clips',             clipImages,      200,  'Adorable crochet hair clip to add a handmade charm to any hairstyle.',                '#F5E8FF', '#C77DFF'),
  ...expand('Crochet Beanie',     beanieImages,    500,  'Cosy handmade beanie in a range of colours. Warm, soft, and made with love.',          '#E8F4FF', '#4D96FF'),
  ...expand('Dolls',              dollImages,      450,  'Charming hand-crocheted doll. A perfect gift or keepsake.',                            '#FFF8DC', '#FFD93D'),
  ...expand('Earrings',           earringImages,   250,  'Lightweight crochet earrings — a unique handmade accessory for every outfit.',         '#FFE8E8', '#FF6B6B'),
  {
    id: _id++,
    name: 'Heart Earrings',
    category: 'Earrings',
    price: 250,
    description: 'Sweet crochet heart earrings, available in blue, pink and red.',
    bgColor: '#FFE8E8',
    accentColor: '#FF6B6B',
    image: heartVariants[0]?.image,
    variants: heartVariants,
  },
  {
    id: _id++,
    name: 'Flower Earrings',
    category: 'Earrings',
    price: 250,
    description: 'Puffy crochet flower earrings with a golden bead, available in violet and pink.',
    bgColor: '#FFE8E8',
    accentColor: '#FF6B6B',
    image: flowerVariants[0]?.image,
    variants: flowerVariants,
  },
  ...expand('Flower Pots',       flowerPotImages, 700,  'Crochet flower pot cover. Adds a cosy, handmade touch to your space.',                 '#E8FFE8', '#6BCB77'),
  ...expand('Flowers & Bouquets', bouquetImages,   600,  'Everlasting crochet flower. Never wilts — a perfect gift that lasts forever.',         '#FFE8F4', '#FF6BA8'),
  ...expand('Gajra',              gajraImages,     300,  'Traditional gajra recreated in crochet. Wear it all day without any wilting.',         '#FFF8DC', '#FFD93D'),
  ...expand('Keychains',          keychainImages,  200,  'Cute crochet keychain in various shapes and colours. A fun little accessory!',         '#F5E8FF', '#C77DFF'),
  ...expand('Magnets',            magnetImages,    150,  'Tiny crochet fridge magnet. An adorable little décor piece.',                          '#E8F4FF', '#4D96FF'),
  ...expand('Sweater',            sweaterImages,  1200,  'Handmade crochet sweater crafted with premium yarn. Warm, stylish, and totally unique.','#E8FFE8', '#6BCB77'),
]

export const categories = [
  'All',
  'Bags',
  'Bangles',
  'Chains',
  'Clips',
  'Crochet Beanie',
  'Dolls',
  'Earrings',
  'Flower Pots',
  'Flowers & Bouquets',
  'Gajra',
  'Keychains',
  'Magnets',
  'Sweater',
]
