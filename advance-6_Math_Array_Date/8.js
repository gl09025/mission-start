var str = getChIntv("2017-10-1");
console.log(str);  

function getChIntv(timeString){
  //将时间都转换成毫秒
   let now = Date.now()
  let time = new Date(timeString).getTime()
  //相差的毫秒
  let diffTime = time - now
  //先算有多少天，取模之后算小时，再取模算分，最后取模算秒
  let day = Math.floor(diffTime/(3600*24*1000)) 
   diffTime= diffTime % (3600*24*1000) ;
  let hour = Math.floor(diffTime/(3600*1000))
   diffTime= diffTime % (3600*1000) ;
  let minute = Math.floor(diffTime/(60*1000))
   diffTime= diffTime % (60*1000) ;
  let second = Math.floor(diffTime / 1000)
  return '距离十一还有： ' + day +'天'+hour+'时'+ minute+'分'+ second +'秒'
}