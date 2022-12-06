const hotelimages=[
    {
        id:1,
        imageSrc:"./assets/img/Rectangle 25.png"
    },
    {
        id:2,
        imageSrc:"./assets/img/Rectangle 31.png"
    },
    {
        id:3,
        imageSrc:"./assets/img/Rectangle 31.png"
    },
    {
        id:4,
        imageSrc:"./assets/img/Rectangle 32.png"
    }
]



const ContainerOfImages = document.querySelector(".hotel-pics .hotel-pics-1")

for (const image of hotelimages) {
    renderImagesCard(image)
}




function renderImagesCard(image) {
    const picsdiv = document.createElement('div')
    picsdiv.classList.add('pics')
    ContainerOfImages.appendChild(picsdiv)
    picsdiv.outerHTML = getImageCardMarkup(image)
  }

  function getImageCardMarkup(image) {
    return `
      <div class="pics">
      
           <img src="${image.imageSrc}" alt="">
           
      </div>
    `
  }