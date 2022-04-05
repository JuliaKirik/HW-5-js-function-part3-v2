console.log ("...........#4 Упрощенный вариант:")

function ab (A, B) {
    if (A > B) {
        return
    }
    console.log(A);
    ab(A + 1, B);
}
ab(2, 10)

console.log ("...........#4 Усложненный вариант:")
function abc (A, B) {
    console.log(A);
    if (A === B) {
        return
    } else if(A < B ) { 
        abc(A + 1, B);
    } else {
        abc(A - 1, B);
    }   
}
abc(2, 15)

console.log ("...........#5 (a,b) Реализовать отображение времени на экране:")

function clock(){
    const date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);