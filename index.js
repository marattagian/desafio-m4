async function main() {
  const headerParent = document.querySelector(".header-container")
  addHeader(headerParent)
  const footerParent = document.querySelector(".footer-container")
  addFooter(footerParent)
  const formParent = document.querySelector(".form-section")
  addForm(formParent)

  addSubmitListener(document.querySelector(".contact__form"))

  const spaceId = "twfbnrw5coxm"
  const envId = "master"
  const previewToken = "t1TMliybPN0nX5-IKkLdDLKkGlJeDClwLrLsW8zvRnM"
  let url = `https://preview.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${previewToken}`

  const request = await fetch(url)
  const data = await request.json()
  showCards(data)

}

function fillCardData(params) {
  const template = document.querySelector("#container-to-copy")
  const clone = template.content.cloneNode(true)

  clone.querySelector(".card__info-title").textContent = params.title
  clone.querySelector(".card__info-description").textContent = params.description
  clone.querySelector(".card__image").src = params.imageUrl

  const cardsContainer = document.querySelector(".services__cards-container")
  cardsContainer.appendChild(clone)
}

function showCards(jsonData) {
  const data = jsonData.items
  const assets = jsonData.includes.Asset

  data.map(item => {
    const imageID = item.fields.logo.sys.id || ""
    const result = assets.filter(asset => asset.sys.id == imageID)

    if (imageID) {
      const cardObject = {
        title: item.fields.title,
        description: item.fields.description,
        imageUrl: result[0].fields.file.url,
      }

      return fillCardData(cardObject)
    }

  })
}


main()