import DefaultLayout from '~/layouts/Default.vue'

// SNSシェアー関連
import SocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(SocialSharing)
  library.add(faFacebook)
  library.add(faTwitter)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  // Add a meta tag
  head.meta.push({
    name: 'robots',
    content: 'noindex , nofollow'
  })
}

import '~/assets/styles.scss'
