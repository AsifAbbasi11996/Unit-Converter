var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var kilogram = document.getElementById('kilogram');
var gram = document.getElementById('gram');
var centimeter = document.getElementById('centimeter');
var millimeter = document.getElementById('millimeter');

feet.addEventListener('input', function () {
    let f = this.value;
    let i = f*12;
    inch.value = i;
});

inch.addEventListener('input', function () {
    let i = this.value;
    let f = i/12;

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});


// kilogram and gram
kilogram.addEventListener('input', function () {
    let kg = this.value;
    let g = kg*1000;
    gram.value = g;
});

gram.addEventListener('input', function () {
    let g = this.value;
    let kg = g/1000;

    if(!Number.isInteger(kg)){
        kg = kg.toFixed(2);
    }
    kilogram.value = kg;
});

// CM and MM
centimeter.addEventListener('input', function () {
    let cm = this.value;
    let mm = cm*10;
    millimeter.value = mm;
});

millimeter.addEventListener('input', function () {
    let mm = this.value;
    let cm = mm/10;

    if(!Number.isInteger(kg)){
        cm = cm.toFixed(2);
    }
    centimeter.value = cm;
});