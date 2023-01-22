let url = "http://localhost:1110/home/getProduct"
let arr = [];
async function x() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        arr = await data
        // console.log(arr)
        renderData(data);
    } catch (error) {
        
    }
}
x()
let content = document.getElementById("content");
function renderData(data) {

    content.innerHTML = `<div class=card-list>${data.map((el) => {
        let image = el.img;
        let title = el.Title.substring(0, 20) + "...";
        let price = el.price;
        let delivery = el.Delivery;
        let rating = el.Rating;

        return renderCard(image, title, price, delivery, rating)
    }).join(" ")}</div>`
}

function renderCard(imgURL, title, price, delivery, rating) {
    return `<div class="sub"><div class="img"><img src=${imgURL} alt="broken"></div>
<div class="pro_details"><div class="title">${title}</div>
<div class="pro_price">${price}</div>
<div class="delivery">${delivery}</div>
    <div class="rating">${rating} <i class="fa-solid fa-star"></i></div></div></div> `
}

function search(){
    console.log(arr)
    let ser = document.getElementById("search").value;
    let newData = arr.filter(function(elem){
        return elem.Title.toLowerCase().includes(ser.toLocaleLowerCase())
    });
    renderData(newData)
}


function sort() {
    let sel = document.getElementById("sort").value;
    console.log(sel);
    if (sel == "LTH") {
      arr.sort((a, b) => a.price.slice(1) - b.price.slice(1));
      renderData(arr);
    }
    if (sel == "HTL") {
      arr.sort((a, b) => b.price.slice(1) - a.price.slice(1));
      renderData(arr);
    }
  }

