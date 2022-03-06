function goHome(){
    window.location.href="Home.html";
}

document.getElementById('getdesc').innerHTML=localStorage.getItem('imgDesc');
document.getElementById('ono').innerHTML=localStorage.getItem('orderNo');
document.getElementById('price').innerHTML=localStorage.getItem('price');
var a = localStorage.getItem('shippingDetail').split('$');
for(var i=0;i<a.length;i++){
    document.getElementById('shippingprice').innerHTML="$"+a[1];
    var number = Number(localStorage.getItem('price').replace(/[^0-9\.-]+/g,""));
    document.getElementById('fprice').innerHTML= "$"+(number+parseInt(a[1]));
}



   

