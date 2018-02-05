var TemplateEngine = function(html, options) {
    var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}

// var template = 
// 'My skills:' + 
// '<%if(this.showSkills) {%>' +
//     '<%for(var index in this.skills) {%>' + 
//     '<a href="#"><%this.skills[index]%></a>' +
//     '<%}%>' +
// '<%} else {%>' +
//     '<p>none</p>' +
// '<%}%>';
// console.log(TemplateEngine(template, {
//     skills: ["js", "html", "css"],
//     showSkills: true
// }));

window.onload = function () {
    var textArea = document.querySelector('#src')
    console.log(textArea)
    var getResult = document.querySelector('.button-excute')
    var resultArea = document.querySelector('#dest')
    
    
    getResult.addEventListener('click',function () {
        var optionArea = document.querySelector('#option')
        var textAreaContent = textArea.value || 'input'
        var options = JSON.parse(optionArea.value)
        var regex = /\s(?!<.*>)\s/g
        var result = TemplateEngine(textAreaContent,options)
        result = result.replace(regex,function () {
            return arguments[0] = ''
        })
        resultArea.value = result
    })
}