  //Sư kiện khi nhấn tab đăng kí
  function onDangki(){
    // ẩn phần đăng nhập
    // hiển thị div đăng 
    var divDki = document.getElementById("divdangki");
    var divDangnhap = document.getElementById("divdangnhap");
    
    divDki.style.display ="block";
    divDangnhap.style.display ="none";
  }
  
  //Sư kiện khi nhấn tab đăng kí
  function onDangNhap(){
    // ẩn phần đăng kí
    // hiển thị div đăng 
    var divDki = document.getElementById("divdangki");
    var divDangnhap = document.getElementById("divdangnhap");
    
    divDki.style.display ="none";
    divDangnhap.style.display ="block";
  }
  function ktraBatBuocDangKi(){
    var pthongbao = document.getElementById ("pthongbao");
    var nghenghiep = document.getElementById ("nghenghiep");
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
   
      if(nghenghiep.selectedIndex== 0) {
      pthongbao.style.display ="block";
      pthongbao.innerHTML = "Bạn phải chọn nghề nghiệp...! <br/>";
      return false;
    } 
   if(!nam.checked && !nu.checked){
      pthongbao.style.display ="block";
      pthongbao.innerHTML = "Bạn phải chọn giới tính...! <br/>";
      return false;
    } else {
      pthongbao.style.display ="none";
      return true;
    }
  }
  function KiemTraHopLe(){
    return ktraBatBuocDangKi();
  } 