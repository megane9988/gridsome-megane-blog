<template>
  <div>
	<g-link :to="post.path"><g-image :src="post.jetpackFeaturedMediaUrl" /></g-link>
		<g-link :to="post.path"><span v-html="post.title" /></g-link>
    <!-- <div v-html="post.excerpt" /> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
