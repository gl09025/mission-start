function ucFirst(string){ 
    return string.charAt(0).toUpperCase()+ string.slice(1)
}

console.log(ucFirst("hunger") == "Hunger")