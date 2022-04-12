console.log ("...........#4 Упрощенный вариант:")
function ab (a, b) {
    if (a > b) {
        return
    }
    console.log (a);
    ab(a + 1, b);
}
ab(2, 10)
console.log ("...........#4 Усложненный вариант:")
function abc (a, b) {
    console.log (a);
    if (a === b) {
        return
    } else if (a < b) { 
        abc(a + 1, b);
    } else {
        abc(a - 1, b);
    }   
}
abc(2, 15)
console.log ("...........#5 (a,b) Реализовать отображение времени на экране:")
function clock() {
    const date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);