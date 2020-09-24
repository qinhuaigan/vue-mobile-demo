// 防抖
export function debounce(fn, delay) {
  var delay = delay || 300;
  var timer;
  return function() {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}
// 节流
export function _throttle(fn, interval) {
  var last;
  var timer;
  var interval = interval || 300;
  return function() {
    var th = this;
    var args = arguments;
    var now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        fn.apply(th, args);
      }, interval);
    } else {
      last = now;
      fn.apply(th, args);
    }
  }
}

export function arabia_to_simplifiedChinese(num) {
  var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  var chnUnitSection = ["", "万", "亿", "万亿", "亿亿"];
  var chnUnitChar = ["", "十", "百", "千"];

  function sectionToChinese(section) {
    var strIns = '';
    var chnStr = '';
    var unitPos = 0;
    var zero = true;
    while (section > 0) {
      var v = section % 10;
      if (v === 0) {
        if (!zero) {
          zero = true;
          chnStr = chnNumChar[v] + chnStr;
        }
      } else {
        zero = false;
        strIns = chnNumChar[v];
        strIns += chnUnitChar[unitPos];
        chnStr = strIns + chnStr;
      }
      unitPos++;
      section = Math.floor(section / 10);
    }
    return chnStr;
  }

  function numberToChinese(num) {
    var unitPos = 0;
    var strIns = '';
    var  chnStr = '';
    var needZero = false;

    if (num === 0) {
      return chnNumChar[0];
    }

    while (num > 0) {
      var section = num % 10000;
      if (needZero) {
        chnStr = chnNumChar[0] + chnStr;
      }
      strIns = sectionToChinese(section);
      strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
      chnStr = strIns + chnStr;
      needZero = (section < 1000) && (section > 0);
      num = Math.floor(num / 10000);
      unitPos++;
    }
    return chnStr;
  }
  return numberToChinese(num);
}
