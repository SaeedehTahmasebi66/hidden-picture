function toggle_btn_img(){
    var x = document.getElementById("btn");
    if (x.innerHTML == "Show!") {
        x.innerHTML = "Hide!";
        document.getElementById("avatar").classList.remove("w3-hide");
    } else{
        x.innerHTML = "Show!"
        document.getElementById("avatar").classList.add("w3-hide");
    }
}


