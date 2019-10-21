function changeLast(arry,num) {
  arry[arry.length -1] = num

}

function addMeToEnd(arry) {
  arry.push('Colin')

}

function addMeToStart(arry) {
  arry.unshift('Colin')

}

function changeAllValuesTo(arry,num) {
  index = 0 
  while (index < arry.length){
    arry[index] = num
  }

  index +=1
}

 function oddOrEven(arry) {
   let index = 0 
   while (index < arry.length){
    if (arry[index] % 2 === 1){arry[index] = 'odd'}
      else {arry[index] = 'even'}
  
    index += 1
  }

 }

function changeNextThreeToValue(arry,num,start) {
  let index = start;
  let count = 0;

  while(i < arry.length && count < 3) {
    arry[index] = num;
    count++;
    index++;
  }

}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}