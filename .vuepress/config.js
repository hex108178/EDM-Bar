module.exports = {
  title: "EDM Bar",
  description: '音乐不停，生命不止~',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '总览', 
        icon: 'reco-eye',
        items: [
          { text: '百大DJ', link: '/docs/overview/top100sDJ.md' },
		  { text: '厂牌介绍Labels', link: '/docs/overview/labels.md' },
		  { text: '流派曲风Genres', link: '/docs/overview/genres.md' },
        ]
      },
	  { text: '厂牌介绍Labels', 
        icon: 'reco-blog',
        items: [
          { text: '国内厂牌', link: '/blogs/labels/sinolabals.md' },
		  { text: '国外厂牌', link: '/blogs/labels/worldwidelables.md' },
        ]
      },
	   { text: '流派曲风Genres', 
        icon: 'reco-douyin',
        items: [
          { text: 'House', link: '/blogs/genres/House.md' },
		  { text: 'Techno', link: '/blogs/genres/Techno.md' },
		  { text: 'Trance', link: '/blogs/genres/Trance.md' },
		  { text: 'Dubstep', link: '/blogs/genres/Dubstep.md' },
		  { text: 'Drum&Bass', link: '/blogs/genres/DrumnBass.md' },
		  { text: 'UK Garage', link: '/blogs/genres/UK_Garage.md' },
		  { text: 'Hard Dance', link: '/blogs/genres/Hard_Dance.md' },
		  { text: 'Moombahton', link: '/blogs/genres/Moombahton.md' },
		  { text: 'Breakbeat', link: '/blogs/genres/Breakbeat.md' },
		  { text: 'Downstep', link: '/blogs/genres/Downstep.md' },  
        ]
      },
      { text: '联系我们', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/hex108178', icon: 'reco-github' }
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
   friendLink: [
      {
        title: 'audiomack',
        desc: '免费音乐流媒体和共享',
        avatar: 'https://audiomack.com/static/images/fb-graphic_275x275.jpg',
        link: 'https://audiomack.com/'
      },
      {
        title: 'spotify',
        desc: 'spotify：倾听就是一切',
        avatar: 'https://en.followersnet.com/wp-content/uploads/2019/01/Spotify-1.png',
        link: 'https://www.spotify.com/sg-en/'
      },
	        {
        title: 'soundcloud',
        desc: '使用SoundCloud免费在线播放和收听音乐',
        avatar: 'https://en.followersnet.com/wp-content/uploads/2019/01/SoundCloud.png',
        link: 'https://soundcloud.com/'
      },
    ],
   //   {
   //     title: 'soundcloud',
   //     desc: '使用SoundCloud免费在线播放和收听音乐',
   //     avatar: "../../.vuepress/public/soundcloud.png",
   //     link: 'https://soundcloud.com/'
   //   },
   // ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'hex108178',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
   // record: 'xxxx',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
