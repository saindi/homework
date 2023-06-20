/*
    Написати приклад використання методів функцій window.open()/window.close().
*/

let options = {
    animation: true,
    delay: 3000
};

let toastError = new bootstrap.Toast(document.getElementById('errorToast'), options);

let myWindow = null;

document.getElementById("openWin").onclick = function() {
    if (myWindow === null) {
        myWindow = window.open('index.html');
        document.getElementById("closeWin").classList.toggle('disabled')
    }
    else
        toastError.show();

}

document.getElementById("closeWin").onclick = function(){
    myWindow.close();
    myWindow = null;
    document.getElementById("closeWin").classList.toggle('disabled');
}
