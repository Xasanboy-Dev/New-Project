let btn = document.querySelector("#btn")
btn.onclick = () => {
    let special = "Xasanboy"
    let correct = 123456789
    let name = document.querySelector("#name").value
    let password = document.querySelector("#password").value
    if (name == special && +password == correct) {
        alert("Success")
    } else {
        alert("Wrong way")
    }
}

let r = 0
function hello() {
    r++
    if (r % 2 == 1) {
        document.querySelector("#password").type = "text"
        document.querySelector('#password').value = document.querySelector("#password").value
    } else {
        document.querySelector("#password").type = "password"
        document.querySelector("#password").value = document.querySelector("#password").value;
    }
}