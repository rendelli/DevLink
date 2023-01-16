function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem lighr
        img.setAttribute("src", "assets/Avatar-light-mode.png")
    } else {
        // se tiver SEM o light mode, manter a imagem normal.
        img.setAttribute("src", "assets/Avatar.png")
    }


    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }




}