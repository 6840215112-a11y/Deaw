let count = localStorage.getItem("visitors")

if(count == null){
count = 1
}else{
count++
}

let currentSlide = 0;

function slide(direction) {
    const slides = document.querySelectorAll('.slide'); // ดึงรูปที่มี class slide ทั้งหมด
    
    // คำนวณลำดับรูปถัดไป
    currentSlide += direction;

    // ถ้าเลื่อนเกินรูปสุดท้ายให้กลับไปรูปแรก / ถ้าถอยจากรูปแรกให้ไปรูปสุดท้าย
    if (currentSlide >= slides.length) { currentSlide = 0; }
    if (currentSlide < 0) { currentSlide = slides.length - 1; }

    // สั่งซ่อนทุกรูปก่อน
    slides.forEach(s => s.style.display = 'none');
    
    // แสดงเฉพาะรูปที่เลือก
    slides[currentSlide].style.display = 'block';
}

// เรียกใช้งานครั้งแรกเพื่อให้รูปแรกแสดงผล
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    if(slides.length > 0) {
        slides.forEach(s => s.style.display = 'none');
        slides[0].style.display = 'block';
    }
});

function closeModal(){
document.getElementById("modal").style.display="none";
}
localStorage.setItem("visitors",count)

document.getElementById("counter").innerText =
"Visitors: " + count
