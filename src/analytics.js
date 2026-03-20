import { track } from '@vercel/analytics'

// Toggle individual tracking events here
const FLAGS = {
  product_viewed:        true,
  instagram_dm_clicked:  true,
  share_link_copied:     true,
  category_filtered:     true,
  sort_changed:          true,
}

export function trackEvent(event, props) {
  if (FLAGS[event]) track(event, props)
}
