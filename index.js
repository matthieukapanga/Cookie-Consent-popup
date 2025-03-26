const popup = document.getElementById("popup")
const close = document.getElementById("close")
const acceptBtn = document.getElementById("accept-btn")



close.addEventListener("click", function(){
    popup.style.display = "none"     
})

acceptBtn.addEventListener("click", function(){
    popup.style.display = "none"
})