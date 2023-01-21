async function x(){
    
    let arr = []
    let content = document.getElementById("content");

await fetch("http://localhost:1110/home/getProduct", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then((res) => res.json()).then((res) => {
    arr = res;
    renderData(res)
    
}).catch(err => { console.log(err) })

console.log(arr)


function renderData(data) {
    
    content.innerHTML = `<div class=card-list>${data.map((el) => {
        let image = el.img;
        let title = el.Title.substring(0,20)+"...";
        let price = el.price;
        let delivery = el.Delivery;
        let rating = el.Rating;
        
        return renderCard(image,title,price,delivery,rating)
    }).join(" ")}</div>`
}

function renderCard(imgURL, title, price, delivery, rating) {
    return `<div class="sub"><div class="img"><img src=${imgURL} alt="broken"></div>
    <div class="pro_details"><div class="title">${title}</div>
    <div class="pro_price">${price}</div>
    <div class="delivery">${delivery}</div>
        <div class="rating">${rating} <i class="fa-solid fa-star"></i></div></div></div> `
}


// function search(){

//     content.innerHTML = null;

//     let search = document.getElementById("search").value;
//     let newData = arr.filter((elem)=>{
//         return elem.Title.tolowerCase().includes(search.tolowerCase())
//     });
//     console.log(search)
//     renderData(newData)
// }
}
x()