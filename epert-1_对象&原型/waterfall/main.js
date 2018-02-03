//https://picsum.photos/200/300?image=0

function Barrels() {
    var a = document.querySelector('.image-preview')
    this.content = a
    this.imageList = []
    this.loadImage()
    this.baseHeight = 200
    this.lazyLoad()
    //设置滚动时钟
    var clock = undefined
}

Barrels.prototype = {
    //获取十张图片
    getImageUrls: function (num) {
        var urls = []
        for (let index = 0; index < num; index++) {
            //获取范围内的随机整数 Math.floor(Math.random() * (max - min + 1)) + min
            var imageHeight = Math.floor(Math.random() * (501 - 200 + 1)) + 200
            var imageWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300
            color = Math.random().toString(16).substring(2, 8)
            var url = "http://placehold.it/" + imageWidth + "x" + imageHeight + "/" + color + "/fff"
            urls.push(url)
        }
        console.log(urls)
        return urls
    },
    //对每张图片进行处理
    loadImage: function () {
        var _this = this
        var images = this.getImageUrls(19)
        for (let index = 0; index < images.length; index++) {
            var image = new Image()
            image.src = images[index]
            //图片加载完成后再进行操作
            image.onload = function (e) {
                //原图宽高
                var imageWidth = e.path[0].width
                var imageHeithe = e.path[0].height
                //基于一个基准高，计算图片的宽
                var imageInfo = {
                    currentTargetImage: e.path[0],
                    width: (imageWidth / imageHeithe) * _this.baseHeight,
                    height: _this.baseHeight
                }
                //处理图片
                _this.render(imageInfo)
            }
        }
    },
    //处理存放图片的数组
    render: function (imageInfo) {
        var _this = this
        var imageList = this.imageList
        var lastImage = imageInfo
        var contentElement = document.querySelector('.image-preview')
        var contentWidth = contentElement.offsetWidth
        imageList.push(imageInfo)
        //计算图片的总宽度
        var totalWidth = 0
        for (let index = 0; index < _this.imageList.length; index++) {
            totalWidth += _this.imageList[index].width
        }
        //图片的宽度超过容器的宽度就开始放置图片
        if (totalWidth > contentWidth) {
            //移除最后一个放不下的图片
            imageList.pop()
            totalWidth -= lastImage.width
            //计算一行的高度
            var newImageHeight = (contentWidth * _this.baseHeight) / totalWidth
            //设置图片高度
            _this.layout(newImageHeight)
            //清空存放图片的数组，放置下面的图片数组
            _this.imageList = []
            _this.imageList.push(imageInfo)
        }
    },
    //对图片进行布局
    layout: function (height) {
        var imageList = this.imageList
        var imageRow = document.createElement('div')
        imageRow.setAttribute('class', 'image-row')
        imageList.forEach(function (element, index, array) {
            var imageBox = document.createElement('div')
            imageBox.setAttribute('class', 'image-box')
            var image = element.currentTargetImage
            image.style.height = '' + height + 'px'
            imageBox.appendChild(image)
            imageRow.appendChild(imageBox)
        })
        //将创建好的图片插入容器
        this.content.appendChild(imageRow)
    },
    lazyLoad: function () {
        var _this = this
        window.onscroll = function (ev) {
            if (_this.clock) {
                clearTimeout(_this.clock)
            }
            _this.clock = setTimeout(() => {
                //判断是否滚动到底部
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    console.log('buttom')
                    _this.loadImage()
                }

            }, 1000)
            // you're at the bottom of the page
        }
    }
}

var newBarrel = new Barrels()