import { useState } from 'react'

const INSTAGRAM_DM_URL = 'https://ig.me/m/_anma_crochet'
const REDIRECT_DELAY = 3000

/**
 * Copies a message to clipboard, shows a 3-second countdown,
 * then opens the Instagram DM URL.
 *
 * Returns { dmCopied, countdown, trigger }
 *   dmCopied  — true while the toast should be visible
 *   countdown — 3 → 2 → 1 → 0 while counting, null otherwise
 *   trigger(message) — call to start the flow
 */
export function useDMCountdown() {
  const [dmCopied, setDmCopied] = useState(false)
  const [countdown, setCountdown] = useState(null)

  const trigger = async (message) => {
    if (countdown !== null) return

    try {
      await navigator.clipboard.writeText(message)
    } catch {
      const el = document.createElement('textarea')
      el.value = message
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }

    setDmCopied(true)
    setCountdown(3)

    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(interval); return 0 }
        return c - 1
      })
    }, 1000)

    setTimeout(() => {
      window.open(INSTAGRAM_DM_URL, '_blank', 'noopener,noreferrer')
      setDmCopied(false)
      setCountdown(null)
    }, REDIRECT_DELAY)
  }

  return { dmCopied, countdown, trigger }
}
