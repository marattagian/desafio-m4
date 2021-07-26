function addHeader(parentHeader, publicPath = "./public") {
  const headerElement = document.createElement("div")
  headerElement.innerHTML = `
  <header class="header">
    <img src="${publicPath}/marce.svg" class="header__logo">
    <img src="${publicPath}/burger.svg" alt="" class="header__burguer">
    <div class="header__nav">
      <a href="" class="header__nav-link">Portfolio</a>
      <a href="" class="header__nav-link">Servicios</a>
      <a href="" class="header__nav-link">Contacto</a>
    </div>
    <div class="header__modal">
      <img src="${publicPath}/closeX.svg" alt="" class="header__modal-close">
      <nav class="header__modal-nav">
        <a href="" class="header__modal-link">Portfolio</a>
        <a href="" class="header__modal-link">Servicios</a>
        <a href="" class="header__modal-link">Contacto</a>
      </nav>
    </div>
  </header>
  `
  parentHeader.appendChild(headerElement)

  const burguerMenu = document.querySelector(".header__burguer")
  const modalClose = document.querySelector(".header__modal-close")

  burguerMenu.addEventListener("click", e => {
    document.querySelector(".header__modal").style.display = "initial"
  })

  modalClose.addEventListener("click", e => {
    document.querySelector(".header__modal").style.display = ""
  })
}