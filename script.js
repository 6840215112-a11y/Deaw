let count = localStorage.getItem("visitors")

if(count == null){
count = 1
}else{
count++
}

localStorage.setItem("visitors",count)

document.getElementById("counter").innerText =
"Visitors: " + count