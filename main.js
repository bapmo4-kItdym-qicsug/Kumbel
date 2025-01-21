const glodalVar = "I'm global varible";
function scope(){
    const localVar = "I'm local varible";
    const blockVar = "I'm block varible";
    console.log(glodalVar, "global var inside");
    console.log(localVar, "local var inside);");
    console.log(blockVar, "block var inside"); // Блочная область видимости доступна только внутри какого-либо блока коды, в котором она определена.
    // Локальная работает только внутри функции.
}

scope();
console.log(glodalVar, "global var outside");
console.log(localVar, "local var outside);");
console.log(blockVar, "block var outside");

// Тут я пыталась создать две функции, с одинаковымми переменными что бы прговерить что они мне будут друг с другом кофликтовать 
// const appropriate = function(){
//     const blockVar = "I'm block varible";
//     console.log(blockVar, "block var inside");
// }
// appropriate();
// console.log(blockVar, "block var outside1");

// function create(){
//     const blockVar = "I'm block varible";
//     console.log(blockVar, "block var inside");
// }
// create();
// console.log(blockVar, "block var outside2");
