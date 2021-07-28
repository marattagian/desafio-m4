function main() {
  const headerParent = document.querySelector(".header-container")
  const footerParent = document.querySelector(".footer-container")
  addHeader(headerParent, "../public")
  addFooter(footerParent, "../public")
  
}

function addCard(params = {}) {
  const template = document.querySelector("#cards-to-copy")
  const clone = template.content.cloneNode(true)

  clone.querySelector(".card-info-title").textContent = params.title
  clone.querySelector(".card-info-description").textContent = params.description
  clone.querySelector(".card-link-project").href = params.url
  clone.querySelector(".card-image").src = params.imageUrl

  const cardsContainer = document.querySelector(".content__cards-container")
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

    return addCard(cardObject)
  })
}

async function requestSender() {
  const spaceId = ""
  const envId = ""
  const previewToken = ""
  let url = `https://preview.contentful.com/spaces/${spaceId}/environments/${envId}/entries?access_token=${previewToken}`

  const request = await fetch(url)
  const data = await request.json()
  showCards(data)
}


main()