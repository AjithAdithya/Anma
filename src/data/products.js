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
// Dolls: only the parrot (old photo) + the doll-129..188.png photos are shown
const dollNames = {
  '20240324_143112': 'Parrot',
  'doll-129': 'Penguin with Heart', 'doll-130': 'Pucca Doll', 'doll-132': 'Tom',
  'doll-133': 'Batman Doll', 'doll-135': 'Bunny Girl Doll', 'doll-136': 'Teddy Bear',
  'doll-137': 'Hug Doll', 'doll-138': 'Kung Fu Panda', 'doll-139': 'Squirrel',
  'doll-140': 'Mario', 'doll-141': 'Pooh & Hello Kitty Pair', 'doll-142': 'Chibi Batman',
  'doll-145': 'Harry Potter', 'doll-146': 'Shinchan Doll', 'doll-147': 'Deadpool (Back View)',
  'doll-148': 'Winnie the Pooh', 'doll-149': 'Hello Kitty', 'doll-150': 'Dora Doll',
  'doll-151': 'Blue Teddy Bear', 'doll-152': 'Blue Pikachu', 'doll-153': 'Luffy Doll',
  'doll-155': 'Captain America', 'doll-156': 'Jerry', 'doll-157': 'Love Teddy Bear',
  'doll-158': 'Jerry Keychain', 'doll-160': 'Itachi', 'doll-161': 'Blue Penguin',
  'doll-162': 'Flying Ace Snoopy', 'doll-163': 'Chhota Bheem', 'doll-164': 'Horse in Basket',
  'doll-166': 'SKZ Bunny Doll', 'doll-167': 'Luffy Doll', 'doll-169': 'Heart Teddy',
  'doll-171': 'Deadpool', 'doll-172': 'Zoro Doll', 'doll-173': 'Pilot Doll',
  'doll-174': 'Sadness Doll', 'doll-175': 'Human Keepsake', 'doll-176': 'Itachi (Back View)',
  'doll-177': 'Gojo Satoru Doll', 'doll-178': 'Tall Tom Doll', 'doll-179': 'Joy Doll',
  'doll-180': 'Harry Potter (Back View)', 'doll-181': 'Noddy', 'doll-182': 'Purple Penguin',
  'doll-183': 'Puppy Plush', 'doll-184': 'Choro Doll', 'doll-185': 'Blue Pikachu (Back View)',
  'doll-186': 'Tom & Jerry Set', 'doll-187': 'Squirrel with Acorn', 'doll-188': 'Mini Minion',
}
const dollAll = Object.entries(
  import.meta.glob('../assets/Dolls/*.{jpg,png}', { eager: true, import: 'default' })
)
const dollImageFor = (key) => dollAll.find(([path]) => path.includes(key + '.'))?.[1]
// Dolls with several photos are grouped into one product with a photo picker
const dollGroups = [
  {
    name: 'Marshall Fire Pup Set', sub: 'Paw Patrol',
    description: 'Handmade crochet Marshall fire pup — see the front, side and duo.',
    items: [['doll-131', 'Front'], ['doll-168', 'Side'], ['doll-134', 'Duo']],
  },
  {
    name: 'Teletubbies Set', sub: 'Teletubbies',
    description: 'Handmade crochet Teletubbies — see them standing together and stacked.',
    items: [['doll-154', 'Standing'], ['doll-144', 'Stacked']],
  },
  {
    name: 'Minion Pair Set', sub: 'Minions',
    description: 'Handmade crochet minion pair — see the pair and the stacked minions.',
    items: [['doll-165', 'Pair'], ['doll-170', 'Garden'], ['doll-143', 'Stacked']],
  },
  {
    name: 'Harry Potter Set', sub: 'Normal',
    description: 'Handmade crochet Harry Potter — see the front and back.',
    items: [['doll-145', 'Front'], ['doll-180', 'Back']],
  },
  {
    name: 'Deadpool Set', sub: 'Marvel',
    description: 'Handmade crochet Deadpool — see the front and back.',
    items: [['doll-171', 'Front'], ['doll-147', 'Back']],
  },
  {
    name: 'Blue Pikachu Set', sub: 'Normal',
    description: 'Handmade crochet blue Pikachu — see the front and back.',
    items: [['doll-152', 'Front'], ['doll-185', 'Back']],
  },
  {
    name: 'Itachi Set', sub: 'Anime',
    description: 'Handmade crochet Itachi — see the front and back.',
    items: [['doll-160', 'Front'], ['doll-176', 'Back']],
  },
]
const groupedDollKeys = dollGroups.flatMap((g) => g.items.map(([k]) => k))
const dollFiles0 = dollAll
  .map(([path, image]) => {
    const hit = Object.entries(dollNames).find(([k]) => path.includes(k + '.'))
    return hit ? { key: hit[0], image, name: hit[1] } : null
  })
  .filter((d) => d && !groupedDollKeys.includes(d.key) && !['doll-158', 'doll-153'].includes(d.key)) // Jerry Keychain + old Luffy Doll removed
// Tom & Jerry Set first among the single dolls
const dollFiles = [
  ...dollFiles0.filter((d) => d.key === 'doll-186'),
  ...dollFiles0.filter((d) => d.key !== 'doll-186'),
]
const dollImages = dollFiles.map((d) => d.image)
// Subsections inside the Dolls category (anything not listed is "Normal")
export const dollSubcategories = ['All', 'Marvel', 'DC', 'Tom & Jerry', 'Anime', 'Inside Out', 'Paw Patrol', 'Teletubbies', 'Minions', 'Normal']
const dollSubByKey = {
  'doll-155': 'Marvel', 'doll-147': 'Marvel', 'doll-171': 'Marvel',
  'doll-133': 'DC', 'doll-142': 'DC',
  'doll-132': 'Tom & Jerry', 'doll-178': 'Tom & Jerry', 'doll-156': 'Tom & Jerry', 'doll-158': 'Tom & Jerry', 'doll-186': 'Tom & Jerry',
  'doll-153': 'Anime', 'doll-167': 'Anime', 'doll-172': 'Anime', 'doll-177': 'Anime', 'doll-160': 'Anime', 'doll-176': 'Anime', 'doll-146': 'Anime', 'doll-184': 'Anime',
  'doll-174': 'Inside Out', 'doll-179': 'Inside Out',
  'doll-188': 'Minions',
}
const dollSubOf = (key) => dollSubByKey[key] ?? 'Normal'
const dollGroupProducts = dollGroups.map((g) => ({
  ...g,
  variants: g.items.map(([k, label]) => ({ label, image: dollImageFor(k) })),
}))
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
const pearlImg = (key) => earringFiles.find(([path]) => path.includes(key))?.[1]
const pearlVariants = [['earring-pearl-stud', 'Cream Flower', '#F3E9D8'], ['earring-pearl-pink', 'Pink Flower', '#F58FA3']]  .map(([k, label, color]) => ({ label, color, image: pearlImg(k) }))
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
  .filter(([path]) => !path.includes('-heart') && !path.includes('-puff-flower') && !path.includes('-pearl-'))
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
  pot(280, 'Twin Heart Flower Pot'),
  pot(281, 'Sunflower Terracotta Pot'),
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
// Only the new bouquet-NNN.png photos are shown (older bouquet photos are hidden)
const bouquetNames = {
  189: 'Blue Teddy Heart Bouquet', 190: 'Bee & Penguin Flower Bouquet', 191: 'Sunflower Lily Heart Bouquet',
  192: 'White Tulip Bouquet', 193: 'Daisy Rose Tulip Blue Bouquet', 194: 'Pink Lotus Bouquet',
  195: 'Sunflower Rose Duo Hand Bouquet', 196: 'Red Rose Duo Bouquet', 197: 'Sunflower Rose Royal Blue Bouquet',
  198: 'Rose Tulip Daisy Bouquet', 199: 'Rainbow Tulip Rose Bouquet', 200: 'Purple Tulip & Daisy Bouquet',
  201: 'White Lily Bouquet', 202: 'Sunflower & Roses Cream Bouquet', 203: 'Five Red Roses Bouquet',
  204: 'Red Roses Black Wrap Bouquet', 205: 'Heart Petal Flower Bouquet', 206: 'Lilac & White Lily Bouquet',
  207: 'Tulip Mix Burlap Bouquet', 208: 'Black & White Rose Bouquet', 209: 'Lilac Tulip & Rose Bouquet',
  210: 'Five Sunflowers Bouquet', 211: 'Blue Bloom Bouquet', 212: 'Sunflower Lilac Tulip Bouquet',
  213: 'Red Rosebud Bouquet', 214: 'Daisy Tulip Rose Pink Bouquet', 215: 'Sunflower Purple Wrap Bouquet',
  216: 'Sunflower & Daisy Bouquet', 217: 'Black & White Glow Bouquet', 218: 'Mini Tulip & Sunflower Bouquet',
  219: 'Twin Red Hearts Bouquet', 220: 'Sunflower Rose Lilac Ribbon Bouquet', 221: 'Sunflower Pink Wrap Bouquet',
  222: 'Mauve Tulip Duo Bouquet', 223: 'Piggy Sunflower Bouquet', 224: 'Red Hearts Bouquet',
  225: 'Black & White Heart Bouquet', 226: 'Lily Garden Bouquet', 227: 'Colourful Daisy Trio Bouquet',
  228: 'Blue Lily Bouquet', 229: 'White Daisy Burlap Bouquet', 230: 'Sunflower & Pink Rose Bouquet',
  231: 'Single White Tulip', 232: 'Orange Rose Duo Bouquet', 233: 'Purple Rose Duo Bouquet',
  234: 'Nine Daisies Bouquet', 235: 'Pink & Lilac Tulip Bouquet', 236: 'White & Lilac Tulip Bouquet',
  237: 'Blue & White Hearts Bouquet', 238: 'Sunflower Duo Bouquet', 239: 'Sunflower in Glass Vase',
  240: 'White Plumeria Bouquet', 241: 'Grand Mixed Flower Bouquet', 242: 'Sunflower Rose Daisy Bouquet',
  243: 'Pink Rose & Sunflower Bouquet',
}
const bouquetFiles = Object.entries(
  import.meta.glob('../assets/Flowers & Bouquets/bouquet-*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const n = path.match(/bouquet-(\d+)\.png/)?.[1]
  return { image, name: bouquetNames[n] }
})
const bouquetImages = bouquetFiles.map((b) => b.image)
const gajraImages = Object.values(
  import.meta.glob('../assets/Gajra/*.jpg', { eager: true, import: 'default' })
)
// Keychain images removed from the page (files remain in src/assets/Keychains)
const keychainImages = []
// Only the new magnet-*.png photos are shown (old .jpg magnets are hidden)
const magnetNames = {
  'magnet-sunflower.': 'Sunflower Fridge Magnet',
  'magnet-daisy.': 'Daisy Fridge Magnet',
  'magnet-heart-lollipop': 'Heart Fridge Magnet',
  'magnet-sunflower-2': 'Classic Sunflower Fridge Magnet',
  'magnet-goddess': 'Murugar Fridge Magnet',
  'magnet-daisy-sunflower-pair': 'Daisy & Sunflower Magnet Set',
  'magnet-bee-pair': 'Bee Fridge Magnets',
}
const magnetFiles = Object.entries(
  import.meta.glob('../assets/Magnets/magnet-*.png', { eager: true, import: 'default' })
).filter(([path]) => !path.includes('magnet-sunflower.png')) // Sunflower Fridge Magnet removed
  .map(([path, image]) => {
  const hit = Object.entries(magnetNames).find(([k]) => path.includes(k))
  return { image, name: hit ? hit[1] : undefined }
})
const magnetImages = magnetFiles.map((m) => m.image)
const sweaterImages = Object.values(
  import.meta.glob('../assets/Sweater/*.{jpg,png}', { eager: true, import: 'default' })
)

const airpodImg = (key) => Object.entries(
  import.meta.glob('../assets/Airpod Cases/*.png', { eager: true, import: 'default' })
).find(([path]) => path.includes(key))?.[1]
const earthAirpodVariants = [['earth-open', 'Open'], ['earth-closed', 'Closed']]
  .map(([k, label]) => ({ label, image: airpodImg(k) }))
const appliqueNames = { starfish: 'Starfish Applique', turtle: 'Turtle Applique', 'blue-fish': 'Blue Fish Applique' }
const appliqueFiles = Object.entries(
  import.meta.glob('../assets/Appliques/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(appliqueNames).find(([k]) => path.includes(`applique-${k}`))
  return { image, name: hit ? hit[1] : undefined }
})
const glassNames = {
  'orange': 'Orange Slice Glass Holder', 'rainbow-sling': 'Rainbow Sling Glass Holder',
  'sunflower-sling': 'Sunflower Sling Glass Holder', 'red-blue': 'Red & Blue Glass Holder',
  'strawberry': 'Strawberry Glass Holder', 'blue-white': 'Blue & White Glass Holder',
  'rainbow-loop': 'Rainbow Glass Holder', 'evil-eye': 'Evil Eye Glass Holder',
  'owl-cream': 'Cream Owl Glass Holder', 'kiwi': 'Kiwi Glass Holder',
  'owl-pink': 'Pink Owl Glass Holder', 'daisy-sling': 'Daisy Sling Glass Holder',
}
const glassFiles = Object.entries(
  import.meta.glob('../assets/Glass Holders/*.png', { eager: true, import: 'default' })
).filter(([path]) => !path.endsWith('glass-rainbow-sling.png') && !path.includes('glass-owl-')) // Rainbow Sling Glass Holder removed
  .map(([path, image]) => {
  const hit = Object.entries(glassNames).find(([k]) => path.endsWith(`glass-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const owlGlassVariants = [['owl-cream', 'Cream'], ['owl-pink', 'Pink']].map(([k, label]) => ({  label, fit: 'contain',  image: Object.entries(import.meta.glob('../assets/Glass Holders/glass-owl-*.png', { eager: true, import: 'default' })).find(([p]) => p.includes('glass-' + k))?.[1],}))
const carNames = { 'car-spiderman': 'Spiderman Car Hanging', 'car-sunflower-pot': 'Sunflower Pot Car Hanging' }
const carFiles = Object.entries(
  import.meta.glob('../assets/Car Hangings/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(carNames).find(([k]) => path.endsWith(`${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const coasterNames = { 'egg-pair': 'Fried Egg Coasters', 'egg-toast': 'Egg & Toast Coaster Set', lotus: 'Pink Lotus Coaster' }
const coasterFiles = Object.entries(
  import.meta.glob('../assets/Coasters/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(coasterNames).find(([k]) => path.endsWith(`coaster-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const curtainNames = { 'daisy': 'Daisy Curtain Hanging', 'sunflower-tie': 'Sunflower Tie-Back Curtain Hanging', 'sunflower': 'Sunflower Curtain Hanging' }
const curtainFiles = Object.entries(
  import.meta.glob('../assets/Curtain Hangings/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(curtainNames).find(([k]) => path.endsWith(`curtain-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const godAll = Object.entries(
  import.meta.glob('../assets/God Dolls/*.png', { eager: true, import: 'default' })
)
const godImg = (k) => godAll.find(([p]) => p.endsWith(`god-${k}.png`))?.[1]
const godNames = {

  'hanuman': 'Hanuman Doll', 'shiva': 'Baby Shiva Doll', 'krishna': 'Baby Krishna Doll',
}
const godSingles = Object.entries(godNames).map(([k, name]) => ({ name, image: godImg(k) })).filter((g) => g.image)
const murugarVariants = [['green-murugar', 'Green'], ['red-murugar-front', 'Red (Front)'], ['red-murugar-back', 'Red (Back)'], ['murugar-pair', 'With Valli']].map(([k, label]) => ({ label, fit: 'contain', image: godImg(k) }))
const pouchNames = {
  'mickey': 'Mickey Pouch', 'tulip-drawstring': 'Tulip Drawstring Pouch', 'pooh': 'Pooh Pouch',
  'panda': 'Panda Pouch', 'cat': 'Black Cat Pouch', 'polar-bear': 'Polar Bear Pouch',
  'magnetic-flap': 'Magnetic Flap Pouch', 'striped-panda': 'Striped Panda Pouch',
  'sunflower-drawstring': 'Sunflower Drawstring Pouch', 'toast': 'Toast Pouch', 'teddy': 'Teddy Bear Pouch',
}
const pouchFiles = Object.entries(
  import.meta.glob('../assets/Pouches/*.png', { eager: true, import: 'default' })
).filter(([path]) => !path.endsWith('pouch-toast.png') && !path.endsWith('pouch-magnetic-flap.png')) // grouped into Bread Pouch set
  .map(([path, image]) => {
  const hit = Object.entries(pouchNames).find(([k]) => path.endsWith(`pouch-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const breadPouchVariants = [['toast', 'Front'], ['magnetic-flap', 'Back']].map(([k, label]) => ({ label, fit: 'contain', image: Object.entries(import.meta.glob('../assets/Pouches/*.png', { eager: true, import: 'default' })).find(([p]) => p.endsWith('pouch-' + k + '.png'))?.[1] }))
const bandNames = { 'cherry-bow': 'Cherry Bow Rubber Band' }
const bandFiles = Object.entries(
  import.meta.glob('../assets/Rubber Bands/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(bandNames).find(([k]) => path.endsWith(`band-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const heartNames = {
  'pink-bubble': 'Pink Heart Plushie', 'cream-popcorn': 'Cream Popcorn Heart Plushie',
  'polka-bow': 'Magenta Heart Plushie with Polka Bow', 'pastel-pink': 'Pastel Pink Heart Plushie',
  'white-pair': 'White Heart Plushie Pair',
}
const heartFiles = Object.entries(
  import.meta.glob('../assets/Heart Plushies/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(heartNames).find(([k]) => path.endsWith(`heart-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const charmNames = { 'sunflower': 'Sunflower Bag Charm', 'cherry-blue-pink': 'Blue & Pink Cherry Bag Charm', 'cherry-red': 'Red Cherry Bag Charm' }
const charmFiles = Object.entries(
  import.meta.glob('../assets/Bag Charms/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(charmNames).find(([k]) => path.endsWith(`charm-${k}.png`))
  return { image, name: hit ? hit[1] : undefined }
})
const babyNames = { 'red-dress': 'Red Baby Frock', 'sneaker-single': 'Black Baby Sneaker', 'sneaker-pair': 'Black Baby Sneakers Pair' }
const babyFiles = Object.entries(
  import.meta.glob('../assets/Baby Essentials/*.png', { eager: true, import: 'default' })
).map(([path, image]) => {
  const hit = Object.entries(babyNames).find(([k]) => path.endsWith(`baby-${k}.png`))
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
  {
    id: _id++,
    name: 'Pearl Earring',
    category: 'Earrings',
    price: 250,
    description: 'Crochet flower studs with a pearl centre, available in cream and pink.',
    bgColor: '#FFE8E8',
    accentColor: '#FF6B6B',
    image: pearlVariants[0]?.image,
    variants: pearlVariants,
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
  ...expand('Flowers & Bouquets', bouquetImages,   600,  'Everlasting crochet flower. Never wilts — a perfect gift that lasts forever.',         '#FFE8F4', '#FF6BA8')
    .map((p, i) => ({ ...p, name: bouquetFiles[i].name ?? p.name })),
  ...expand('Gajra',              gajraImages,     300,  'Traditional gajra recreated in crochet. Wear it all day without any wilting.',         '#FFF8DC', '#FFD93D'),
  ...expand('Keychains',          keychainImages,  200,  'Cute crochet keychain in various shapes and colours. A fun little accessory!',         '#F5E8FF', '#C77DFF'),
  ...expand('Fridge Magnets',          magnetImages,    150,  'Tiny crochet fridge magnet. An adorable little décor piece.',                          '#E8F4FF', '#4D96FF')
    .map((p, i) => ({ ...p, name: magnetFiles[i].name ?? p.name })),
  {
    id: _id++,
    name: 'Earth Airpod Case',
    category: 'Airpod Cases',
    price: 400,
    description: 'Handmade crochet earth-pattern airpod case — see it open and closed.',
    bgColor: '#E8F4FF',
    accentColor: '#4D96FF',
    image: earthAirpodVariants[0].image,
    variants: earthAirpodVariants,
    variantLabel: 'View',
  },
  ...expand('Appliques', appliqueFiles.map((a) => a.image), 100, 'Handmade crochet applique — sew or stick it on to add a cute touch.', '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: appliqueFiles[i].name ?? p.name })),
  ...expand('Glass Holders', glassFiles.map((g) => g.image), 350, 'Handmade crochet glass holder — keeps your spectacles safe in style.', '#E8F4FF', '#4D96FF')
    .map((p, i) => ({ ...p, name: glassFiles[i].name ?? p.name })),
  { id: _id++, name: 'Owl Glass Holder', category: 'Glass Holders', price: 350, description: 'Handmade crochet owl glass holder, available in cream and pink.', bgColor: '#E8F4FF', accentColor: '#4D96FF', image: owlGlassVariants[0].image, imageFit: 'contain', variants: owlGlassVariants },
  ...expand('Car Hangings', carFiles.map((c) => c.image), 300, 'Handmade crochet car hanging — a cute charm for your rear-view mirror.', '#FFE8E8', '#FF6B6B')
    .map((p, i) => ({ ...p, name: carFiles[i].name ?? p.name })),
  ...expand('Coasters', coasterFiles.map((c) => c.image), 250, 'Handmade crochet coaster — a cute, cosy touch for your table.', '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: coasterFiles[i].name ?? p.name })),
  ...expand('Curtain Hangings', curtainFiles.map((c) => c.image), 300, 'Handmade crochet curtain hanging — a cheerful tie-back for your curtains.', '#E8FFE8', '#6BCB77')
    .map((p, i) => ({ ...p, name: curtainFiles[i].name ?? p.name })),
  { id: _id++, name: 'Murugar Doll', category: 'God Dolls', price: 600, description: 'Handmade crochet Murugar doll — pick green, red (front and back) or Murugar with Valli.', bgColor: '#FFF8DC', accentColor: '#FFD93D', image: murugarVariants[0].image, imageFit: 'contain', variants: murugarVariants },
  ...godSingles.map((g) => ({ id: _id++, name: g.name, category: 'God Dolls', price: 600, description: 'Handmade crochet god doll — a lovely keepsake for your home.', bgColor: '#FFF8DC', accentColor: '#FFD93D', image: g.image, imageFit: 'contain' })),
  ...expand('Pouches', pouchFiles.map((p) => p.image), 250, 'Handmade crochet pouch — a cute little carry-all for your essentials.', '#F5E8FF', '#C77DFF')
    .map((p, i) => ({ ...p, name: pouchFiles[i].name ?? p.name, imageFit: 'contain' })),
  { id: _id++, name: 'Bread Pouch', category: 'Pouches', price: 250, description: 'Handmade crochet bread pouch — see the front and back.', bgColor: '#F5E8FF', accentColor: '#C77DFF', image: breadPouchVariants[0].image, imageFit: 'contain', variants: breadPouchVariants, variantLabel: 'View' },
  ...expand('Rubber Bands', bandFiles.map((b) => b.image), 150, 'Handmade crochet hair rubber band — a sweet accessory for any hairstyle.', '#FFE8E8', '#FF6B6B')
    .map((p, i) => ({ ...p, name: bandFiles[i].name ?? p.name, imageFit: 'contain' })),
  ...expand('Heart Plushies', heartFiles.map((h) => h.image), 500, 'Soft handmade crochet heart plushie — a cuddly gift full of love.', '#FFE8F4', '#FF6BA8')
    .map((p, i) => ({ ...p, name: heartFiles[i].name ?? p.name, imageFit: 'contain' })),
  ...expand('Bag Charms', charmFiles.map((c) => c.image), 150, 'Handmade crochet bag charm — clip it on to add a cute touch to any bag.', '#FFF8DC', '#FFD93D')
    .map((p, i) => ({ ...p, name: charmFiles[i].name ?? p.name, imageFit: 'contain' })),
  ...expand('Baby Essentials', babyFiles.map((b) => b.image), 400, 'Soft handmade crochet baby wear — made with love for little ones.', '#FFE8F4', '#FF6BA8')
    .map((p, i) => ({ ...p, name: babyFiles[i].name ?? p.name, imageFit: 'contain' })),
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
  'Fridge Magnets',
  'Sweater',
  'Airpod Cases',
  'Appliques',
  'Glass Holders',
  'Car Hangings',
  'Coasters',
  'Curtain Hangings',
  'God Dolls',
  'Pouches',
  'Rubber Bands',
  'Heart Plushies',
  'Bag Charms',
  'Baby Essentials',
]
