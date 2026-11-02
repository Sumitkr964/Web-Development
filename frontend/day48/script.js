var aud1 = new Audio('./28.mp3')
var aud2 = new Audio('./29.mp3')
var aud3= new Audio('./30.mp3')
var aud4= new Audio('./31.mp3')
var aud5= new Audio('./32.mp3')
var aud6= new Audio('./33.mp3')
var aud7= new Audio('./34.mp3')
var aud8= new Audio('./35.mp3')
var aud9= new Audio('./36.mp3')
var aud10= new Audio('./37.mp3')


var body = document.querySelector('body')
var h1 = document.querySelector('h1')
body.addEventListener('keydown',function(dets){
    
    if(dets.code == 'KeyA'){
        h1.innerHTML = dets.code
        aud1.play()
    }
    else if(dets.code == 'KeyS'){
        h1.innerHTML = dets.code
        aud2.play()
    }
    if(dets.code == 'KeyD'){
        h1.innerHTML = dets.code
        aud3.play()
    }
    if(dets.code == 'KeyF'){
        h1.innerHTML = dets.code
        aud4.play()
    }
    
    if(dets.code == 'KeyG'){
        h1.innerHTML = dets.code
        aud5.play()
    }
    
    if(dets.code == 'KeyH'){
        h1.innerHTML = dets.code
        aud6.play()
    }
    if(dets.code == 'KeyJ'){
        h1.innerHTML = dets.code
        aud7.play()
    }
    if(dets.code == 'KeyK'){
        h1.innerHTML = dets.code
        aud8.play()
    }
    if(dets.code == 'KeyL'){
        h1.innerHTML = dets.code
        aud9.play()
    }
    else{
        h1.innerHTML = dets.code
        aud10.play()
    }
    

    
})
