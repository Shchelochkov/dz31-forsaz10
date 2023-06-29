// объявляем переменные 

let sled = document.getElementById('sled');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let low = document.getElementById('low');
let fast = document.getElementById('fast');
let oblast = document.getElementById('oblast');


fast.onclick = f6
function f6() {
    fast.style.backgroundColor = '#303a44'
    low.style.backgroundColor = 'royalblue'
    fast.style.boxShadow = '0px 0px 20px white'
    low.style.boxShadow = '0px 0px 0px white'
    oblast.onmousemove = f1
    let a = 0
    function f1() {
    a +=10
    let newsled = String(a) + 'px'
    sled.style.width = newsled
    }
}

low.onclick = f7
function f7() {
    low.style.backgroundColor = '#303a44'
    fast.style.backgroundColor = 'royalblue'
    low.style.boxShadow = '0px 0px 20px white'
    fast.style.boxShadow = '0px 0px 0px white'
    oblast.onmousemove = f1
    let a = 0
    function f1() {
    a +=2
    let newsled = String(a) + 'px'
    sled.style.width = newsled
    }
}


d1.onclick = f2
function f2() {
    sled.style.backgroundColor = 'khaki'
}

d2.onclick = f3
function f3() {
    sled.style.backgroundColor = 'blue'
}

d3.onclick = f4
function f4() {
    sled.style.backgroundColor = 'red'
}

d4.onclick = f5
function f5() {
    sled.style.backgroundColor = 'rebeccapurple'
}







