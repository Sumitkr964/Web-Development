// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     var h1 = document.createElement('div')
//     h1.innerHTML = 'hello'
//     console.log(h1)

// })

// var h1 = document.createElement('h1')
// var btn = document.querySelector('button')
// var main = document.querySelector('main')
// btn.addEventListener('click',function(){
//     var h1 = document.createElement('h1')
//     h1.innerHTML = 'hello from js'
//     main.appendChild(h1)
// })
// h1.innerHTML = 'hello from js '
// var main = document.querySelector('main')
// main.appendChild(h1)

// var btn = document.createElement('div')
// btn.innerHTML = 'download'
// btn.style.color = 'red'
// var main = document.querySelector('main')
// main.appendChild(btn)

// var btn = document.querySelector('button')
// var main = document.querySelector('main')
// btn.addEventListener('click',()=>{
//     var x = Math.random()*100
//     var y = Math.random()*100
//     var c1 = Math.floor(Math.random()*256)
//     var c2 = Math.floor(Math.random()*256)
//     var c3 = Math.floor(Math.random()*256)
 

//     var div = document.createElement('div')
//     div.style.height = '50px' 
//     div.style.width = '50px'
//     div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     div.style.position = 'absolute'
//     div.style.top = x+'%'
//     div.style.left = y+'%'

//     main.appendChild(div)
//     console.log(div)
// })

var btn = document.querySelector('button')
var main = document.querySelector('main')

var arr = ['hey!','hi!','hello!','how r u?','sumit','kumar','bye!']
btn.addEventListener('click',function(){
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    var scale = Math.random()*3
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    var h1 = document.createElement('h1')
    var a = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.top = x +'%'
    h1.style.left = y +'%'
    h1.style.rotate = rot +'deg'
    h1.style.scale = scale
    h1.style.color = `rgb(${c1},${c2},${c3})`

    main.appendChild(h1)
})
