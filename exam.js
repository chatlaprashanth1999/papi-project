//merge two arrays
// let one = [1, 2, 3, 4]
// let two = [2, 4, 6, 8]
// let three = one.concat(two)
// console.log(three)

//2copywithin()

// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));

//3 output of the code
// 
// let pushTest=[1,2,,3]
// console.log(pushTest.push(1));

//6 print even number only from the array
// let r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function names() {
//     for (let name of r) {
//         return p = r.filter(n => n % 2 == 0)
//     }
// }
// console.log(names())  // o/p:[2,4,6,8,10]


//7 remove given element from array
// let removeTest = [1, 2, 3, 4]
// function removeElementByvalue(value) {
//     let z = []
//     for (i = 0; i < removeTest.length; i++) {
//         let y = removeTest[i]
//         if (value != y) {
//             z.push(y);
//         }
//     } return z
// }
// console.log(removeElementByvalue(4));
// console.log(removeElementByvalue(2));  
// console.log(removeElementByvalue());
// //o/p=[1,2,3]
// [1,3,4]
//[1,2,3,4]

//8 
// let deleteObject = { name: 'codexbox', year: 2022, startAt: '9:30Am' }
// delete deleteObject.name
// console.log(deleteObject)
// deleteObject.address = "kamareddy"
// console.log(deleteObject)
// for (let i in deleteObject) {
//     console.log(deleteObject[i])
// }

//9remove element from end
// x = [1, 2, 3, 4, 5, 6]
// function name(x, b, end = true) {
//     if (end) {
//         x.shift(b)
//     }
//     else {
//         x.pop(b)
//     }
//     return x
// }
// console.log(name(x, 2, false))

// 10 remove element from start
// x = [1, 2, 3, 4, 5, 6]
// function name(x, b, end = false) {
//     if (end) {
//         x.shift(b)
//     }
//     else {
//         x.pop(b)
//     }
//     return x
// }
// console.log(name(x, 2, true))

//12 replace
// let sayhello = "Hello world"
// chintu = sayhello.replace("Hello", "india")
// console.log(chintu)

// 13print all the aelements of the array
// let chintu = [1, 2, 3, 4, 6, 7, 8, 9]
// console.log(chintu)


//14 multifly all the elements of the array
// let r = [1, 2, 3, 4, 5]
// function mul() {
//     let mul = 1;
//     for (let i of r) {
//         mul = mul * i;
//     }
//     return mul;

// }
// console.log(mul())

//15 callback

function sum(p, r, callback) {
    console.log(p + r);
    callback();
}
function mul() {
    console.log("king kohli")
}
sum(6, 9, mul)