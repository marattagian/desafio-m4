function main() {
  const headerParent = document.querySelector(".header-container")
  addHeader(headerParent)
  const footerParent = document.querySelector(".footer-container")
  addFooter(footerParent)
  const formParent = document.querySelector(".form-section")
  addForm(formParent)

  addSubmitListener(document.querySelector(".contact__form"))
}

main()