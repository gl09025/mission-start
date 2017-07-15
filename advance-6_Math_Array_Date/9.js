var str = getChsDate('2015-11-08');
console.log(str);  // 二零一五年一月八日



function getChsDate(string) {
    //变成数组 ["2015", "10", "08"]
    let newArray = string.split('-')
    let resultString = ''
    //存储数字对应的汉字
    let translateObject = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
    }

    let yearString = '',monthString = '' ,dayString = ''

    for (let index = 0; index < newArray.length; index++) {
        //再再分割数组每一项，将数字转换成汉字
        let insideArray = newArray[index].split('')
        //处理年
        if (index === 0) {
            for (let j = 0; j < insideArray.length; j++) {
                yearString += translateObject[insideArray[j]]
            }    
        } else if (index === 1) {//处理月
                //调用函数处理大于10，小于10，等于10的不同输出
                monthString = xxx(insideArray)
        } else {//处理日
            dayString = xxx(insideArray)
        }
    }
//等于10就返回‘十’，大于10就返回‘十’加上个位的数
    function xxx(insideArray) {
        let insideResultString = ''
        if (insideArray[0] === '0') {
            insideResultString = translateObject[insideArray[1]]
        } else if (insideArray[1] === '0') {
            insideResultString = '十'
        } else {
            insideResultString = '十' + translateObject[insideArray[1]]
        }
        return insideResultString
    }
   

    resultString = yearString + '年' + monthString + '月' + dayString + '日'
    return resultString
}

//better than me
function getChsDate(str) {
	var dist = ["零","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十","三十一"];
	var arr = str.split('-');
	var year = arr[0];
	var month = arr[1];
	var day = arr[2];

    var Chyear = dist[parseInt(year[0])] + dist[parseInt(year[1])] + dist[parseInt(year[2])] +dist[parseInt(year[3])] + '年';
var Chmonth = dist[parseInt(month)] + '月';
var Chday = dist[parseInt(day)] + '日';
return Chyear + Chmonth + Chday ;
}
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日