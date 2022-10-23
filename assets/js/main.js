class Avocado {
    constructor(name, image, price) {
        this.name = name
        this.image = image
        this.price = price
    }
}

const avo1 = new Avocado ("Maluma has avocado", "assets/images/fuerte.png", 1.15)
appendAvocado(container, avo1)

const avo2 = new Avocado ("Maluma has avocado", "assets/images/maluma.png", 1.15)
appendAvocado(container, avo2)
