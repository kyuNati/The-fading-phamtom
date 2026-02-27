function doKhoLa(muc){// hàm lựa chọn đọc miêu tả độ khó
 document.getElementById("BangDoKho").style.display = "none";
 document.getElementById("cuaSo").style.display = "block";
 if(muc === "De"){
    document.getElementById("tieude").innerText = "Vùng đồng bằng";
    document.getElementById("mota").innerText = "Chào mừng bạn đã đến với vùng đất này, ở đây an toàn nhưng khan hiếm tài nguyên.";
 }
 else if (muc === "TrungBinh") {
    document.getElementById("tieude").innerText = "Sông cạn";
    document.getElementById("mota").innerText = "Cân bằng giữa thử thách và phần thưởng.";
} 
 else{
    document.getElementById("tieude").innerText = "Vùng đá lở";
    document.getElementById("mota").innerText = "Kẻ địch mạnh, tài nguyên hạn chế.";
}
}
// Hàm đóng cửa sổ mô tả
function dong() {
    document.getElementById("cuaSo").style.display = "none";
    document.getElementById("BangDoKho").style.display = "block";
}


// Hàm quay lại
function quayLai() {
    alert("Quay lại trang trước!");
}
