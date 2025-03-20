const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Find arr[-2]

// 10 + (-2)  = 8

function negativeIndexArray() {

  return new Proxy(arr, {

    get(target, property) {
      let index = Number(property)
      if (index < 0) {
        return target[arr.length + index];
      }
      return target[index];
    },

    set(target, property, value) {
      let index = Number(property);

      if (index < 0) {
        target[arr.length + index] = value;
      } else {
        target[index] = value
      }

      return true;
    }
  })
}

const newArr = negativeIndexArray();

console.log(newArr[-1]);


newArr[-2] = 22;

console.log(newArr);
console.log(arr);
