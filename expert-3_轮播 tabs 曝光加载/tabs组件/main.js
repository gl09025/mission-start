let Tabs = function (element) {
    this.element = element
    this.init()
    this.bind()
}

Tabs.prototype = {
    init: function () {
        this.tabs = this.element.querySelectorAll('.nav>li')
        this.contents = this.element.querySelectorAll('.panes>li')
    },
    bind: function () {
        let _this = this
        //给每个li添加事件
        this.tabs.forEach(tabs => {
            tabs.onclick = function (e) {
                var target = e.target
                var index = [].indexOf.call(_this.tabs, target)
                //移除所有active，并给当前点击目标添加active
                _this.tabs.forEach(li => {
                    li.classList.remove('active')
                })
                target.classList.add('active')
                //找到下面对应内容，移除active，添加active
                _this.contents.forEach(content => {
                    content.classList.remove('active')
                })
                _this.contents[index].classList.add('active')
            }
        })
    }
}


var tab1 = new Tabs(document.querySelectorAll('.tabs')[0])
var tab2 = new Tabs(document.querySelectorAll('.tabs')[1])