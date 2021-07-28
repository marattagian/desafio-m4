function addForm(formParent) {
  const formElement = document.createElement("div")
  formElement.innerHTML = `
  <section class="contact-container">
    <div class="contact">
      <h2 class="contact__title">Contacto</h2>
      <form action="" class="contact__form">
        <div class="contact__form">
          <label for="">
            <h4 class="contact__form--label">NAME</h4>
            <input type="text" name="name" class="contact__form--input">
          </label>
          <label for="">
            <h4 class="contact__form--label">EMAIL</h4>
            <input type="email" name="email" class="contact__form--input">
          </label>
          <label for="">
            <h4 class="contact__form--label">MESSAGE</h4>
            <textarea name="message" id="" class="contact__form--input"></textarea>
          </label>
          <button type="submit" class="contact__form--input submit-button">Enviar</button>
        </div>
      </form>
    </div>
  </section>
  `
  formParent.appendChild(formElement)
}

function addSubmitListener(formElement) {
  const url = "https://apx-api.vercel.app/api/util/dwf"
  formElement.addEventListener("submit", async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries())
    const petitionContent = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    const rawResponse = await fetch(url, petitionContent)
    const content = await rawResponse.json()
    console.log(content)
  })
}