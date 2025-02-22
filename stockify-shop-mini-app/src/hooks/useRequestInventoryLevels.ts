async function useRequestInventoryLevels() {
  // The example route. Adjust domain/path as needed!
  const url = 'https://christopher-racks-cradle-acrylic.trycloudflare.com/'

  const response = await fetch(url, {
    method: 'POST', // or "GET"
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

// Then somewhere, you call requestProductsFromMyApp():
useRequestInventoryLevels()
  .then(data => {
    // data.products from your server
    console.log('Products from my app route:', data.products)
  })
  .catch(error => {
    console.error('Error calling my app route:', error)
  })
