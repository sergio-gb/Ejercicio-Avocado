//===================================================================== ARTICULOS =======//
const container = document.querySelector("#app")


function appendAvocado(container, avocado) {
  
  const articulo = document.createElement("article")
  const box = document.createElement("div")
  box.classList.add("text")

  
  const image = document.createElement("img") 
  image.src = avocado.image

  const name = document.createElement("h4")
  name.textContent = avocado.name

  const price = document.createElement("p")
  price.textContent = avocado.price


  articulo.appendChild(image)
  articulo.appendChild(box)
  box.appendChild(name)
  box.appendChild(price)
  container.appendChild(articulo)  
}


