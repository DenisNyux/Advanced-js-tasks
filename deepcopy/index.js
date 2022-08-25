function makeObjectDeepCopy(obj) {
    const clone = {};
    for (let i in obj) {
      if (obj[i] instanceof Object) {
        clone[i] = makeObjectDeepCopy(obj[i]);
      } else {
        clone[i] = obj[i];
      }
    }
    return clone;
  }
  
  
// tests


// let avatar = {
//   name: "image.png",
//   sizes: {
//     height: 182,
//     width: 50
// }
// };

// let avatarRef = avatar;

// let avatar2 = Object.assign({}, avatar);

// let avatar3 = makeObjectDeepCopy(avatar);

// console.log(avatar === avatarRef);
// console.log(avatar === avatar2);
// console.log(avatar === avatar3);

// console.log(avatar.sizes === avatarRef.sizes);
// console.log(avatar.sizes === avatar2.sizes);
// console.log(avatar.sizes === avatar3.sizes);

// Object.assign(users2, users);
  
  // console.log(typeof users2 === "object");
  // console.log(users2);
  // console.log(users2[3] === users[3]);
  // console.log("sas" instanceof Object);
  