
let url = "http://localhost:1110/admin/login"
let email = document.getElementById("email");
let pass = document.getElementById("password");

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("hello");
    user()
})
async function user(){
    try {
        let obj ={
            email:email.value,
            pass:pass.value
        }
        console.log(obj)
        let res = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        let data = await res.json();
        console.log(data)
        localStorage.setItem("token",data.token)
        if(data.token){
            alert("Logged In Successfully!!")
            window.location.href="./adminPage.html"
        }else{
            alert(data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

