
//  let a=6;
// if(a==5){
//     console.log("pass");
//     if(a>4){
//         console.log("i am");
//     }
//     else{
//         console.log("hello")
//     }
// }else{
//     console.log("fail")
// }

// const heading= document.querySelector(".heading");

// const btn = document.querySelector("#btn");

// const arr = ["hello","i am ","murslain"];
// let index = null;

// btn.addEventListener("click",()=>{
//     heading.innerText = arr[index];
//     console.log(index)
//     index < arr.length-1?index++:index = 0;

// })
// function a(){

//      x = 10;

//      console.log(x)
// }
// a()


//  function a(){
//      return ("hello")
//  }

//  let b = a
//   console.log(b())

// function b(){
//     return  "hi"
// }

// function c(fn){
//     return fn;
// }

// let x = c("ello");
// x()

// let a = setTimeout(()=>{
//     console.log("helo")
// },300)

// let input = document.querySelector(".input");

// input.addEventListener("keyup", (e) => {
//     betterFunction()
// })
// let counter = 0;

// function getdata() {
//     console.log("fetch data...", counter++)
// }
// let dosomeMagic = function (fn, d) {
//     let timer;
//     return function () {

//         console.log(timer)
//         clearTimeout(timer)
//       timer =  setTimeout(() => {
//             fn();
//         }, d)
//     }
// }

// let betterFunction = dosomeMagic(getdata, 300);

// let a = {
//     name:"sk"
// }



// let d = ()=> { return a.name}

// console.log(d())
// let a = 5
//  setTimeout(()=> console.log(a),2000)


// const b=()=>(a)
// console.log(b())

// let arr1 = [1,2,3]
// let arr2= [4,5,6]

//  let a = arr1.concat(arr2)
// console.log(a)
// console.log(arr1)
// console.log(arr2)

// let obj1 = {
//     dk: "sk"
// }
// let obj2 = {
//     name: "sks"
// }

// // let obj3 = {...obj1,...obj2}
// // console.log(obj3)

// let obj3 =Object.assign(obj1,obj2)
// console.log(obj3)
// let b= 5;
// let a = ()=> (b)


// console.log(a)

// function b(c){
//      return c()
// }

//  let d = b(()=>{return "hello"});
// console.log(d)

// let a = "5.3"
// a = parseInt(a)
// console.log(a)


// let b  = Number(a);
//  console.log(typeof(b))

// let arr  = [1,2,3] 

// function a(){
//     console.log(arguments)
// }

// a(...arr)

// let a = 5

// function b(){
//     if(a == 4){
//         return "hello"
//     }

//     console.log("djjd")
// }

// const heading = document.querySelector(".heading");

// function changeColor(colour, delay) {
//     return new Promise((reso,rej)=>{
//         setTimeout(() => {
//             heading.style.color = colour;
//             reso("color is changed");
//         }, delay);
//     })
// }

// changeColor("red", 1000, () => {
//     changeColor("yellow", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("purple", 1000, () => {
//                 changeColor("pink", 1000, () => {
//                     changeColor("blueviolet", 1000, () => {
//                         changeColor("blue", 1000, () => {
//                             changeColor("aqua", 1000, () => {
//                                 changeColor("coral", 1000, () => {
//                                     changeColor("cyan", 1000, () => {
//                                         changeColor("brown", 1000, () => {
//                                             changeColor("darkred", 1000, () => {
//                                                 changeColor("yellowgreen", 1000)
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// changeColor("red",1000)
// .then((res)=>{
//     console.log(res)
//      return changeColor("yellow",1000)
// })
// .then((res)=>{
//     console.log(res);
//     return changeColor("pink",1000);
// })

//  async function nextColor(){
//     await changeColor("red",1000)
//     await changeColor("yellow",1000)
//     await changeColor("brown",1000)
// }

// nextColor()


// function saveData(success,fail){
//     let internetSpeed  = Math.floor(Math.random()*10)+1;
//     console.log(internetSpeed)
//     if(internetSpeed>6){
//         success()
//     }
//     else{
//         fail()
//     }
// }

// saveData(()=>{console.log("data 1 is saved")
//     saveData(()=>{
//         console.log("data2 is saved")
//     },()=>{console.log("data2 is not saved")})
// },()=>{console.log("data 1 is not saved ")})


// function closure(){
//     let x=5;
//     let z= 6;
//     return function b (){
//         console.log(x)
//     }
// }

// let take = closure()
// take()

// async function name() {
//     console.log("hello")
// }
// console.log(name())


// let a = function b(){
//     console.log("hello")
// }

// a()

// let c= 5
// function a(d){
//    return d()
// }

//  let x = a(()=>(c));
// console .log(x)

// let firstName ="mursalin";
// let age = 23;
// let isAdult  = false;


// let {2:a}= [1,2,3]
//  console.log(a)

// function a(age){
//      age = 50
//     console.log(age)
// }
// a(15)

// let a  = {
//     name:"sk",
//     age:23
// }

// let b = {}
// Object.assign(b,a)

// b.name= "mur"

// console.log(b)
// console.log(a)

// let arr1 = [1,2,3]

// let arr2=arr1.slice(0)
// arr2.push(5)
// console.log(arr2)
// console.log(arr1)

// let arr = []

// if(arr===false){
//     console.log("hi")
// }
// else{
//     console.log("by")
// }

// let arr = []

// arr.pop();

// const b = (e)=>{
//     console.log(e)
// }

// const obj = {
//     name:"djdj",
//     data : function (){
//         b("hello")
//     }
// }

// obj.data()

// let arr= [1,2,3,4];

// let result = arr.reduce((acc,curr)=>{
//     return acc+curr
// },0)

// console.log(result)

// function b(){
//     console.log("hi")
// }

// let c = "djdjd"
// let obj = {
//     3:"hello",
//     b,
//     c
// }

// console.log(obj[3])
//  console.log(2=="2")

// let a = {
//     name:"sk"
// }
// a.age = 23
// console.log(a)
// let input = document.querySelector("input")
// input.addEventListener("input",(e)=>{console.log(input.value)})

// let a = {}
// console.log(a)
// let b = {
//     name:["sk","mursalin"]
// }

//  a = Object.assign(a,b);

//  console.log(a)
// let c = {
//     name2:["ibrahim","molla"]
// }

// a = Object.assign(a,c)

// console.log(a)

// let a = 1;

// let b =++a + a++
// console.log(b,a)


// function b(){
//     if(""){
//         return "hi"
//     }
//     console

// }

// console.log(b());


// function a(x=5,y){
//     console.log(x*y)
// }
// a(8)

// function a(x,y){
//     console.log(x*y)
//      x = 5;
//      y = 8
//     console.log(x*y)
// }

// a(2,4);

// let multiply = function(x,y){
//     console.log(x*y)
// }



// let multipleTwo = multiply.bind(undefined,2,5);

// multipleTwo(4)


// let obj = {
//     name:"mursalin"
// }

// function printName(){
//     console.log(this)
// }

//  let b = printName.bind(2);
//  b()


//  function v(){
//     console.log(this)
//  }

//  window.v()

//  function d(f=5,g=8){
//     console.log(f,g)
//  }

//  d(4,2)

// function fetchData(){
//     console.log("data fetch")
// }
// function a(b,timer){
//     return function(){
//         setInterval(()=>{
//             b()
//         },timer)
//     }

// }
// const thortt = a(fetchData,5000);

// const head = document.querySelector(".heading");
// head.addEventListener("click",()=>{
//     thortt()
// })

// let arr = [1,2]

// function b(arra){
//     arra.length  = 0
// }
// b(arr)

// console.log(arr)

// let arr=[2,3,5,8];

//  let res = arr.every((el)=>{
//      return el%2 == 0
// });
//  console.log(res)


// head.onclick = function(){
//   console.log("hello")
// }



// head.onclick = function(e){
//     console.log(e)
//     console.log("by")
//   }


// head.addEventListener("click",()=>{
//     console.log("helo")
// })

// head.addEventListener("click",()=>{
//     console.log("by")
// })

// function closure(){
//     let a = 5;
//     let z = 7;
//      return function d(){
//         console.log(a)
//     }
// }

// let x = closure();
// x()


// var x = 8
// let  x = 5
// let x = 5;
// var x = 9

// function handleclick(event){
//     console.log(event)
// }
//  head.onclick = handleclick


// let a = {
//     name:"",
//     pass:"",
//     name:"djdjd"
// }
// console.log(Object.name)
// a ={
//     ...a
// }

// console.log(a);

// function b(){
//     return new Promise((res,rej)=>{

//     })
// }

// console.log(b())




// console.log("hell");

// let arr = [1,2,3,6,8,7]

// let c = arr.slice(2,4)

// console.log(arr)
// console.log(c)

// let arr = [1,2,3]
// arr[4] = 5
// console.log(arr[3])





// let arr = [1,2,3]
// function b(){
//     console.log(arguments)
// }

// b(...arr);
const GOOGLE_API_KEY = "AIzaSyCLFUOf_UB-gQVjqVkcnK72daM79-6xrac"
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLfEr2kn3s-bpXj_TMONjRwasyjiFgEwj0&key=${GOOGLE_API_KEY}`

// async function fetchData(){
//     let response = await fetch(url);
//     console.log(response);
//     let result  = await response.json()
//     console.log(result)
// }

// fetchData()

// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3

// const div = document.querySelectorAll(".div");
// console.log(div)

// div.forEach((el)=>{
//     console.log(el.children[0])
// })

// let a = 6;

// console.log(a++)
// console.log(++a)

// let a = 5;
// let b = 6;
// let c = 8;
// let f = 7
// let z = 100

// if((a ==5 &&b==6 || c==8&& f==2)||(z==200)){console.log("hello")}

// let arr = [1,2,3,4,5]

// let arr2 = arr.slice(0,2)
// console.log(arr2,arr)

// let a = [1,2,3,4,5]
// console.log(a.splice(3,1,10))
// console.log(a)

// let c = a.map((el)=>{
//     return ; 
// })
// console.log(c)

// let arr = [1,2,3,4,5]

// let arr2 = arr.slice(0,2)
// console.log(arr2,arr)

// let a = [1,2,3,4,5]
// console.log(a.splice(3,1,10))
// console.log(a)

// let c = a.map((el)=>{
//     return ; 
// })
// console.log(c)

// let arr = [1,2,3,4,5]

// let arr2 = arr.slice(0,2)
// console.log(arr2,arr)

// let a = [1,2,3,4,5]
// console.log(a.splice(3,1,10))
// console.log(a)

// let c = a.map((el)=>{
//     return ; 
// })
// console.log(c)

// let obj= {
//     "my-name":"sk"
// }

// console.log(obj["my-name"])
// a()
// var a = function(){
//     console.log("hello")
// }
// function a(){
//     console.log(b)
//     let b = 5
// }
// a()



// function b(c){
//     return c()
// }

// let a = b(()=> 5)

// console.log(a)


// function b(c){
//     return c()
// }

// let a = b(()=> 5)

// console.log(a)

// function b(c){
//     return c()
// }

// let a = b(()=> 5)

// console.log(a)

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY

// async function dataFetch( a,page){
//     const response =  await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${a}&pageToken=${page}&q=islamic&type=video&key=${GOOGLE_API_KEY}`)

//     const result  =  await response.json()
//     console.log(result);
//     return result.nextPageToken
// }
// let a = 20;
//   async function d(){
//     const page= await dataFetch(a,"CBQQAA");
//     return page 
//  }


// window.addEventListener("scrollend",()=>{
//     a +=40;
//    dataFetch()
// })

// window.onscrollend = ()=>{
//   let b = 40
//     console.log(a)
//     dataFetch(b)

// }



// let arr = [1,2,3,4,10,20]
// let arr2 = arr.filter((el)=>el%2 == 0)
// console.log(arr2)

// let d = (c)=>{
//     let b = c.join(",");
//     console.log(b)
// }
// d(arr2)

// let a = "hi    i am sk sani";

// let b = a.replace(/\s+/g,"/")
// console.log(b)

// console.log( new URLSearchParams)

// let flag = true;

// function a(){
//     console.log("hello")
//     flag = false
//     setTimeout(()=>{
//         flag = true
//         console.log(flag)
//     },500)
// }

// if(flag){
//     console.log(flag)
//     a();
// }

// console.log(flag)



// let a = "sk mursalin";

// let b = {
//     name:"sk"
// }

// let b = document.querySelector(".heading");

// function a(){
//     b.style.color = "red"
// }

// a()

// let a = "mursalin"
// let b = null

// function a(c){
//     return function(b){
//         console.log(c*b)
//     }
// }

// console.log(a(5)(2));

// const  handleSubmit = (e)=>{
//     console.log(e)
// }

// let a = [
//     {
//         name:"skk"
//     }
// ]

// let c = {
//     age:23
// }

// let b = [ ...a,{...c,id:56565}]

// console.log(b)

// let arr = [2,6,8,9,7];

// for(const a of arr){
//     console.log(a)
// }

// let a = {
//     name:"sk",
//     city:"kolkata"
// }

// head.addEventListener("click",()=>{
//     const b ={...a,city:"mumbai"}
//     console.log(b)
// })

// let a = [1,2,3];
// console.log(...a)
// function b(...num){
//     console.log(num)
//     console.log(arguments)
// }

// b(...a)

// let a = {
//     l : 2,
//     m : 3,
//     c : 4 
// }

// console.log(Array.from(a))

// let arr = Object.keys(a);
// console.log(arr);

// let name  = "leetcode"
// let array = [...name];

// let obj = array.reduce((accm,el)=>{

//     if(accm[el]){
//         accm[el] = ++accm[el]
//     }else{
//         accm[el] = 1
//     }

//     return accm
// },{})

// let c= array.filter((el)=> obj[el] === 1);
// console.log(array.indexOf(c[0]))


//     function a(b,c){
//          b = 2
//          c = 4
//         console.log(arguments)
//     }

//    a(4,5)


// let a = {
//     name:"sk",
//     age:23
// }

// let b = {}

// Object.assign(b,a)

// console.log(b===a)



// let b = Object.assign(a)
// b.city= "kolkata"
// console.log(b)
// console.log(a)

// let b = Array.from("name")
// console.log(b)

// let reduxState = {
//     post: 0,
//     name: "sk Mursalin",
//     age: 23
// }

// function reducer(state, action) {
//     if (action.type === "post/increment") {
//         return { ...state, post: state.post + 1 }
//     }
//     else if (action.type === "post/decrement") {
//         return { ...state, post: state.post - 1 }
//     }
//     else if (action.type == "post/incrementBy") {
//         return { ...state, post: state.post + action.payLoad }
//     }
//     return state
// }

// reduxState = reducer(reduxState, { type: "post/increment" })
// console.log(reduxState)
// reduxState = reducer(reduxState, { type: "post/decrement" })
// console.log(reduxState)
// reduxState = reducer(reduxState, { type: "post/incrementBy", payLoad: 10 });
// console.log(reduxState)


// let arr1 = [1,5,7]
// let arr2 = [2, 3, 4,6]

// let i = 0;

// for(; i<arr1.length && i< arr2.length; ){
//     console.log(arr1[i++]);
    
 
// }

// console.log(document.documentElement.scrollHeight)
// console.log(window.innerHeight)

// let obj = {
//     name:"mursalin",
//     age:23
// }

// console.log(Object.entries(obj))
// Object.entries(obj).forEach(([key,value])=>{
//     console.log(key)
   

// })


// Object.keys(obj).forEach((key)=>{
//     console.log(obj[key])
// })


// const text = "JavaScript is awesome";

// function result(text){
// //    let updatedArray = [];
//    let result = ""
//    const array = text.split(" ");

//    for(let i = 0; i<array.length; i++){
//     if(array[i].length > result.length){
//         result = array[i]
//     }
//    }
//    return result
   
// }

// console.log(result(text))


// document.querySelector(".heading").addEventListener("click",(e)=>{console.log(e)})

// let arr = [1,2,3,4,5]


//  setexpance(arr.filter((el)=> el !==5));



// let arr = [1,2,3,4,5,6]

// let result = arr.find((el)=> el>4)

// console.log(result)

