// One-time image compression script
// Resizes all product images to max 1200px wide and re-saves as JPEG @ 82% quality
// Run with: node scripts/compress-images.js

import sharp from 'sharp'
import { readdir, stat, readFile, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ASSETS_DIR = join(__dirname, '..', 'src', 'assets')
const MAX_WIDTH = 1200
const JPEG_QUALITY = 82
const PNG_QUALITY = 82
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getFiles(full))
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function compress(filePath) {
  const before = (await stat(filePath)).size
  const ext = extname(filePath).toLowerCase()

  const input = await readFile(filePath)
  const img = sharp(input).resize({ width: MAX_WIDTH, withoutEnlargement: true })

  let buf
  if (ext === '.png') {
    buf = await img.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
  } else {
    buf = await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
  }

  // Only overwrite if the new file is actually smaller
  if (buf.length < before) {
    await writeFile(filePath, buf)
    const saved = ((before - buf.length) / 1024).toFixed(0)
    const beforeKB = (before / 1024).toFixed(0)
    const afterKB = (buf.length / 1024).toFixed(0)
    console.log(`✓ ${filePath.replace(ASSETS_DIR, '')}  ${beforeKB}KB → ${afterKB}KB  (saved ${saved}KB)`)
  } else {
    console.log(`— ${filePath.replace(ASSETS_DIR, '')}  already optimised, skipping`)
  }
}

const files = await getFiles(ASSETS_DIR)
console.log(`Found ${files.length} images. Compressing...\n`)

let done = 0
for (const f of files) {
  try {
    await compress(f)
  } catch (err) {
    console.warn(`✗ SKIPPED ${f.replace(ASSETS_DIR, '')}  — ${err.message}`)
  }
  done++
  if (done % 10 === 0) console.log(`  [${done}/${files.length}]`)
}

console.log('\nDone!')
