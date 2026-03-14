function LuuTen(){
    let Ten = document.getElementById("DatTen").value;

    if (Ten.trim() === ""){
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    document.getElementById("tenPlayer").innerText = Ten;
    document.getElementById("CuaSoTen").style.display = "none";

    localStorage.setItem("tenPlayer", Ten);

    document.getElementById("CuaSoThu").style.display ="flex";
}

window.onload = function(){

    let LuuTen = localStorage.getItem("tenPlayer");

    if(LuuTen){
        document.getElementById("tenPlayer").innerText = LuuTen;
        document.getElementById("CuaSoTen").style.display = "none";
    }

    let thu = JSON.parse(localStorage.getItem("Thu"));

    if(thu){
        let area = document.getElementById("characterArea");

        area.innerHTML = `
        <div class="thu">
            <div class="thu-name">${thu.ten} (${thu.gioiTinh})</div>
            <img src="Thu.png">
        </div>
        `;
    }
    //có tên user nhưng chưa có thú=>mở cửa sổ chọn thú
    if(LuuTen && !thu){
        document.getElementById("CuaSoThu").style.display ="flex";
    }
}

function XacNhanThu(){

    let tenThu = document.getElementById("TenThu").value;
    let gioiTinh = document.getElementById("GioiTinh").value;

    if(tenThu.trim() === ""){
        alert("Hãy đặt tên cho thú của bạn.");
        return;
    }

    let area = document.getElementById("characterArea");

    area.innerHTML = `
    <div class="thu">
        <div class="thu-name">${tenThu} (${gioiTinh})</div>
        <img src="Thu.png">
    </div>
    `;

    document.getElementById("CuaSoThu").style.display = "none";

    let thuData = {
        ten: tenThu,
        gioiTinh: gioiTinh
    };

    localStorage.setItem("Thu", JSON.stringify(thuData));
}
