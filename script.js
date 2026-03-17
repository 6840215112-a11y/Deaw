let count = localStorage.getItem("visitors")

if(count == null){
count = 1
}else{
count++
}

function slide(direction){
document.getElementById("slide").scrollBy({
left: direction * 300,
behavior: 'smooth'
});
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
localStorage.setItem("visitors",count)

document.getElementById("counter").innerText =
"Visitors: " + count
