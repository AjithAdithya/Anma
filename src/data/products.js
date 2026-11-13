// Glob imports — one array per category folder (HEIC excluded)
// Only the new bag-*.png photos are shown (old .jpg files are ignored)
const bagFiles = Object.entries(
  import.meta.glob('../assets/Bags/*.png', { eager: true, import: 'default' })
)
// Sling bag is one product with brown / grey colour variants
const slingColours = { brown: '#5A3A2A', blue: '#4A6078' }
const slingLabels = { brown: 'Brown', blue: 'Grey' }
const slingVariants = bagFiles
  .filter(([path]) => path.includes('-flap-crossbody'))
  .map(([path, image]) => {
    const key = Object.keys(slingColours).find((c) => path.includes(`-${c}-`))
    return { label: slingLabels[key], color: slingColours[key], image }
  })
const bagNames = {
  'brown-flower-bucket': 'Brown Motif Bucket Bag',
  'sunflower-sling': 'Sunflower Sling Bag',
  'pink-yellow-flap': 'Daisy Sling Bag',
}
const bagImages = bagFiles
  .filter(([path]) => !path.includes('-flap-crossbody'))
  .map(([path, image]) => {
    const key = Object.keys(bagNames).find((k) => path.includes(k))
    return { image, name: key ? bagNames[key] : undefined }
  })
const bangleAll = Object.entries(
  import.meta.glob('../assets/Bangles/*.{jpg,png,webp}', { eager: true, import: 'default' })
)
const bangleImageFor = (key) => bangleAll.find(([path]) => path.includes(`bangle-${key}.`))?.[1]
// Plain and multicolour bangles are sets with a colour picker
const plainBangleVariants = [['blue', 'Blue'], ['pink', 'Pink'], ['red', 'Red']]
  .map(([k, label]) => ({ label, image: bangleImageFor(k) }))
const multiBangleVariants = [['lavender-green', 'Lavender & Green'], ['pink-green', 'Pink & Green'], ['red-green', 'Red & Green']]
  .map(([k, label]) => ({ label, image: bangleImageFor(k) }))
const bangleNames = { 'sunflower-yellow': 'Sunflower Bangle', 'daisy-white': 'Daisy Bangle' }
const bangleSingles = Object.entries(bangleNames)
  .map(([k, name]) => ({ image: bangleImageFor(k), name }))
  .filter((b) => b.image)
const bangleImages = bangleSingles.map((b) => b.image)
const chainNames = {
  'pearl-blossom-set': 'Pearl Blossom Choker Set',
  'rose-pendant': 'Rose Pendant Chain',
  'rose-set': 'Rose Necklace & Earrings Set',
  'pink-pearl-blossom-set': 'Pink Pearl Blossom Necklace Set',
}
const chainFiles = Object.entries(
  import.meta.glob('../assets/Chains/*.{jpg,png,webp}', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(chainNames).find(([k]) => path.includes(`chain-${k}`))
  return { image, name: hit ? hit[1] : undefined }
})
const chainImages = chainFiles.map((c) => c.image)
// Only the new clip-*.png photos are shown (old .jpg files are ignored)
const clipNames = {
  'daisy-snap': 'Daisy Snap Clips',
  'kitty-snap': 'Kitty Snap Clips',
  'frog-snap': 'Froggy Snap Clips',
  'rose-snap': 'Rose Snap Clips',
  'panda-snap': 'Panda Snap Clips',
}
const clipAll = Object.entries(
  import.meta.glob('../assets/Clips/*.png', { eager: true, import: 'default' })
)
// Snap clips only; claw clips are grouped into one product below
const clipFiles = clipAll
  .filter(([path]) => !path.includes('-claw'))
  .map(([path, image]) => {
    const hit = Object.entries(clipNames).find(([k]) => path.includes(`clip-${k}`))
    return { image, name: hit ? hit[1] : undefined }
  })
const clipImages = clipFiles.map((c) => c.image)
// Claw clips: one "Daisy Claw Clips" product with colour variants
const clawColours = {
  'pink-flower-claw': { label: 'Pink', color: '#E86FC0' },
  'lavender-flower-claw': { label: 'Lavender', color: '#B58CE0' },
  'baby-pink-daisy-claw': { label: 'Baby Pink', color: '#F4B6CF' },
  'blue-flower-claw': { label: 'Blue', color: '#2A93B8' },
}
const clawVariants = Object.keys(clawColours).flatMap((k) => {
  const hit = clipAll.find(([path]) => path.includes(`clip-${k}`))
  return hit ? [{ ...clawColours[k], image: hit[1] }] : []
})
// Only the new beanie-*.png photos are shown (old .jpg files are ignored)
const beanieNames = {
  'lilac-ribbed': 'Lilac Ribbed Pom Beanie',
  'grey-braided': 'Grey Braided Pom Beanie',
  'rust-chenille': 'Rust Chenille Pom Beanie',
  'blue-pom-ribbed': 'Sky Blue Pom Beanie',
  'cream-ribbed': 'Cream Ribbed Pom Beanie',
}
const beanieFiles = Object.entries(
  import.meta.glob('../assets/Crochet Beanie/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(beanieNames).find(([k]) => path.includes(`beanie-${k}`))
  return { image, name: hit ? hit[1] : undefined }
})
const beanieImages = beanieFiles.map((b) => b.image)
// Dolls shown: the old parrot + Batman photos and the new doll-NN.png photos
const dollNames = {
  '20240324_143112': 'Parrot',
  '20240509_202629': 'Classic Batman',
  'doll-40': 'Penguin with Heart',
  'doll-41': 'Marshall Fire Pup',
  'doll-42': 'Marshall Fire Pup Duo',
  'doll-43': 'Bunny Girl Doll',
  'doll-44': 'Kung Fu Panda',
  'doll-45': 'Batman Doll',
  'doll-46': 'Stacked Minions',
  'doll-47': 'Teletubbies Stack',
  'doll-48': 'Dora Doll',
  'doll-49': 'Luffy Straw Hat Doll',
  'doll-50': 'Teletubbies Set',
  'doll-51': 'Captain America',
  'doll-52': 'Jerry Mouse',
  'doll-53': 'Flying Ace Snoopy',
  'doll-54': 'Chhota Bheem',
  'doll-55': 'Minion Pair',
  'doll-56': 'Luffy Doll',
  'doll-57': 'Marshall Fire Pup Side Pose',
  'doll-58': 'Minion Buddies',
  'doll-59': 'Zoro Doll',
  'doll-60': 'Pilot Doll',
  'doll-61': 'Sadness Doll',
  'doll-62': 'Gojo Satoru Doll',
  'doll-63': 'Tom Cat Doll',
  'doll-64': 'Choro Doll',
  'doll-65': 'Tom & Jerry Set',
  'doll-66': 'Squirrel with Acorn',
  'doll-67': 'Mini Minion',
  'doll-68': 'Tom',
  'doll-69': 'Hug Doll',
  'doll-70': 'Noddy',
  'doll-109': 'Heart Teddy',
}
const dollAll = Object.entries(
  import.meta.glob('../assets/Dolls/*.{jpg,png}', { eager: true, import: 'default' })
)
const dollImageFor = (key) => dollAll.find(([path]) => path.includes(key + '.'))?.[1]
// Dolls with several photos are grouped into one product with a photo picker
const dollGroups = [
  {
    name: 'Marshall Fire Pup Set',
    sub: 'Paw Patrol',
    description: 'Handmade crochet Marshall fire pup — see the straight pose, side pose and duo.',
    items: [['doll-41', 'Straight'], ['doll-57', 'Side'], ['doll-42', 'Duo']],
  },
  {
    name: 'Teletubbies Set',
    sub: 'Teletubbies',
    description: 'Handmade crochet Teletubbies — see the full set and the stack.',
    items: [['doll-50', 'Set'], ['doll-47', 'Stack']],
  },
  {
    name: 'Minion Set',
    sub: 'Minions',
    description: 'Handmade crochet minions — see the pair, the stacked minions and the buddies.',
    items: [['doll-55', 'Pair'], ['doll-46', 'Stacked'], ['doll-58', 'Buddies']],
  },
]
const groupedDollKeys = dollGroups.flatMap((g) => g.items.map(([k]) => k))
const hiddenDollKeys = ['doll-49'] // Luffy straw hat doll removed
const dollFiles0 = dollAll
  .map(([path, image]) => {
    const hit = Object.entries(dollNames).find(([k]) => path.includes(k + '.'))
    return hit ? { key: hit[0], image, name: hit[1] } : null
  })
  .filter((d) => d && !groupedDollKeys.includes(d.key) && !hiddenDollKeys.includes(d.key))
const dollPage2Keys = ['doll-68', 'doll-52', 'doll-63', 'doll-45'] // Tom, Jerry, Tom Cat, Batman
const dollRest = dollFiles0.filter((d) => d.key !== 'doll-65' && !dollPage2Keys.includes(d.key))
// Page size is 10: 3 sets + Tom & Jerry Set + 6 others on page 1, then page 2 starts with the four above
const dollFiles = [
  ...dollFiles0.filter((d) => d.key === 'doll-65'),
  ...dollRest.slice(0, 6),
  ...dollPage2Keys.map((k) => dollFiles0.find((d) => d.key === k)).filter(Boolean),
  ...dollRest.slice(6),
]
const dollImages = dollFiles.map((d) => d.image)
// Subsections inside the Dolls category (anything not listed is "Normal")
export const dollSubcategories = ['All', 'Marvel', 'DC', 'Tom & Jerry', 'Anime', 'Inside Out', 'Paw Patrol', 'Teletubbies', 'Minions', 'Normal']
const dollSubByKey = {
  '20240509_202629': 'DC', 'doll-45': 'DC', 'doll-51': 'Marvel',
  'doll-68': 'Tom & Jerry', 'doll-63': 'Tom & Jerry', 'doll-52': 'Tom & Jerry', 'doll-65': 'Tom & Jerry',
  'doll-56': 'Anime', 'doll-59': 'Anime', 'doll-62': 'Anime', 'doll-64': 'Anime',
  'doll-67': 'Minions',
  'doll-61': 'Inside Out',
}
const dollSubOf = (key) => dollSubByKey[key] ?? 'Normal'
const dollGroupProducts = dollGroups.map((g) => {
  const variants = g.items.map(([k, label]) => ({ label, image: dollImageFor(k) }))
  return { ...g, variants }
})
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
const earringNames = {
  'earring-butterfly': 'Butterfly Earrings',
  'earring-cherry': 'Cherry Earrings',
  'earring-daisy-white-card': 'Daisy Earrings',
  'earring-granny-square': 'Granny Square Earrings',
  'earring-jhumka-flower': 'Jhumka Earrings',
  'earring-mandala': 'Mandala Earrings',
  'earring-pearl-stud': 'Pearl Earring',
  'earring-red-poppy': 'Red Poppy Earrings',
  'earring-red-puff-stud': 'Puffy Flower Stud',
  'earring-red-rose': 'Red Rose Earrings',
  'earring-rose-leaf': 'Rose Earring',
  'earring-strawberry': 'Strawberry Earrings',
  'earring-sunflower': 'Sunflower Earrings',
}
const earringSingles = earringFiles
  .filter(([path]) => !path.includes('-heart') && !path.includes('-puff-flower'))
  .map(([path, image]) => {
    const hit = Object.entries(earringNames).find(([k]) => path.includes(k))
    return { image, name: hit ? hit[1] : undefined }
  })
const earringImages = earringSingles.map((e) => e.image)
// Flower Pots: old page-4 photos (items 31-39 of the .jpg files) + new pot-NN.png photos
const oldPotFiles = Object.entries(
  import.meta.glob('../assets/Flower Pots/*.jpg', { eager: true, import: 'default' })
).slice(30)
const oldPotImg = (key) => oldPotFiles.find(([path]) => path.includes(key))?.[1]
const potAll = Object.entries(
  import.meta.glob('../assets/Flower Pots/*.png', { eager: true, import: 'default' })
)
const potImg = (n) => potAll.find(([path]) => path.includes(`pot-${n}.`))?.[1]
const potVariants = (items) => items.map(([n, label, fit]) => ({ label, image: potImg(n), ...(fit ? { fit } : {}) }))
// Each pot card: single photo (image) or a set (variants with a picker). Array order = display order.
const potSet = (name, description, variants, variantLabel) => ({ name, description, variants, variantLabel })
const pot = (n, name, fit) => ({ name, image: potImg(n), fit })
const potCards = [
  // ---- page 1 ----
  potSet('Tulip Pot Set', 'Handmade crochet tulip pots in many colours — pick your favourite.',
    potVariants([[113, 'Pink'], [77, 'Royal Blue'], [87, 'Sky Blue'], [86, 'Yellow'], [112, 'White'], [103, 'Lavender'], [95, 'Peach'], [96, 'Light Peach']])),
  potSet('Daisy Pot Set', 'Handmade crochet daisy pots in white, red, purple and pink.',
    potVariants([[121, 'White'], [76, 'Red'], [90, 'Purple'], [101, 'Pink']])),
  potSet('Puffy Flower Pot Set', 'Puffy crochet flower pots — pick your colour.',
    potVariants([[118, 'Purple', 'contain'], [119, 'Yellow', 'contain'], [117, 'Plum', 'contain'], [115, 'Light Pink', 'contain'], [116, 'Pink', 'contain'], [120, 'Red']])),
  potSet('Smiley Sunflower & Daisy Pot', 'A cheerful smiling pot with a sunflower and a daisy.',
    potVariants([[73, 'Light Pot'], [84, 'Tan Pot']]), 'View'),
  pot(100, 'Sunflower Brown Pot'),
  pot(102, 'Red Rose Pot'),
  pot(107, 'Cactus Pot'),
  { name: 'Egg Friends Pot', image: oldPotImg('IMG-20260102-WA0011') },
  pot(85, 'Red Heart Plant Pot', 'contain'),
  // ---- rest ----
  pot(74, 'Sunflower Grey Pot'), pot(110, 'Pale Sunflower Grey Pot'),
  pot(99, 'Sunflower Keychain Pots'), pot(108, 'Hanging Sunflower Pot'),
  potSet('Lily Pot Set', 'Handmade crochet lily pots in pink, yellow and red — pick your colour.',
    potVariants([[91, 'Pink'], [97, 'Light Pink'], [93, 'Yellow'], [122, 'Red']])),
  pot(82, 'Red Heart Pot with Blue Ribbon', 'contain'), pot(89, 'Blue Heart Pot'),
  pot(83, 'Rose Keychain Pots'),
  pot(104, 'Mixed Flower Bouquet Pot'), pot(88, 'Pastel Daisy Bouquet Pot'), pot(92, 'Mini Daisy Pot Set'),
  pot(78, 'Triple Tulip Pot'), pot(94, 'White & Purple Tulip Pot'), pot(114, 'Tulip Bouquet Pot with Hearts'),
  pot(80, 'Pink Petal Tulip Pot'), pot(105, 'Radish Pot with Blue Tulip'),
  potSet('Lotus Pot Set', 'Handmade crochet lotus pots — see every angle.',
    [['20260315_214117', 'Photo 1'], ['20260316_092751', 'Photo 2'], ['20260316_092829', 'Photo 3']]
      .map(([k, label]) => ({ label, image: oldPotImg(k) })), 'View'),
  { name: 'Rose Pot', image: oldPotImg('20260307_155413') },
  pot(106, 'Puffy Flower Pot Row'),
].filter((c) => c.image || c.variants)
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

const airpodImg = (key) => Object.entries(
  import.meta.glob('../assets/Airpod Cases/*.png', { eager: true, import: 'default' })
).find(([path]) => path.includes(key))?.[1]
const earthAirpodVariants = [['earth-closed', 'Closed'], ['earth-open', 'Open']]
  .map(([k, label]) => ({ label, image: airpodImg(k) }))
const appliqueNames = { starfish: 'Starfish Applique', turtle: 'Turtle Applique', 'blue-fish': 'Blue Fish Applique' }
const appliqueFiles = Object.entries(
  import.meta.glob('../assets/Appliques/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(appliqueNames).find(([k]) => path.includes(`applique-${k}`))
  return { image, name: hit ? hit[1] : undefined }
})
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
  ...expand('Bags',               bagImages.map((b) => b.image),     800,  'Handcrafted crochet bag. Sturdy, stylish, and made with love.',                       '#FFE8E8', '#FF6B6B')
    .map((p, i) => ({ ...p, name: bagImages[i].name ?? p.name })),
  {
    id: _id++,
    name: 'Sling Bag',
    category: 'Bags',
    price: 800,
    description: 'Chunky ribbed crochet sling bag with a flap and long strap, available in brown and grey.',
    bgColor: '#FFE8E8',
    accentColor: '#FF6B6B',
    image: slingVariants[0]?.image,
    variants: slingVariants,
  },
  ...expand('Bangles',           bangleImages,    300,  'Handmade crochet bangles — colourful, comfy, and perfect for stacking.',                '#FFE8F4', '#FF6BA8')
    .map((p, i) => ({ ...p, name: bangleSingles[i].name })),
  {
    id: _id++,
    name: 'Plain Bangle Set',
    category: 'Bangles',
    price: 300,
    description: 'Plain crochet bangles in blue, pink and red — sold as a set.',
    bgColor: '#FFE8F4',
    accentColor: '#FF6BA8',
    image: plainBangleVariants[0].image,
    variants: plainBangleVariants,
  },
  {
    id: _id++,
    name: 'Multicolour Bangle Set',
    category: 'Bangles',
    price: 300,
    description: 'Two-tone crochet bangles in lavender & green, pink & green and red & green — sold as a set.',
    bgColor: '#FFE8F4',
    accentColor: '#FF6BA8',
    image: multiBangleVariants[0].image,
    variants: multiBangleVariants,
  },
  ...expand('Chains',             chainImages,     350,  'Delicate handmade crochet chain — a unique accessory to dress up any outfit.',          '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: chainFiles[i].name ?? p.name })),
  ...expand('Clips',             clipImages,      200,  'Adorable crochet hair clip to add a handmade charm to any hairstyle.',                '#F5E8FF', '#C77DFF')
    .map((p, i) => ({ ...p, name: clipFiles[i].name ?? p.name })),
  {
    id: _id++,
    name: 'Daisy Claw Clips',
    category: 'Clips',
    price: 250,
    description: 'Handmade crochet daisy claw clips, available in pink, lavender, baby pink and blue.',
    bgColor: '#F5E8FF',
    accentColor: '#C77DFF',
    image: clawVariants[0]?.image,
    variants: clawVariants,
  },
  ...expand('Crochet Beanie',     beanieImages,    500,  'Cosy handmade beanie in a range of colours. Warm, soft, and made with love.',          '#E8F4FF', '#4D96FF')
    .map((p, i) => ({ ...p, name: beanieFiles[i].name ?? p.name })),
  // Sets first (Marshall, Teletubbies, Minion), then Tom & Jerry Set, then the rest
  ...dollGroupProducts.map((g) => ({
    id: _id++,
    name: g.name,
    category: 'Dolls',
    price: 450,
    description: g.description,
    bgColor: '#FFF8DC',
    accentColor: '#FFD93D',
    image: g.variants[0].image,
    variants: g.variants,
    variantLabel: 'View',
    subcategory: g.sub,
  })),
  ...expand('Dolls',              dollImages,      450,  'Charming hand-crocheted doll. A perfect gift or keepsake.',                            '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: dollFiles[i].name ?? p.name, subcategory: dollSubOf(dollFiles[i].key) })),
  ...expand('Earrings',           earringImages,   250,  'Lightweight crochet earrings — a unique handmade accessory for every outfit.',         '#FFE8E8', '#FF6B6B')
    .map((p, i) => ({ ...p, name: earringSingles[i].name ?? p.name })),
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
    name: 'Puffy Flower Earring',
    category: 'Earrings',
    price: 250,
    description: 'Puffy crochet flower earrings with a golden bead, available in violet and pink.',
    bgColor: '#FFE8E8',
    accentColor: '#FF6B6B',
    image: flowerVariants[0]?.image,
    variants: flowerVariants,
  },
  ...potCards.map((c) => ({
    id: _id++,
    name: c.name,
    category: 'Flower Pots',
    price: 700,
    description: c.description || 'Handmade crochet flower pot. Adds a cosy, handmade touch to your space.',
    bgColor: '#E8FFE8',
    accentColor: '#6BCB77',
    image: c.variants ? c.variants[0].image : c.image,
    imageFit: c.variants ? c.variants[0].fit : c.fit,
    ...(c.variants ? { variants: c.variants } : {}),
    ...(c.variantLabel ? { variantLabel: c.variantLabel } : {}),
  })),
  ...expand('Flowers & Bouquets', bouquetImages,   600,  'Everlasting crochet flower. Never wilts — a perfect gift that lasts forever.',         '#FFE8F4', '#FF6BA8'),
  ...expand('Gajra',              gajraImages,     300,  'Traditional gajra recreated in crochet. Wear it all day without any wilting.',         '#FFF8DC', '#FFD93D'),
  ...expand('Keychains',          keychainImages,  200,  'Cute crochet keychain in various shapes and colours. A fun little accessory!',         '#F5E8FF', '#C77DFF'),
  ...expand('Magnets',            magnetImages,    150,  'Tiny crochet fridge magnet. An adorable little décor piece.',                          '#E8F4FF', '#4D96FF'),
  {
    id: _id++,
    name: 'Earth Airpod Case',
    category: 'Airpod Cases',
    price: 400,
    description: 'Handmade crochet earth-pattern airpod case — see it closed and open.',
    bgColor: '#E8F4FF',
    accentColor: '#4D96FF',
    image: earthAirpodVariants[0].image,
    variants: earthAirpodVariants,
    variantLabel: 'View',
  },
  ...expand('Appliques', appliqueFiles.map((a) => a.image), 100, 'Handmade crochet applique — sew or stick it on to add a cute touch.', '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: appliqueFiles[i].name ?? p.name })),
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
  'Airpod Cases',
  'Appliques',
]
