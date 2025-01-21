function convertC (degreeCelsius){
    let degreeFarengeity = ((degreeCelsius  *9 / 5) + 32);
    console.log(degreeFarengeity + "°F");
}
    convertC (25);
    convertC (95);

function convertFan (degreeFarengeity){
    degreeCel = ((degreeFarengeity - 32) *5 / 9);
    console.log(degreeCel + "°C");
}
    convertFan(77);
    convertFan(203);