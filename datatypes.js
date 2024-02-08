// their are 2 types of data types 
// primitive nd non-primitive(reference)

// primitive datatype - 7 types of datatypes
// Number , string , Bigint , boolean, null, undefined, symbol

//  print every aspects
 const num = 10 // number
console.log(num)

 const nm= "Pratik" // string
 console.log(nm)

 const state = true //boolean
console.log(true)
 
 const date= 12 // bigint
 console.log(date)

 const earning = null // null
 console.log(earning)

 const setup = undefined // undefined
 console.log(setup)

 const id = Symbol("2002") // symbol
 console.log(id)

//  non-primitive datatypes (refernce)
// Object, array, functions

// array implementation
const arr=["Marvel","DC","Warner&Bros","Hombale","Pixel"]
console.log(arr);

arr.map((abc) =>{
    console.log(abc);
 });    


// console.log(names);
   


// let a = 10;

// for(var j=1; j<2; j++)
// {
//     var i =20
//     console.log(j)
//     console.log(i)

// }

// console.log(i)

// functions execution 
const myfunction = function() {
    let a =10
    let b =20
     return a + b
    
}
console.log(myfunction());

function demo(){
    price = 10;
    user  = "swap"
    console.log(` the user is ${user} and the price is ${price}`);
}
demo()

function demo2(){
    let user = "Admin"
    console.log(`The JS is in Learning Phase by me which means ${user}`)

}
demo2()


// Object execution

let obj = {
    num1:'1,2,3', num2:'4,5,6', num3:'7,8,9'
}
 console.log(obj)

 const objs=["Marvel","DC","Warner&Bros","Hombale","Pixel"]
 objs.map((x)=> {
    console.log(x)
 })


