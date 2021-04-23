window.onload = () => {
    this.sessionStorage.setItem("username", "coba")
    this.sessionStorage.setItem("password", "123")
}

let input = document.getElementsByTagName('input')
let login = document.getElementById('submitButton')

login.onclick = () => {
    if (input[0].value === this.sessionStorage.getItem("username") && input[1].value === this.sessionStorage.getItem("password")) {
        window.open("https://www.youtube.com/", "_self")
        alert('Login Berhasil')
    } else{
        alert('Username atau Password yang Anda Masukkan Salah')
    }
}