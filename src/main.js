import DefaultLayout from '~/layouts/Default.vue'

// SNSシェアー関連
import SocialSharing from 'vue-social-sharing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//スムーズスクロール
import VueScrollTo from 'vue-scrollto'

//swiper(スライダー)
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(SocialSharing)
  Vue.use(VueScrollTo)
  library.add(faFacebook)
  library.add(faTwitter)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Swiper', Swiper)
  Vue.component('SwiperSlide', SwiperSlide)

  // Add a meta tag
  head.meta.push({
    name: 'robots',
    content: 'noindex , nofollow'
  })
}

import '~/assets/styles.scss'
