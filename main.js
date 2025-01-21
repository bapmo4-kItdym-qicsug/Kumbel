function convertC (degreeCelsius){
    let degreeFarengeity = ((degreeCelsius  *9 / 5) + 32);
    console.log(degreeFarengeity + "°F");
}
    convertC (25);
    convertC (95);

function convertF (degreeFarengeity){
    degreeCel = ((degreeFarengeity - 32) *5 / 9);
    console.log(degreeCel + "°C");
}
    convertF(77);
    convertF(203);