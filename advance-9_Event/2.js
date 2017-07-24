var startBtn = document.getElementById('btn-add-start')
var endBtn = document.getElementById('btn-add-end')
var cunstomContent = document.querySelector('.ipt-add-content')
var ct = document.querySelector('.ct')

startBtn.addEventListener('click', function (e) {
    //创建li元素，获取input中的值赋值给li，再将li插入相应位置
    var li = document.createElement('li')
    var inputText = cunstomContent.value
    if (inputText) {
        li.innerText = inputText
        ct.prepend(li)
        console.log(cunstomContent.value)
    } else {
        alert('不要输入空字符串')
    }
})
endBtn.addEventListener('click', function (e) {
    var li = document.createElement('li')
    var inputText = cunstomContent.value
    if (inputText) {
        li.innerText = cunstomContent.value
        ct.appendChild(li)
        console.log(cunstomContent.value)
    } else {
        alert('不要输入空字符串')
    }
})