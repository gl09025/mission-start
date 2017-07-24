var ct = document.querySelector('.ct')
var imageView = document.querySelector('.img-preview')

ct.addEventListener('mouseover', function (e) {
    var dataContent = e.target.getAttribute('data-img')
    imageView.innerHTML = ''
    var imgElement = document.createElement('img')
    imgElement.src = dataContent
    imageView.appendChild(imgElement)

})