let count = localStorage.getItem("visitors")

if(count == null){
count = 1
}else{
count++
}

Migeul
function openModal(src){
document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src = src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
localStorage.setItem("visitors",count)

document.getElementById("counter").innerText =
"Visitors: " + count
