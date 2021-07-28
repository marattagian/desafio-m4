async function main() {
  const headerParent = document.querySelector(".header-container")
  const footerParent = document.querySelector(".footer-container")
  addHeader(headerParent, "../public")
  addFooter(footerParent, "../public")

  const spaceId = "twfbnrw5coxm"
  const envId = "master"
  const previewToken = "t1TMliybPN0nX5-IKkLdDLKkGlJeDClwLrLsW8zvRnM"
  let url = `https://preview.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${previewToken}`

  const request = await fetch(url)
  const data = await request.json()
  showCards(data)
}

function addCard(params) {
  const template = document.querySelector("#cards-to-copy")
  const clone = template.content.cloneNode(true)

  clone.querySelector(".card__info-title").textContent = params.title
  clone.querySelector(".card__info-description").textContent = params.description
  clone.querySelector(".card-link-project").href = params.url
  clone.querySelector(".card-link-project").textContent = params.link
  clone.querySelector(".card__image").src = params.imageUrl

  const cardsContainer = document.querySelector(".content__cards-container")
  cardsContainer.appendChild(clone)
}

function showCards(jsonData) {
  const data = jsonData.items
  const assets = jsonData.includes.Asset

  data.map(item => {
    const imageID = item.fields.projectImage.sys.id || " "
    const result = assets.filter(asset => asset.sys.id == imageID)


    if (imageID) {
      const cardObject = {
        title: item.fields.title,
        description: item.fields.description,
        link: item.fields.link,
        url: item.fields.url,
        imageUrl: result[0].fields.file.url,
      }

      addCard(cardObject)
    }
  })
}

async function requestSender() {
}

main()