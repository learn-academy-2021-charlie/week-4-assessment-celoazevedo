// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

fdescribe("removeFirstAndShuffle", () => {
  let colors1 = ["purple", "blue", "green", "yellow", "pink"] // Is declaring the variables inside of the describe method best practice?
  let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

  console.log('checking color1 array before test():' ,colors1)
    // okay... when I declered length1 inside the test it was not giving me the original length of the colors1 array. If I declare outside the test method, it will give me the correct length of the original array. Now we can work with the length of the original array and compare with the length of the new array - 1. it should be equal!
  test("returns an array without the first element and than shuffled", () => {
      
    console.log('color1 array -> after test() before expect():' ,colors1)
      
    expect(removeFirstAndShuffle(colors1)).toContain("yellow", "blue", "pink", "green") // here we are checking if the result array after running through our removeFirstAndShuffle function contains all of the elements from the original array minus the element at index 0. --> .toContain - Jest method - checks if it contains the data that we pass in. In this case we need to pass in the strings without being inside of an array. I think that this is because istead of checking if the result array has the strings, it checks if the result contains an array with the specific array of strings that we pass in. 
    expect(removeFirstAndShuffle(colors1)).not.toEqual(["blue", "green", "yellow", "pink"]) // comparing the result with the original  array without the first element And NOT SHUFFLED. --> passed because the arrays should not be the same -- the result is shuffled -->  used the .not.toEaqual

    expect(removeFirstAndShuffle(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
      
    expect(removeFirstAndShuffle(colors2)).not.toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
      
    console.log('!!!!color1 array:' ,colors1)
      
    expect(colors1.length - 1).toEqual(["yellow", "blue", "pink", "green"].length) //here i am trying to check for the length of the newarray. if the length is equals to the length of the previous array - 1. There will be nothing else that needs to be checked.
    expect(colors2.length - 1).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"].length)
    
  })
})

// !!! -> Every time I was running the test it was invoke the funciton iside of the test method changed the value of the original array (color1). Try to change the funciton! -->> this was happening because I was using .shift() to change the value of the array. I replaced .shift with slice() and assigned the new value to a variale. Than randomized the value in the variable and returned the result.

// b) Create the function that makes the test pass.
// create a function
// use .shift() built in array method to remove the first element in the array !!-- Replaced with .slice() and assigned the result to a variable.
// use .sort(() => Math.random() - 0.5) ---> to shuffle the array
// return the new shorter and shuffled array

const removeFirstAndShuffle = (arr) => {
  // arr.shift()
  let newArr = arr.slice(1)
  // console.log(newArr)
  console.log(newArr.sort(() => Math.random() - 0.5))
  return newArr.sort(() => Math.random() - 0.5)
}

// the function is working but I still need to check if the length of the array that we are returning is equal to the length of the original array - 1 (since we remove the first element).
// we already checked if the result would be equal to the original array minus the first element. --> and it will NOT be equal... --> checked using the - .not.toEqual

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
  let nums1 = [3, 56, 90, -8, 0, 23, 6]
  let nums2 = [109, 5, 9, 67, 8, 24]
  test("returns an array with the lower value and highest value elements", () => {
    expect(minAndMax(nums1)).toEqual([-8, 90])
    expect(minAndMax(nums2)).toEqual([5, 109])
  })
})
  

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.
// create a function
// declare a empty array to push max and min values
// use the .min and .max from the Math object to get the max and min values from the array
// !!-- alternative: we could sort the array and grab (push to a new array) the first and last elements of the sorted array. but I think the spread operator is pretty cool... - not sure if there are any pitfalls here but the test is passing.😵‍💫
// return the newArr

const minAndMax = (arr) => {
  let newArr = []
  // here we used the spread operator -- it allows the built in methods to check all of the elements in the array -- 'almost like iterating and eveluating each element of the array'
  newArr.push(Math.min(...arr), Math.max(...arr))
  return newArr
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// fdescribe() --> very cool so that we can just focused in the last test. Skiped the first two!
describe("concatArraysNoDups", () => {
  let testArray1 = [3, 7, 10, 5, 4, 3, 3]
  let testArray2 = [7, 8, 2, 3, 1, 5, 4]
  let testArray3 = [7, 8, 2, 3, 19, 11, 4]
  test("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    // expect(concatArraysNoDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    expect(concatArrUniqueVals(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    expect(concatArrUniqueVals(testArray1, testArray2, testArray3)).toEqual([3, 7, 10, 5, 4, 8, 2, 1, 19, 11])
  })
})

// var testArray1 = [3, 7, 10, 5, 4, 3, 3]
// var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.
// create a function that takes 2 arguments
// declare a variable to store the concatenation of the two arrays --> use .concat()
// use new ES6 syntax to return an array from the (selection of only unique elements done by using the 'new Set()' es6 syntax) --- the test passed. Please let me know if there are any pitfalls by using this syntax.

// const concatArraysNoDups = (arr1, arr2) => {
//   let concArr = arr1.concat(arr2)
//   return Array.from(new Set(concArr))
// }

// using the spread operator
const concatArrUniqueVals = (...args) => {
  let concArr = [].concat(...args)
  console.log(concArr)
  return Array.from(new Set(concArr))
}