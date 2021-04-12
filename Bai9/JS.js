let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
let c = +prompt("Nhap c");
if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        alert("La 1 tam giac");
    } else {
        alert("Khong phai 1 tam giac");
    }
} else {
    alert("Khong phai 1 tam giac");
}

