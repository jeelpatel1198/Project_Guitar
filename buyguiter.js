document.getElementById('formDiv2').style.display="none";
function onReview(){
    var fnm="",lnm="",cn="",eml="",psw="";
    fnm = document.getElementById('fnm').value;
    lnm = document.getElementById('lnm').value;
    cn = document.getElementById('cn').value;
    eml = document.getElementById('eml').value;
    psw = document.getElementById('psw').value;

    localStorage.setItem("fname",fnm);
    localStorage.setItem("lname",lnm);
    localStorage.setItem("cardno",cn);
    localStorage.setItem("email",eml);
    localStorage.setItem("password",psw);
     
    document.getElementById('formDiv1').style.display="none";
    document.getElementById('formDiv2').style.display="block";
    
    document.getElementById('p1').innerHTML = localStorage.getItem("fname");
    document.getElementById('p2').innerHTML = localStorage.getItem("lname");
    document.getElementById('p3').innerHTML = localStorage.getItem("cardno");
    document.getElementById('p4').innerHTML =localStorage.getItem("email");
    document.getElementById('p5').innerHTML = localStorage.getItem("password");
    
    document.getElementById('myform').reset();
     
 }
 function getEdit(){
    document.getElementById('formDiv2').style.display="none";
     document.getElementById('formDiv1').style.display="block";
     document.getElementById('fnm').value=localStorage.getItem("fname");
     document.getElementById('lnm').value=localStorage.getItem("lname");
     document.getElementById('cn').value=localStorage.getItem("cardno");
     document.getElementById('eml').value=localStorage.getItem("email");
     document.getElementById('psw').value= localStorage.getItem("password");
 }
 function nextPage(){
     window.location.href="confirmation.html"
 }

 document.getElementById('getimg').src=localStorage.getItem('imgPath');
 document.getElementById('getdesc').innerHTML=localStorage.getItem('imgDesc');