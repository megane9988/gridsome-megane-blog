<template>
  <Layout>
  <h2>おすすめ記事</h2>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide ><g-link to="/article/2842/">
	<g-image src="~/assets/img/posts/jamstack.jpg" alt="WordPress+Gridsome+Netlifyを組み合わせたJAMStackにて静的に出力することを試みる"/>
	</g-link></swiper-slide>
    <swiper-slide ><g-link to="/article/2692/">
	<g-image src="~/assets/img/posts/minari.jpg" alt="Zoomのためだけに、身なりや部屋を整えるなどの準備をするのは少し面倒！ そんなときはSnapCameraがおすすめです。"/>
	</g-link></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <h2>最新記事</h2>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        jetpackFeaturedMediaUrl
        headTags{
          attributes{
            property
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
	Post
  },
  metaInfo: {
    title: 'megane-blog.net'
  },
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 5000,
		}
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  }
}

</script>
