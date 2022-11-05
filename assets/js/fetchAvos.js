// ? async: indica que es asíncrono
async function fetchAvos() {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const data = await response.json()
  return data
}
