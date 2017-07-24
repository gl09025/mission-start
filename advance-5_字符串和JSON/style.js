var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装','冬装']
};
function getTplStr(data){
  var name = data.name
  var styleArray = data["styles"]
  var totalStr , str = '';
   styleArray.filter(function(e){
    return str += '<dd>'+ e +'</dd>'
  })
  totalStr = '<dl class="product">'+'<dt>'+ name+'</dt>'+ str +'</dl>'
  return totalStr
};
var result = getTplStr(prod);
console.log(result)