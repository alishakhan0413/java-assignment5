function changeMode(e) {
    var para = document.getElementsByTagName("p")
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        for (var i = 0; i < para.length; i++) {
            para[i].className = ""
        }
        e.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode'
        e.className = "btn btn-dark"
    }
    else {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "aqua"
        for (var i = 0; i < para.length; i++) {
            para[i].className = "fontLight"
        }
        e.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode'
        e.className = "btn btn-light"
    }
}
