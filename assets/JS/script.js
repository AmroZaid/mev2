const funFact1 = document.getElementById("funFact1");
const funFact2 = document.getElementById("funFact2");
funFact1.style.display = "none";
funFact2.style.display = "none";


function fun1() { 
    if (funFact1.style.display === "none") {
        funFact1.style.display = "block";
        return;
    } 
    funFact1.style.display = "none";
}
function fun2() { 
    if (funFact2.style.display === "none") {
        funFact2.style.display = "block";
        return;
    } 
    funFact2.style.display = "none";
}

