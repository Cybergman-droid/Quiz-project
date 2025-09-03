function getData() {
    username = document.getElementById("username").value;
    questionNum = document.getElementById("questionNum").value;
    localStorage.setItem("username", username);
    localStorage.setItem("questionNum", questionNum);   
}



let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', getData)