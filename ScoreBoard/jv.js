home = document.getElementById("ho")    ;
guest = document.getElementById("gs")   ;
tim = document.getElementById("time")   ;
hh = document.getElementById("hh")      ; 
hg = document.getElementById("hg")      ; 
btn = document.getElementById("btn")    ;
star = document.getElementById("start") ;
bh1 = document.getElementById("bh1")    ;
bh2 = document.getElementById("bh2")    ;
bh3 = document.getElementById("bh3")    ;
bg1 = document.getElementById("bg1")    ;
bg2 = document.getElementById("bg2")    ;
bg3 = document.getElementById("bg3")    ;
stopp = document.getElementById("stop")  ;

bh1.disabled = true ;
bh2.disabled = true ;
bh3.disabled = true ;
bg1.disabled = true ;
bg2.disabled = true ;
bg3.disabled = true ;
stopp.disabled = true ;


let scoreh = 0 ;
let scoreg = 0 ;



function add1h(){
    scoreh += 1 ;
    home.textContent=scoreh ;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;  
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}

function add2h(){
    scoreh += 2 ;
    home.textContent=scoreh;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;
        
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}

function add3h(){
    scoreh += 3 ;
    home.textContent=scoreh;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;
        
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}

function add1g(){
    scoreg += 1 ;
    guest.textContent=scoreg ;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;
        
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}

function add2g(){
    scoreg += 2 ;
    guest.textContent=scoreg ;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;
        
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}

function add3g(){
    scoreg += 3 ;
    guest.textContent=scoreg ;
    if (scoreh == scoreg){
        hh.style.color = "red" ; 
        hg.style.color = "red" ;
    }
    else if (scoreh > scoreg) {
        hh.style.color = "yellow" ;
        
        hg.style.color = "whitesmoke"
    }
    else{
        hh.style.color = "whitesmoke"
        hg.style.color = "yellow"
    }
}
let m = 0 ;
let s = 0 ; 
function start(){
    stopp.disabled = false ;
    star.disabled = true ;
    bh1.disabled = false ;
    bh2.disabled = false ;
    bh3.disabled = false ;
    bg1.disabled = false ;
    bg2.disabled = false ;
    bg3.disabled = false ;
    

    timer = setInterval(function () {
        s++;

        if (s === 60) {
            m++;
            s = 0;
        }
        tim.textContent = (m < 10 ? "0" + m : m)+ ":" + (s < 10 ? "0" + s : s);
    }, 1000);
}
function reset(){
    star.disabled = false ;
    stopp.disabled = true ;
    bh1.disabled = true ;
    bh2.disabled = true ;
    bh3.disabled = true ;
    bg1.disabled = true ;
    bg2.disabled = true ;
    bg3.disabled = true ;
    clearInterval(timer) ;
    m = 0 ;
    s = 0 ;
    scoreg = 0 ;
    scoreh = 0 ;
    home.textContent=scoreh;
    guest.textContent=scoreg ;
    hh.style.color = "whitesmoke" 
    hg.style.color = "whitesmoke" ;
    tim.textContent="00:00";
}
function stop(){
    stopp.disabled = true ;
    clearInterval(timer);
    star.disabled = false ;
    bh1.disabled = true ;
    bh2.disabled = true ;
    bh3.disabled = true ;
    bg1.disabled = true ;
    bg2.disabled = true ;
    bg3.disabled = true ;
}