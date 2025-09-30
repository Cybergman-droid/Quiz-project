function getData() {
    localStorage.clear()
    username = document.getElementById("username").value;
    questionNum = document.getElementById("questionNum").value;
    physics = document.getElementById('phy').checked
    biology = document.getElementById('bio').checked
    chemistry = document.getElementById('chem').checked
    compsci = document.getElementById('compSci').checked

    localStorage.setItem("username", username);
    localStorage.setItem("questionNum", questionNum); 
    localStorage.setItem('phy', physics)  
    localStorage.setItem('bio', biology)  
    localStorage.setItem('chem', chemistry)  
    localStorage.setItem('compSci', compsci)
}


let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', getData)