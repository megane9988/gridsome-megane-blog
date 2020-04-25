# このプロジェクトについて
最近流行のJamstackを利用して、WordPressを静的にホスティングします。
- サイトURL
  - [https://gridsome.demodemo.link/](https://gridsome.demodemo.link/)

利用しているサービスは以下の通り
- WordPress
  -  [https://https://megane-blog.com/](https://megane-blog.com/)
  - Xserver にてホスティング
- Github
  - [https://github.com/megane9988/gridsome-megane-blog](https://github.com/megane9988/gridsome-megane-blog)
  - リポジトリとして利用
- Gridsome
    - [https://gridsome.org/](https://gridsome.org/)
    - Vue.jsを利用したスタティックサイトジェネレーター
    - WordPressのJsonファイルを元に静的なサイトを構築する
    - 今回は雛形として後述のWordPress starter for Gridsomeを利用
  - 後述を参照
- Netlify
  - [https://www.netlify.com/](https://www.netlify.com/)
  - Githubのリポジトリを参照して、pushなどのタイミングにビルドを行い、その結果の静的なファイルをホスティング
- 結果として出力されるURL
  - [https://gridsome.demodemo.link/](https://gridsome.demodemo.link/)

# プロジェクトの進め方
- Githubのissueベースで作業を進める
- [プロジェクトボード](https://github.com/megane9988/gridsome-megane-blog/projects/1)を利用する


# WordPress starter for Gridsome について

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gridsome/gridsome-starter-wordpress)

## Install

`gridsome create my-gridsome-project wordpress`

## Guide

Add your WordPress URL to the plugin options.

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required
        typeName: 'WordPress', // GraphQL schema name
      }
    }
  ],
  // Setup template routes for any WordPress collection
  templates: {
    WordPressPost: '/:year/:month/:day/:slug',
    WordPressTag: '/tag/:slug'
  },
}

```

See all [options](https://gridsome.org/plugins/@gridsome/source-wordpress).

## Included templates

This starter includes basic templates for categories, tags and posts.
