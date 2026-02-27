function doKhoLa(muc){// hàm lựa chọn đọc miêu tả độ khó
 document.getElementById("BangDoKho").style.display = "none";
 document.getElementById("cuaSo").style.display = "block";
 if(muc === "De"){
    document.getElementById("tieude").innerText = "Vùng đồng bằng";
    document.getElementById("mota").innerText = "Để sẵn sàng bước vào thử thách, an toàn luôn dặt lên hàng đầu. tài nguyên tuy hạn chế nhưng đồng bằng lại rất phù hợp nếu bạn không muốn một khởi đầu khó khăn.";
 }
 else if (muc === "TrungBinh") {
    document.getElementById("tieude").innerText = "Sông cạn";
    document.getElementById("mota").innerText = "Một sự cân bằng hoàn hảo chính là sự cân bằng giữa thách thức và tài nguyên. rất có thể bạn sẽ gặp phải những điều không mong muốn nhưng hãy tin rằng phần thưởng phía trước không bạc đãi bạn đâu.";
} 
 else{
    document.getElementById("tieude").innerText = "Vùng đá lở";
    document.getElementById("mota").innerText = "Phần thưởng lớn tương xúng với độ khó cao, một vùng đất truy cầu những nhà thám hiểm có bản lĩnh thật sự. kho báu rồng đã xuất hiện, chúng tôi tin bạn sẽ không dễ dàng bỏ qua.";
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
