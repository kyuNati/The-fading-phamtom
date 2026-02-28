function LuuTen(){
    let Ten = document.getElementById("DatTen").value; //.value nghĩa là lấy nội dung người dùng nhập
    if (Ten.trim() === ""){
        alert("Vui lòng nhập tên của bạn!"); //trim() để bỏ khoảng trắng, nếu rỗng báo lỗi
        return;
    }
    document.getElementById("tenPlayer").innerText = Ten;//hiển thị tên
    document.getElementById("CuaSoTen").style.display = "none";//ẩn cửa sổ
    localStorage.setItem("tenPlayer", Ten);//lưu tên vào bộ nhớ trình duyệt
}
window.onload = function(){// Khi tải trang → kiểm tra có tên chưa
    let LuuTen = localStorage.getItem("tenPlayer");
    if(LuuTen){
        document.getElementById("tenPlayer").innerText = LuuTen;
        document.getElementById("CuaSoTen").style.display = "none";
    }

}

