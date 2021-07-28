function main() {
  const headerParent = document.querySelector(".header-container")
  addHeader(headerParent, "../public")
  const footerParent = document.querySelector(".footer-container")
  addFooter(footerParent, "../public")
  const formParent = document.querySelector(".form-section")
  addForm(formParent)

  addSubmitListener(document.querySelector(".contact__form"))
}

main()
