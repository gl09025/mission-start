
Carousal = (function () {
    function _Carousal($ct) {
        this.$ct = $ct
        this.init()
        this.bind()
    }
    
    _Carousal.prototype = {
        init: function () {
            var $imgs = this.$imgs = this.$ct.find('.img-ct>li')
            var $imgCt = this.$imgCt = this.$ct.find('.img-ct')
            var imgsCount = this.imgsCount = $imgs.length
            var $firstImg = $imgs.first().clone()
            var $lastImg = $imgs.last().clone()
            var imgWidth = this.imgWidth = $imgs.eq(0).width()
            var $preArrow = this.$preArrow = this.$ct.find('.pre')
            var $nextArrow = this.$nextArrow = this.$ct.find('.next')
            var pageIndex = this.pageIndex = 0
            var $bullet = this.$bullet = this.$ct.find('.bullet')
            var isLoading = this.isLoading = false
    
            //复制第一张图片到最后,最后一张图片放到最前面
            $imgCt.prepend($lastImg).append($firstImg)
            $imgCt.css({
                'left': -imgWidth + "px",
                'width': (imgsCount + 2) * imgWidth
            })
        },
        bind: function () {
            var _this = this
            this.$nextArrow.on('click', function () {
                event.preventDefault()
                if (_this.isLoading) { return }
                _this.playNext(1)
            })
            this.$preArrow.on('click', function () {
                event.preventDefault()
                if (_this.isLoading) { return }
                _this.playPre(1)
            })
            this.$bullet.on('click', 'li', function () {
                var $this = $(this)
                var $index = $this.index()
                if ($index > _this.pageIndex) {
                    _this.playNext($index - _this.pageIndex)
                } else if ($index < _this.pageIndex) {
                    _this.playPre(_this.pageIndex - $index)
                }
            })
        },
        playNext: function (len) {
            var _this = this
            this.isLoading = true
            this.$imgCt.animate({
                left: '-=' + _this.imgWidth * len
            }, 500, function () {
                _this.pageIndex += len
                if (_this.pageIndex === _this.imgsCount) {
                    _this.pageIndex = 0
                    _this.$imgCt.css('left', -_this.imgWidth + 'px')
                }
                _this.setBullet()
                _this.isLoading = false
            })
        },
        playPre: function (len) {
            var _this = this
            this.isLoading = true
            this.$imgCt.animate({
                left: '+=' + _this.imgWidth * len
            }, 500, function () {
                _this.pageIndex -= len
                if (_this.pageIndex < 0) {
                    _this.pageIndex = 3
                    _this.$imgCt.css('left', -_this.imgWidth * _this.imgsCount + 'px')
                }
                _this.setBullet()
                _this.isLoading = false
            })
        },
        setBullet: function () {
            this.$ct.find('.bullet li').removeClass('active').eq(this.pageIndex).addClass('active')
        }
    }
    return {
        init: function ($ct) {
            console.log('init')
            $ct.each(function (index,node) {
                new _Carousal($(node))
            })
        }
    }
})()

Carousal.init($('.carousal'))



// var $imgs = $('.carousal .img-ct>li')
// var $imgCt = $('.carousal .img-ct')
// var $imgsCount = $imgs.length
// var $firstImg = $imgs.first().clone()
// var $lastImg = $imgs.last().clone()
// var $imgWidth = $imgs.eq(0).width()
// var $preArrow = $('.pre')
// var $nextArrow = $('.next')
// var pageIndex = 0
// var $bullet = $('.bullet')
// var isLoading = false

// //复制第一张图片到最后,最后一张图片放到最前面
// $imgCt.prepend($lastImg).append($firstImg)
// $imgCt.css({
//     'left': -$imgWidth + "px",
//     'width': ($imgsCount + 2) * $imgWidth
// })

// $nextArrow.on('click', function () {
//     event.preventDefault()
//     if (isLoading) { return }
//     playNext(1)
// })
// $preArrow.on('click', function () {
//     event.preventDefault()
//     if (isLoading) { return }
//     playPre(1)
// })
// $bullet.on('click', 'li', function () {
//     var $this = $(this)
//     var $index = $this.index()
//     if ($index > pageIndex) {
//         playNext($index - pageIndex)
//     } else if ($index < pageIndex) {
//         playPre(pageIndex - $index)
//     }
// })



// function playNext(len) {
//     isLoading = true
//     $imgCt.animate({
//         left: '-=' + $imgWidth * len
//     }, 500, function () {
//         pageIndex += len
//         console.log(pageIndex)
//         if (pageIndex === $imgsCount) {
//             pageIndex = 0
//             $imgCt.css('left', -$imgWidth + 'px')
//         }
//         setBullet()
//         isLoading = false
//     })
// }

// function playPre(len) {
//     isLoading = true
//     $imgCt.animate({
//         left: '+=' + $imgWidth * len
//     }, 500, function () {
//         pageIndex -= len
//         console.log(pageIndex)
//         if (pageIndex < 0) {
//             pageIndex = 3
//             $imgCt.css('left', -$imgWidth * $imgsCount + 'px')
//         }
//         setBullet()
//         isLoading = false
//     })
// }

// function setBullet() {
//     $('.bullet li').removeClass('active').eq(pageIndex).addClass('active')
// }

