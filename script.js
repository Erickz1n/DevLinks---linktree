function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem

    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.jpg')
        img.setAttribute('alt', 'Foto de Erick Marcos de óculos com cabelo tamanho médio em um lugar com led roxo')
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.jpg')
        img.setAttribute('alt', 'Foto de Erick Marcos sério, usando camisa social azul, de oculos e fundo roxo')
    }

}