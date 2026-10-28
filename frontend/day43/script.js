// let arr = ['raj','sum','kum','om','jai']
// let btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     let x = Math.floor(Math.random()*arr.length)
//     console.log(arr[x])
// })

var arr = [
    {
        team : 'mi',
        primary :'blue',
        secondary : 'gold',
        fullName : 'mumbai indians',
        trophies : 5,
        captain : 'hardik'

},
{
    team : 'csk',
    primary :'yellow',
    secondary : 'blue',
    fullName : 'chennai super kings',
    trophies : 5,
    captain : 'msd'



},
{
    team : 'rcb',
    primary :'red',
    secondary : 'black',
    fullName : 'royal challengers bangalore',
    trophies : 1,
    captain : 'virat'



},
{
    team : 'kkr',
    primary :'gold',
    secondary : 'black',
    fullName : 'kolkata knight riders',
    trophies : 2,
    captain : 'rahane'
},
{
    team : 'pbks',
    primary :'pink',
    secondary : 'yellow',
    fullName : 'punjab kings',
    trophies : 0,
    captain : 'iyer'
},
{
    team : 'srh',
    primary :'orange',
    secondary : 'black',
    fullName : 'sunrisers hyedrabad',
    trophies : 1,
    captain : 'cummins'
},
{
    team : 'dc',
    primary :'crimson',
    secondary : 'blue',
    fullName : 'delhi capital',
    trophies : 0,
    captain : 'pant'
}
]

var btn = document.querySelector('button')
var h1 = document.querySelector('#head h1')
var h2 = document.querySelector('#head h2')
var h3 = document.querySelector('#head h3')
var h4 = document.querySelector('#head h4')

var bod = document.querySelector('body')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[num].team
    h2.innerHTML = arr[num].fullName
    h3.innerHTML = arr[num].captain
    h4.innerHTML = arr[num].trophies
    h1.style.backgroundColor = arr[num].secondary
    h2.style.backgroundColor = arr[num].secondary
    h3.style.backgroundColor = arr[num].secondary
    h4.style.backgroundColor = arr[num].secondary
    bod.style.backgroundColor = arr[num].primary
   
})