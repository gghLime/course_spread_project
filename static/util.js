//取倒计时（时分秒）
function getTimeLeft(endTime) {
  // 计算目标与现在时间差（毫秒）
  var currentTime = Date.parse(new Date()); 
  let rest = endTime - currentTime;

  // 将时间差（毫秒）格式为：时分秒
  let hours = parseInt((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = parseInt((rest % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((rest % (1000 * 60)) / 1000);

  if (hours < 10){
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return hours + ":" + minutes + ":" + seconds
}

export {
  getTimeLeft
}