// let userName = prompt("Tell me your name")

// let users = [{name:"jonh",surname:'Tire'},{name:"reerd",surname:'er'},{name:"resa",surname:'Tre'}]








///// Регулярыне выражения

// let regExp  = new RegExp('s','gi')


// let regExp = /s/gi

// console.log(userName.match(regExp))





let phoneInput = document.querySelector('.phoneInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('#result')
// let regExp = /\w/g


let regExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/ig



// console.log(userName.replace(regExp,'*'))
phoneButton.addEventListener('click',() => {
  if(regExp.test(phoneInput.value)){
    result.innerText = 'Success'
    result.style.color  = 'green'
    alert('success')
  }else {
    result.innerText = 'Failed'
    result.style.color = 'red'
    alert('error')
  }
})

let inpInn = document.querySelector('#Inn')
let CheckInn = document.querySelector('.checkInn')
let checkR = document.querySelector('#CheckResult')


let inn = /^[0-2]\d{13}$/ig

CheckInn.addEventListener('click',() => {
  if(inn.test(inpInn.value)){
    checkR.innerText = 'Success'
    checkR.style.color  = 'green'
  }else {
    checkR.innerText = 'Failed'
    checkR.style.color = 'red'
    alert('error')
  }
  // inn.test(inpInn.value)?alert('success'):alert('error')
})

/// recursion 1 


// let num = 0;
//
// for(let i = 0; i<30;i++) {
//   num++
//   console.log(num);
// }



// let num = 0;
// const addNum = () => {
//   num++
//   console.log(num);
//   if(num >= 30){
//     return
//   }else{
//     addNum()
//   }
// }
// addNum()

// const  h1node= document.querySelector('h1')
// function adNum(){
//   num++
//   // console.log(num)
//   h1node.innerText = h1node.innerText+ num
// if(num!==30){
//   adNum()
// }
//
// }
// adNum()



/// recutsion 2


// let num = 0;
// let field  = ''
//
// const addNum = () => {
//   num++
//   field += `${num}`
//   console.log(field);
//   if(num >= 50) return
//   addNum()
// }



// addNum()




// const people = {
//   "John": {
//     age:20,
//     parents: {
//       'Anna':{
//         age: 45,
//         parents: {
//           "Fred": {
//             age: 80
//           },
//           'Marry': {
//             age: 78
//           }
//         }
//       },
//       "Alex":{
//         age: 46
//       }
//     }
//   },
//   "Sam": {
//   age: 25,
//   parents: {
//     "Susan": {
//       age: 50
//     },
//     "Stepan": {
//       age:52,
//
//     }
//   }
//   }
// }

// const personList = (obj) => {
//   for(let key in obj.parents){
//       personList(obj.parents[key])
//   }
// }




// people["John"]
// for(let key in people){
//   personList(people[key])
// }
// let  rand = Math.floor(Math.random()*10)
// console.log(rand)
// function Ugadai(a){
//   if(Number(a)===rand){
//     alert("pravilno")
//   }else {
//     alert('Error')
//   }
// }
//
// const game = document.querySelector('#game')
// game.addEventListener('click',()=>{
//   Ugadai(phoneInput.value)
// })






















