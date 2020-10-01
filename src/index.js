
exports.min = function min(array) {
  if (!array || array.length == 0) return 0;
  
  let min = 0;
  array.forEach(number => {
    if (number < min) min = number;
  });
  
  return min;
}

exports.max = function max(array) {
  if (!array || array.length == 0) return 0;
  
  let max = 0;
  array.forEach(number => {
    if (number > max) max = number;
  });
  
  return max;
}

exports.avg = function avg(array) {
  if (!array || array.length == 0) return 0;

  let sum = array.reduce((acc, num) => {
    acc += num;
    return acc;
  });

  return sum / array.length;
}
