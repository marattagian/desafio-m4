function main() {
  const headerParent = document.querySelector(".header-container")
  const footerParent = document.querySelector(".footer-container")
  addHeader(headerParent, "../public")
  addFooter(footerParent, "../public")
}

main()