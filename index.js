function main() {
  const headerParent = document.querySelector(".header-container")
  addHeader(headerParent)
  const footerParent = document.querySelector(".footer-container")
  addFooter(footerParent)
  const formParent = document.querySelector(".form-section")
  addForm(formParent)

  addSubmitListener(document.querySelector(".contact__form"))

  // const spaceId = ""
  // const envId = ""
  // const previewToken = ""
  // let url = `https://preview.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${previewToken}`

  // const request = await fetch(url)
  // const data = await request.json()
  // showCards(data)

}

function fillCardData(params) {
  const template = document.querySelector("#card-to-clone")
  const clone = template.content.cloneNode(true)

  clone.querySelector(".card__info-title").textContent = params.title
  clone.querySelector(".card__info-description").textContent = params.description
  clone.querySelector(".card__image").src = params.imageUrl

  const cardsContainer = document.querySelector(".services__cards-container")
  cardsContainer.appendChild(clone)
}

function showCards(jsonData) {
  console.log(jsonData)
  const data = jsonData.items
  const assets = jsonData.includes.Asset

  data.map(item => {
    const imageID = item.fields.image.sys.id
    const result = assets.filter(asset => asset.sys.id == imageID)

    const cardObject = {
      title: item.fields.title,
      description: item.fields.description,
      url: item.fields.url,
      imageUrl: result[0].fields.file.url,
    }

    return fillCardData(cardObject)
  })
}


main()