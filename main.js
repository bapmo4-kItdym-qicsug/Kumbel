let billAmount = 90000; // вызываем переменную с названием billAmount и прсваеваем ей значение 90000
let tipPrecent = 30; //

function sum (billAmount, tipPrecent){ //параметры
    let tip = billAmount * tipPrecent / 100;
    let total = billAmount + tip;
    console.log("ваш общий счет с учетом чаевых составляет: " + total);
}

sum (20000, 50);//аргументы ,первое значение будет являться billAmount - названием переменной, а второе tipPrecent - значение присвоенное переменной 
sum (4000, 90);
sum (300000, 30);
