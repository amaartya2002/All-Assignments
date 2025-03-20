const user = {
  firstName: "Amartya",
  lastName: "Kumar",
  age: 22
}

user.age = -10;

const proxyUser = new Proxy(user, {
  get(target, property) {

    if (property in target)
      // return target[property];
      return Reflect.get(target, property);
    else
      return 'This property does not exists'
  },

  set(target, property, value) {


    if (!(property in target)) throw new Error('This property does not exists!!!')

    switch (property) {
      case "firstName":
      case "lastName":
        if ((typeof value || typeof value) !== 'string') throw new Error(`Invalid data type for ${property}`)
        //else Reflect.set(target, property, value);
        break;

      case "age":

        if (typeof value !== 'number') throw new Error(`${property} is not a valid data type`)

        if (value <= 0) throw new Error(`${property} cant be a zero value`)

        //else target[property] = value;

        break;


    }

    Reflect.set(target, property, value);
  }
})

proxyUser.age = 10

//console.log(proxyUser.age);


const myArr = [1, [2.1, 2.2], 3, 4, 5, 6]

const changedArr = [...myArr]


console.log(myArr);
console.log(changedArr);



console.log(myArr[1]);
console.log(changedArr[1]);

changedArr[1] = 2;

console.log(myArr[1]);
console.log(changedArr[1]);

console.log(myArr);
console.log(changedArr);



