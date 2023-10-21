let bae = document.querySelector("#dost");
let text = document.querySelector("h5")
let check = 0;

bae.addEventListener("click", function(){
    if(check == 0){
        bae.innerHTML = "Remove"
        text.innerHTML = "Friends"
        text.style.color = "green"
        check = 1;
    }else{
        bae.innerHTML = "Add Friend";
        text.innerHTML = "Not Friends";
        text.style.color = "red";

        check = 0;
    }
});
