import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'robots',
    content: 'noindex , nofollow'
  })
}

import '~/assets/styles.scss'

