var obj = {
    name: "gl",
    sex: "male",
    friend:{
        name: "friend1",
        sex: "female"
    }
}

function deepCopy(obj){
  var newObj = {}
  for (var key in obj){
      if (obj.hasOwnProperty){
        if (typeof obj[key] === 'number' || typeof obj[key] === 'string' || typeof obj[key] === 'boolean'|| obj[key] === null || obj[key] === undefined){
            newObj[key] = obj[key]
        }else {
            newObj[key] = deepCopy(obj[key])
        }
      }
  }
  return newObj
}

var obj2 = deepCopy(obj)
