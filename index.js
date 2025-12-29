function getData() {
    localStorage.clear()
    let username = document.getElementById("username").value;
    let questionNum = document.getElementById("questionNum").value;
    let physics = document.getElementById('phy').checked
    let biology = document.getElementById('bio').checked
    let chemistry = document.getElementById('chem').checked
    let compsci = document.getElementById('compSci').checked

    localStorage.setItem("username", username);
    localStorage.setItem("questionNum", questionNum); 
    localStorage.setItem('phy', physics)  
    localStorage.setItem('bio', biology)  
    localStorage.setItem('chem', chemistry)  
    localStorage.setItem('compSci', compsci)
}


let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', getData)