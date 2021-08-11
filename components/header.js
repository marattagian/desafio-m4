function addHeader(parentHeader, publicPath = "./public") {
  const homeURL = "https://marattagian.github.io/desafio-m4/"
  const contactoURL = `${homeURL}contacto/contacto.html`
  const portfolioURL = `${homeURL}portfolio/portfolio.html`
  const serviciosURL = `${homeURL}servicios/servicios.html`
  const headerElement = document.createElement("div")
  headerElement.innerHTML = `
  <header class="header">
    <a href="${homeURL}"><img src="${publicPath}/GianLogo.svg" class="header__logo"></a>
    <img src="${publicPath}/burger.svg" alt="" class="header__burguer">
    <div class="header__nav">
      <a href="${portfolioURL}" class="header__nav-link">Portfolio</a>
      <a href="${serviciosURL}" class="header__nav-link">Servicios</a>
      <a href="${contactoURL}" class="header__nav-link">Contacto</a>
    </div>
    <div class="header__modal">
      <img src="${publicPath}/closeX.svg" alt="" class="header__modal-close">
      <nav class="header__modal-nav">
        <a href="${portfolioURL}" class="header__modal-link">Portfolio</a>
        <a href="${serviciosURL}" class="header__modal-link">Servicios</a>
        <a href="${contactoURL}" class="header__modal-link">Contacto</a>
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