<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title"/>
    <template v-if="$page.wordPressPost.tags.length">
	  <div class="entry-header">
		<ul class="tag-list">
			<li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
			<g-link :to="tag.path">{{ tag.title }}</g-link>
			</li>
		</ul>
	  </div>
    </template>
    <social-sharing
      :url="'https://gridsome.demodemo.link' + this.$route.path"
      :title="$page.wordPressPost.title"
      inline-template>
      <ul class="social-share">
          <li>
            <network network="twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </network>
          </li>
          <li>
            <network network="facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </network>
          </li>
      </ul>
    </social-sharing>
    <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    />
    <div v-html="$page.wordPressPost.content"/>

    <template v-if="$page.wordPressPost.jetpackRelatedPosts.length">
      <h4>関連記事</h4>
      <ul class="RelatedPost">
        <li v-for="RelatedPost in $page.wordPressPost.jetpackRelatedPosts" :key="RelatedPost.id" >
            <g-link :to="'/article/' + RelatedPost.id">
                <g-image :src="RelatedPost.img.src" />
                <br>{{ RelatedPost.title }}
            </g-link>
        </li>
      </ul>
    </template>
    <template v-if="$page.wordPressPost.categories.length">
      <h4>Posted in</h4>
      <ul class="list categories">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
          <g-link :to="category.path">{{ category.title }}</g-link>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
    headTags{
      attributes{
        property
        content
      }
    }
    jetpackRelatedPosts{
      id
      title
      url
      img{
        src
      }
    }
  }
}
</page-query>

<script>
export default {

  metaInfo () {
    return {
      title: this.$page.wordPressPost.title,
      meta: [
        {
          property: 'og:image',
          content: this.$page.wordPressPost.headTags[17].attributes.content
        },
        {
          property: 'og:site_name',
          content: this.$page.wordPressPost.headTags[8].attributes.content
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://gridsome.demodemo.link' + this.$route.path
        },
        {
          property: 'og:title',
          content: this.$page.wordPressPost.title
        },
        {
          property: 'og:description',
          content: this.$page.wordPressPost.headTags[6].attributes.content
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

<style>
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
  .social-share{
      padding: 0;
      margin: 5px 0;
      display: flex;
      justify-content: center;
  }
  .social-share li{
      list-style: none;
      padding: 0;
      margin: 0 10px;
      font-size: 40px;
      cursor: pointer;
  }
  .RelatedPost{
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
  }
  .RelatedPost li{
      box-sizing: border-box;
      width: 50%;
      list-style: none;
	  padding: 4px;
	  line-height: 1;
  }
  .RelatedPost li a{
	  font-size:14px;
  }
</style>
