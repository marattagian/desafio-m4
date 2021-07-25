function addFooter(footerParent) {
  const footerElement = document.createElement("div") 
  footerElement.innerHTML = `
  <footer class="footer">
    <img src="./public/marce.svg" class="footer__logo">
    <div class="footer__social-container">
      <div class="footer__social-media">
        <a href="" class="social-link">Instagram</a>
        <img src="./public/instagram.svg" alt="" class="social-logo">
      </div>
      <div class="footer__social-media">
        <a href="" class="social-link">Linkedin</a>
        <img src="./public/linkedin.svg" alt="" class="social-logo">
      </div>
      <div class="footer__social-media">
        <a href="" class="social-link">GitHub</a>
        <img src="./public/github.svg" alt="" class="social-logo">
      </div>
    </div>
  </footer>
  `
  footerParent.appendChild(footerElement)
}