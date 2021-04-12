let kwh=+prompt("Nhap tu ban phim")

if(kwh<50){
   let đ=1.678
    GĐ=kwh*1.678
    alert("Giá điện = " +GĐ)
} else if (kwh<100) {
    let đ=1.734
    GĐ=kwh*1.734
    alert("Giá điện = " + GĐ)
} else if (kwh<200) {
    let đ=2.014
    GĐ=kwh*2.014
    alert("Giá điện =" +GĐ)
} else  {
    let đ=2.536
    GĐ=kwh*2.536
    alert("Giá điện = " +GĐ)
}


