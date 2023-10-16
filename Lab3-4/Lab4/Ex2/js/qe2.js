function qe2() {
    var rs = document.getElementsByClassName('result');
    var aElement = document.getElementById('paramA');
    var bElement = document.getElementById('paramB');
    var cElement = document.getElementById('paramC');

    var a = parseFloat(aElement.value);
    var b = parseFloat(bElement.value);
    var c = parseFloat(cElement.value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Vui lòng nhập các giá trị hợp lệ cho a, b, và c.");
        return;
    }
    
    for (i = 0; i < rs.length; i++) {
        rs[i].style.display = "block";
        
    }
    qe2Main(a, b, c);
}

function qe2Main(a, b, c) {
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    }
    if (delta < 0) {
        x1 = null;
        x2 = null;
    }
    if (delta == 0) {
        x1 = -b / (2 * a);
        x2 = -b / (2 * a);
    }
    

    print(a, b, c, delta, x1, x2);
}


function print(a, b, c, delta, x1, x2) {
    var aElements = document.getElementsByClassName('a');
    var bElements = document.getElementsByClassName('b');
    var cElements = document.getElementsByClassName('c');
    var dElements = document.getElementsByClassName('delta-rs');
    var conElements = document.getElementsByClassName('conclude');
    var x1Ele = document.getElementsByClassName('x1');
    var x2Ele = document.getElementsByClassName('x2');

    for (var i = 0; i < aElements.length; i++) {
        aElements[i].textContent = a;
    }

    for (var i = 0; i < bElements.length; i++) {
        bElements[i].textContent = b;
    }

    for (var i = 0; i < cElements.length; i++) {
        cElements[i].textContent = c;
    }

    for (var i = 0; i < dElements.length; i++) {
        dElements[i].textContent = "Δ = b² - 4ac = " + b + "² - 4*" + a + "*" + c + " = " + delta;
    }

    for (var i = 0; i < conElements.length; i++) {
        if (delta > 0) {
            conElements[i].textContent = "=> Phương trình có 2 nghiệm phân biệt";
        }
        if (delta < 0) {
            conElements[i].textContent = "=> Phương trình vô nghiệm";
        }
        if (delta == 0) {
            conElements[i].textContent = "=> Phương trình có nghiệm kép";
        }
    }
    
    for (var i = 0; i < x1Ele.length; i++) {
        x1Ele[i].textContent = "x₁ = " + x1;
    }

    for (var i = 0; i < x2Ele.length; i++) {
        x2Ele[i].textContent = "x₂ = " + x2;
    }
}


// function qe2Main(a,b,c , delta, x1, x2) {

// }