


//立即执行函数进行封装
Explouser = (function () {
    function _Explouser($node,callback) {
        this.$target = $node
        this.callback = callback
        var clock
        this.clock = clock
        this.bind()
        this.lazyRender()
    }
    //公共方法
    _Explouser.prototype = {
        bind: function () {
            var _this = this
            $(window).on('scroll', function () {
                if (_this.clock) {
                    clearTimeout(_this.clock)
                }
                _this.clock = setTimeout(() => {
                    _this.lazyRender()
                }, 500);
            })
        },
        lazyRender: function () {
            if (this.checkShow(this.$target)) {
                this.callback(this.$target)
            }
        },
        checkShow: function () {
            var $scrollTop = $(window).scrollTop()
            var $windowHeight = $(window).height()
            var $offSet = this.$target.offset().top
            if ($offSet < $scrollTop + $windowHeight && $offSet > $scrollTop) {
                return true
            }
            return false
        },
        loadImg: function ($img) {
            $img.attr('src', $img.attr('data-src'))
        }
    }
    //第二层封装，返回start函数
    return {
        start: function ($ct) {
            $ct.each(function (index,node) {
                new _Explouser($(node),function ($node) {
                    console.log($node)
                    this.loadImg($node)
                })
            })
        }
    }
})()

Explouser.start($('.container img'))

// $('.container img').each(function (index,node) {
//     new Explouser($(node),function ($node) {
//         console.log($node)
//         this.loadImg($node)
//     })
// })


//demo


// function Exposure($target, callback) {
//     this.$target = $target
//     this.callback = callback
//     var clock
//     this.clock = clock 
//     this.bind()
//     this.lazyRender()
// }

// Exposure.prototype = {
//     bind: function () {
//         // console.log('this',this)
//         var _this = this
//         $(window).on('scroll', function () {
//             if (_this.clock) {
//                 clearTimeout(_this.clock)
//             }
//             _this.clock = setTimeout(() => {
//                 _this.lazyRender()
//             }, 500);
//         })
//     },
//     lazyRender: function () {
//         if (this.checkShow(this.$target)) {
//             this.callback(this.$target)
//         }
//     },
//     checkShow: function () {
//         var $scrollTop = $(window).scrollTop()
//         var $windowHeight = $(window).height()
//         var $offSet = this.$target.offset().top
//         if ($offSet < $scrollTop + $windowHeight && $offSet > $scrollTop) {
//             return true
//         }
//         return false
//     },
//     loadImg: function ($img) {
//         $img.attr('src', $img.attr('data-src'))
//     }
// }

// // new Exposure($('#hello'), function () {
// //     $('#hello').text($('#hello').text() + 'world')
// // })
// // new Exposure($('#hello'), function () {
// //     $('#world').text('hello' + $('#world').text())
// // })

// $('.container img').each(function (index,node) {
//     new Exposure($(node),function ($node) {
//         this.loadImg($node)
//     })
// })
