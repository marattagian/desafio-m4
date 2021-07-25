function addForm(formParent) {
  const formElement = document.createElement("div")
  formElement.innerHTML = `
  <section class="contact-container">
    <div class="contact">
      <h2 class="contact__title">Contacto</h2>
      <form action="" class="contact__form"></form>
      <div class="contact__form">
        <label for="">
          <h4 class="contact__form--label">NAME</h4>
          <input type="text" class="contact__form--input">
        </label>
        <label for="">
          <h4 class="contact__form--label">EMAIL</h4>
          <input type="email" class="contact__form--input">
        </label>
        <label for="">
          <h4 class="contact__form--label">MESSAGE</h4>
          <textarea name="" id="" class="contact__form--input"></textarea>
        </label>
      </div>
    </div>
  </section>
  `
  formParent.appendChild(formElement)
}