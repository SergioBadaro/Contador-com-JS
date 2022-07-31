function aumentar() {
    document.getElementsByClassName("main")[0].innerText++;
}

function diminuir() {
    document.getElementsByClassName("main")[0].innerText--;
}

function resetar() {
    document.getElementsByClassName("main")[0].innerText = 0;
}

function verify() {


    setInterval(() => {
        if (document.getElementsByClassName("main")[0].innerText > 0) {
            document.getElementsByClassName("main")[0].style.color = "green";
        }

        if (document.getElementsByClassName("main")[0].innerText < 0) {
            document.getElementsByClassName("main")[0].style.color = "red";
        }

        if (document.getElementsByClassName("main")[0].innerText == 0) {
            document.getElementsByClassName("main")[0].style.color = "black";
        }
    }, 100);

}