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
    arry[index] % 2 ===1 ? "odd":"even";
  }

}

function changeNextThreeToValue() {

}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}