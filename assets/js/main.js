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



////////////////////////////////////////////////////////////////////////////////////////////



  const delay = 3000; //ms

  const slides = document.querySelector(".slides");
  const slidesCount = slides.childElementCount;
  const maxLeft = (slidesCount - 1) * 100 * -1;

  let current = 0;

  function changeSlide(next = true) {
    if (next) {
      current += current > maxLeft ? -100 : current * -1;
    } else {
      current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
  }

  let autoChange = setInterval(changeSlide, delay);
  const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
  };

  // Controls
  document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
    restart();
  });

  document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
    restart();
  });
