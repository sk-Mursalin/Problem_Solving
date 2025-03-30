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


// function saveData(success, fail) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     console.log(internetSpeed)
//     if (internetSpeed > 6) {
//         success()
//     }
//     else {
//         fail()
//     }
// }

// saveData(() => {
//     console.log("data 1 is saved")
//     saveData(() => {
//         console.log("data2 is saved")
//     }, () => { console.log("data2 is not saved") })
// }, () => { console.log("data 1 is not saved ") })


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


// const GOOGLE_API_KEY = "AIzaSyCLFUOf_UB-gQVjqVkcnK72daM79-6xrac"
// const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`

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


// const a =[1,2,3,4]

// a.sort(()=> {return})

// console.log(a)

// let str= "h e llo"

// console.log(str.replace(/\s+/g,""));

// let arr= [10, 5, 8, 20, 15];


// const arr = [5,4,8,9,-1,-2,-8]

// let num = 0 ;

// for(let i =0; i<arr.length; i++){
//     if(arr[i] < num){
//         num = arr[i]
//     }
// }

// console.log(num)

// let str = "hello"

// let str2 = (str.indexOf("o"));
// console.log(str2)

// let arr = [1,2,3,9,10,11,12];

// let arr2 = arr.splice(0,4)
// console.log(arr2)
// console.log(arr)

// let a= [1,2,3,4]

// for(let el of a ){
//     console.log(el)
// }

// const input = document.querySelector(".input");

// function fetchData() {
//     console.log("data fetch")
// }

// input.addEventListener("input", () => {
//     betterFunction()
// });


// const debouncing = function (fn, time) {
//     let flag = true
//     return function () {
//         if (flag) {
//             fn()
//             flag = false
//         }
//         setTimeout(() => {
//             flag = true
//         }, time)
//     }
// }

// let betterFunction = debouncing(fetchData, 2000)


// function a(x){
//     return function(y){
//        return function(z){
//         console.log(x*y*z)
//        }
//     }
// }

//    const b = a(5);
//    const c = b(6)
//    c(5)


// let a = {
//     name:"sk",
//     age:23
// }
// const c ={
//     city: "kllata"
// }
// console.log(c.city)
// let b = {...a , ...c}

// async function greet(){

//     throw new Error ("404 not found")


// }

// greet()

// .then((result)=>{
//     console.log(result)
// })
// .catch((er)=>{
//     console.log(er)
// })

// function testFunction() {
//     try {
//         console.log("hello");
//         throw   ("Something went wrong!"); // Execution stops here
//     }
//     catch(er) {
//     console.log(er)
//     }

// }

// testFunction()

// console.log(navigator.geolocation.getCurrentPosition())


// let names = ["Mursalin khan","ibrahima Molla"];
// function a(){
//     for(let i =0; i<names.length; i++ ){
//         names[i]= "sk "+names[i].slice(12)
//     }
//     return names    
// }

// console.log(a())

// let arr= ["mursalin"]

// console.log(arr[0]+" sk")

// console.log({} );

// let a = "5"
// console.log(a = parseInt(a))

// let a = {
//     2:3,
//     5:4
// }

// console.log(a[2])

// const heading = document.querySelector(".heading");

// const btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     heading.style.fontSize = "80px"
// });
// 
// let arr = [3, 3, 4, 2, 3, 3, 3];

// let obj = arr.reduce((acc,curr)=>{
//     if(acc[curr]){
//         acc[curr] = ++acc[curr] 
//     }else{
//         acc[curr] = 1
//     }
//     return acc;
// },{});

// let result = arr.filter((el)=> obj[el] == 5 )
// console.log(obj)
// console.log(result)


// const file = document.querySelector("input");

// file.addEventListener("change", (e) => {
//     console.log(e)
// })

// const a = ()=> ("hello")
// let b= a()
// console.log(b)



// function a(){
//     let x = 5, z=6
//     return function y(){
//         console.log(x,z)
//     }
// }

//  let y = a();
//  y();

// var a = 5;
// var a = 6;

// console.log(a)

// let b = {
//     a:function c(){
//         console.log("hello")
//     }
// }

// b.a()

// let obj = {
//     name:"sk",
//     age:23
// }

// let b  = Object.assign(obj,{city:"klka"})
// b.name= "sks"
// console.log(b)
// console.log(obj)

// function a(){
//     console.log("hi")
// }

// console.log(a.toString())

// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("data is resolve")
//     },2000)
// });


// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("data2 is resolve")
//     },1000)
// });



// function result(){
//     console.log("hello")
//     p.then((data)=>{
//        console.log(data)
//     })



//     p2.then((data)=>{
//        return data

//     })
// }

// console.log(result())

// async function result(){
//     console.log("hell")
//     const res = await p;
//     console.log(res)
//     console.log("byby")
// }

// result()

// function b(){
//     return "hello"
// }


// function a(){
//      return b()
// }

// console.log(a())

// function a(){
//     console.log("hello")
// }

// const res = a()

// console.log(res)

// const person = {
//     firstName: 'Surbhi',
//   };
//   const { lastName="dighe" } = person;
//   console.log(person);



// var  foo = null
// console.log(foo)




// console.log([] == 5)

// function a(){
//     return [1,2]
// }

// const b = new a();

// console.log(b)
// function bark() {
//     name:()=>{
//         console.log("hello")
//     }
//   }

// //   bark.animal = 'dog';
//   bark.b = function(){
//     console.log("hi")
//   }

//   bark.b();

//   let a ="5"
//  a.toString();
//   console.log(typeof a )
//   console.log(bark.toString())

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }

//   const person = 'Lydia';
//   const age = 21;

//   getPersonInfo`${person} is ${age} years old`;


// function a() {
//     x = 2;

//     console.log(x)
// }
// a()

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a)

// console.log(!)

// let arr = [1,2,3]

// let a = arr.map((el)=>{return})
// console.log(a)

// let a ={
//     name:"sk"
// }

// let b ={
//     age:"sks"
// }

// let c = Object.assign(a,b)

// console.log(c)

// const container = document.querySelectorAll("p");
// const elementsArray = Array.from(container);

// console.log(container)


// elementsArray.map((el) => {
//     console.log(el.innerText)
// })

// let arr = [1, 2, 3, 4, -5, -2, -6, -1];

// function abc() {
//     console.log(a);
//     var a = 10;
//     function def() {
//         console.log(a);
//         var a = 15;
//     }
//     def();
// }

// abc()

// const form =document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     const user = this.elements[0].value
//     console.dir(user)
// })

// console.dir(document.all)

// async function a() {
//     return("helo")
// }

// let b = a()
// .then((el)=>console.log(el))

// function a(){
//     let x = 5;
//     let z = 10;

//     return function b(){
//         console.log(x)
//     }

// }

//  const v = a();
//  v()


// function a(param){
//     return (param !== 5 || "hello")
// }

// console.log(a(6))


// function solution() {
//     let array = [];
//     for (let i = 1; i < 1000; i++) {
//         if (i % 3 === 0) {
//             array.push(i)
//         }
//         if (i % 5 === 0) {
//             if (array.indexOf(i)===-1) {
//                 array.push(i)
//             }

//         }
//     }
//     let sum = array.reduce((accm,curr)=>{
//         return accm+curr
//     },0);

//     return sum
   
// }
console.log(solution())

let a = {
    name:"sk Mursalin",
    age : 23
}




// let b = Object.assign(a);
// b.city = "kolkatas"
// console.log(b)
// console.log(a)

// console.log(a===b)

// const numbers = new Set([1, 2, 3, 3, 4, 4, 5]);
// console.log([...numbers])

