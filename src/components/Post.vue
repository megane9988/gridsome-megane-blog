<template>
  <div>
	<h2>
		<g-link :to="post.path"><span v-html="post.title" /></g-link>
	</h2>
    <div v-html="post.excerpt" />
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
