function friendlyDate(time){
    //获取现在的时间毫秒，与传入的参数计算相差
    let nowTime = Date.now()
    let diffTime = nowTime - time
    //统一从秒到年的时间单位
    let SECOND = 1000
    let MINUTE = SECOND * 60
    let HOUR = MINUTE * 60
    let DAY = HOUR * 24
    let MONTH = DAY * 30
    let YAER = MONTH * 12 
    //直接计算距离现在的每个时间单位，取整
    if (diffTime >= YAER) {
        time = parseInt(diffTime / YAER)
        return time + '年前'
    } else if (diffTime >= MONTH) {
        time = parseInt(diffTime / MONTH)
        return time + '月前'
    } else if (diffTime >= DAY) {
        time = parseInt(diffTime / DAY)
        return time +　'天前'
    } else if (diffTime >= HOUR) {
        time = parseInt(diffTime / HOUR)
        return time + '小时前'
    } else if (diffTime >= MINUTE) {
        time = parseInt(diffTime / MINUTE)
        return time + '分钟前'
    } else if (diffTime >= SECOND) {
        time = parseInt(diffTime / SECOND)
        return time + '秒前'
    }
}

var str = friendlyDate('1500099916341');
var str2 = friendlyDate('1483941245793');
console.log(str, str2);