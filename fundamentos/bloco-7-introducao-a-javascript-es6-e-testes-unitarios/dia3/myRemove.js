function myRemove (array,item) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if(item !== array[index])
      newArray.push(array[index]);
  }
  return newArray;
}
module.exports = myRemove;