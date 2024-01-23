//quản lý tuyển sinh
function Admission(){
    let diemchuan = document.getElementById('diemchuan').value;
    let diem1 = document.getElementById('diem1').value;
    let diem2 = document.getElementById('diem2').value;
    let diem3 = document.getElementById('diem3').value;
    let khuvuc = document.getElementById('chonkhuvuc').value;
    let doituong = document.getElementById('chondoituong').value;
    let diemthisinh = Number(diem1) + Number(diem2) + Number(diem3) + Number(khuvuc) + Number(doituong);
    if(diemthisinh >= diemchuan && diem1 >0 && diem2 >0 && diem3 >0){
        document.getElementById('txtxettuyen').innerHTML = "thí sinh đã đậu ; " + "tổng điểm của thí sinh là : " + diemthisinh
    }else{
        document.getElementById('txtxettuyen').innerHTML = "thí sinh trượt ; " + "tổng điểm của thí sinh là : " + diemthisinh
    }
}




// tính tiền điện
function charge(){
    let name = document.getElementById('inputname').value;
    let sodien = document.getElementById('sodien').value;
    let thanhtien = 0;
    if(sodien<=0){
        alert('hãy nhập lại số điện')
    }
    else if(sodien <=50){
        thanhtien = sodien * 500
    }else if(sodien<=100 && 50 < sodien){
        thanhtien = 25000 + (sodien - 50)*650
    }else if(sodien<=200 && 100 <  sodien){
        thanhtien = 57500 + (sodien -100)*850
    }else if(200<sodien && sodien<=350){
        thanhtien = 142500 + (sodien -200)*1100;
    }
    else{
        thanhtien = 307500 + (sodien -350)*1300
    }
    document.getElementById('txttiendien').innerHTML = "Họ tên : "+name +" ; " + " số tiền điện phải đóng là : " + thanhtien.toLocaleString()
}



//tính thuế thu nhập cá nhân
function VAT(){
    let name1 = document.getElementById('inputname1').value;
    let thunhapnam = document.getElementById('thunhapnam').value;
    let songuoi = document.getElementById('songuoi').value;
    if(songuoi<0){
        alert('nhập lại số người tham gia')
    }
    let thunhapchiuthue = thunhapnam - 4000000 - songuoi * 1600000
    let thue = 0;
    if(thunhapchiuthue<=0){
        thue = 0;
    }else if(0<thunhapchiuthue && thunhapchiuthue <=60000000){
        thue = thunhapchiuthue * 0.05
    }else if(60000000<thunhapchiuthue && thunhapchiuthue<=120000000){
        thue = thunhapchiuthue *0.1
    }else if(120000000<thunhapchiuthue && thunhapchiuthue<=210000000){
        thue = thunhapchiuthue *0.15
    }else if(210000000<thunhapchiuthue && thunhapchiuthue<=384000000){
        thue = thunhapchiuthue*0.2
    }else if(384000000<thunhapchiuthue && thunhapchiuthue <= 624000000){
        thue = thunhapchiuthue * 0.25
    }else if(624000000<thunhapchiuthue && thunhapchiuthue <= 960000000){
        thue = thunhapchiuthue * 0.3
    }else{
        thue = thunhapchiuthue * 0.35
    }
    document.getElementById('txttienthue').innerHTML = "Họ tên : "+name1 +" ; " + " số tiền thuế phải đóng là : " + thue.toLocaleString() + "VND"
}


//tính tiền cáp

const PHI_HOA_DON_DAN = 4.5;
const PHI_DICH_VU_DAN = 20.5;
const THUE_KENH_DAN = 7.5

const PHI_HOA_DON_DN = 15  ;
const PHI_DICH_VU_DN = 75;
const THUE_KENH_DN = 50;



function main(){
    let khachhang = document.getElementById('khachhang').value;
    let makhachhang = document.getElementById('makhachhang').value;
    let sokenh = document.getElementById('sokenh').value;
    if(sokenh<=0){
        alert('nhập lại số kênh')
    }
    let phithanhtoan = 0;
    let soketnoi = document.getElementById('ketnoi').value;
    if(khachhang == 'nguoidan'){
        phithanhtoan = tinhcuoc(PHI_HOA_DON_DAN,PHI_DICH_VU_DAN,THUE_KENH_DAN,sokenh);
    }else if(khachhang == 'doanhngiep'){
        if(soketnoi<0){
            alert('mời nhập lại số kết nối')
        }else if(soketnoi == 0 ||soketnoi<=10){
            phithanhtoan = tinhcuoc(PHI_HOA_DON_DN,PHI_DICH_VU_DN,THUE_KENH_DN,sokenh)
        }else{
            phithanhtoan = tinhcuoc(PHI_HOA_DON_DN,PHI_DICH_VU_DN,THUE_KENH_DN,sokenh)+ (soketnoi - 10) * 5
        }
    }else{
        alert('mời chọn lại đói tượng thanh toán')
    }
    document.getElementById('txttiencap').innerHTML = " Mã khách hàng : "+makhachhang +";" + " phí thanh toán là : "+ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(
        phithanhtoan
      )
}




function myfunction(){
    let khachhang = document.getElementById('khachhang').value;
    if(khachhang == 'doanhngiep'){
        document.getElementById('ketnoi').style.display = 'block'
    }else{
        document.getElementById('ketnoi').style.display = 'none'
    }
}

function tinhcuoc(HOA_DON , DICH_VU,PHI_KENH,SO_KENH){
    return(HOA_DON + DICH_VU + PHI_KENH*SO_KENH)
}