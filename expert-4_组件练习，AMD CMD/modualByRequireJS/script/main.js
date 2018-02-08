requirejs.config({
    baseUrl: 'script',
    paths: {
        jquery: 'jquery-1.9.1.min',
        app: "../app"
    }
});

requirejs(["jquery","app/carousal","app/waterfull","app/gotop"], function($,Swiper,Waterfall,Gotop) {
    //加载轮播组件
    new Swiper({
        parentNode: '#header',
        auto: true,
        imageData: [{
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=6&s=0',
          },
          {
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=2&s=0',
          },
          {
            url: 'https://tuimeizi.cn/random?w=800&h=500&o=3&s=0',
          },
        ],
        height: '840'
      },
    )
    //加载瀑布流组件
    Waterfall($('#pic-ct'));
    //加载回到顶部组件
    new Gotop;
});