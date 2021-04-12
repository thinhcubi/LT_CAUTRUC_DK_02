let ST=+prompt("Nhap tu ban phim")
if (ST<5000000) {
    TH=ST*5/100
    alert("Thue =" + TH)
} else if (ST<10000000) {
    TH=ST*10/100
    alert("Thue =" + TH)
} else if (ST<18000000) {
    TH=ST*15/100
    alert("Thue =" + TH)
} else if (ST<32000000) {
    TH = ST * 20 / 100
    alert("Thue =" + TH)
} else  if (ST<52000000) {
    TH = ST * 25 / 100
      alert("Thue =" + TH)
} else if (ST<80000000) {
    TH = ST * 30 / 100
    alert("Thue =" + TH)
} else {
    TH = ST * 35 / 100
    alert("Thue =" + TH)
}