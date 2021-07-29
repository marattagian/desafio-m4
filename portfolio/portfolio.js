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

  const result = data.filter(item => item.fields.projectImage)
  result.map(item => {
    const fields = item.fields

    const imageID = fields.projectImage.sys.id
    const image = assets.find(asset => asset.sys.id == imageID)

    return addCard({
      title: fields.title,
      description: fields.description,
      url: fields.url,
      link: fields.link,
      imageUrl: image.fields.file.url
    })
  })
}

main()