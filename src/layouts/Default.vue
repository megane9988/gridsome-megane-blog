<template>
  <div class="layout">
	<div class="site-logo">
		<g-link to="/"><g-image src="~/assets/img/logo.svg"/></g-link>
	</div>
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>

@font-face {
	font-family: "Noto Sans CJK JP";
	font-style: normal;
	font-weight: 400;
	src: url("../assets/fonts/NotoSansCJKjp-Regular.eot");
	src: url("../assets/fonts/NotoSansCJKjp-Regular.eot?#iefix") format("embedded-opentype"),
	     url("../assets/fonts/NotoSansCJKjp-Regular.woff") format("woff"),
	     url("../assets/fonts/NotoSansCJKjp-Regular.otf") format("opentype");
}
@font-face {
	font-family: "Noto Sans CJK JP";
	font-style:  bold;
	font-weight: 700;
	src: url("../assets/fonts/NotoSansCJKjp-Bold.eot");
	src: url("../assets/fonts/NotoSansCJKjp-Bold.eot?#iefix") format("embedded-opentype"),
	     url("../assets/fonts/NotoSansCJKjp-Bold.woff") format("woff"),
	     url("../assets/fonts/NotoSansCJKjp-Bold.otf") format("opentype");
}
body {
  font-family: "Noto Sans CJK JP", sans-serif;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.site-logo{
	text-align: center;
}
.site-logo img{
	width: 160px;
	height: auto;
	margin: 20px 0;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
</style>
