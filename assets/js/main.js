const avocados = await fetchAvos()
console.log(avocados.data)

for (const avocado of avocados.data) {
    appendAvocado(container, avocado)
}
