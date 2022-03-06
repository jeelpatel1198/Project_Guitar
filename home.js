function onBuy() {
    var imgpath = document.getElementById('imgdata').src;
    var imgdesc = document.getElementById('product').innerHTML;
    var orderNo = document.getElementById('orderno').innerHTML;
    var price = document.getElementById('price').innerHTML;
    var shipDetail = document.getElementById('shipping').innerHTML;
    localStorage.setItem("orderNo",orderNo);
    localStorage.setItem("imgPath",imgpath);
    localStorage.setItem("imgDesc",imgdesc);
    localStorage.setItem("price",price);
    localStorage.setItem("shippingDetail",shipDetail);

window.location.href="buyguiter.html";
  
}




var xhttp = new XMLHttpRequest();
xhttp.open("GET", "guitar.json", true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        data = xhttp.responseText;
        resp = JSON.parse(data);
        imgUrl = "";
        var curImage = 0;

        document.getElementById('imgdata').src = resp.allProducts[curImage].image_path;

        document.getElementById('product').innerHTML = resp.allProducts[curImage].product_description;
        document.getElementById('shipping').innerHTML = resp.allProducts[curImage].shipping_details;
        document.getElementById('review').innerHTML = resp.allProducts[curImage].customer_reviews;
        console.log(resp.allProducts[curImage].no_of_items);
        document.getElementById('orderno').innerHTML = resp.allProducts[curImage].no_of_items;
        document.getElementById('price').innerHTML = resp.allProducts[curImage].price;
        curImage =1;
        guitarPics = function fun(direction) {
            
            document.getElementById('imgdata').src = resp.allProducts[curImage].image_path;

            document.getElementById('product').innerHTML = resp.allProducts[curImage].product_description;
            document.getElementById('shipping').innerHTML = resp.allProducts[curImage].shipping_details;
            document.getElementById('review').innerHTML = resp.allProducts[curImage].customer_reviews;
            document.getElementById('orderno').innerHTML = resp.allProducts[curImage].no_of_items;
            document.getElementById('price').innerHTML = resp.allProducts[curImage].price;
            if (direction == 'next') {
                curImage++;

                if (curImage == 6) {
                    curImage = 0;
                }
            } else {
                curImage--;
                if (curImage == -1) {
                    curImage = 6;
                }

                // even reset the counter here when
                // its getting 0
            }
            console.log(resp.allProducts[curImage].image_path);


        }
    }

}




