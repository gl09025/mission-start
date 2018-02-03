function GoTop() {
    //创建元素
    var newNode = document.createElement('div')
    newNode.setAttribute('class','top')
    newNode.textContent = "回到顶部"
    //赋值当前的元素，获取父元素
    this.target = newNode
    this.ct = newNode.parentElement || 'body'
}

GoTop.prototype = {
    createNode: function () {
        // var newNode = document.createElement('div')
        // newNode.setAttribute('class','top')
        // newNode.textContent = "回到顶部"
        document.body.appendChild(this.target)
    },
    bindEvent: function(){
        var topNode = document.querySelector('.top')
        topNode.addEventListener('click',function (e) {
            console.log(e)
            //获取滚动条距离
            var scrollHeight = window.pageYOffset
            //滚动条有距离就直接设置滚动条的y轴偏移滚动的距离
            if (!(scrollHeight > 0)) {return}
            window.scrollBy(0,-scrollHeight)
        })
    }
}

var topNode = new GoTop()
topNode.createNode()
topNode.bindEvent()