const xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
  console.log(xhr.response)
})

xhr.open('GET', 'https://supersimplebackend.dev/greeting')
xhr.send()

async function displayGreeting () {
await fetch('https://supersimplebackend.dev/greeting').then((response) => {
  console.log (response.text())
})
}
displayGreeting()

async function sendGreeting () {
  const send = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Monisola'
    })
  })
  console.log(send.text())
}
sendGreeting()

fetch('https://amazon.com').then((response) => {
  console.log(response.text())
}).catch((error) => {
  console.log("you can't access this space")
})

 
try {
  const response = fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    }
  })
  //console.log(response.status)

  if (response.status >= 400) {
    throw response
  }

} catch (error) {
  console.log(error)

  let errorHandling = async () => {
    if (error.status === 400) {
      let err = await error.json()
      console.log(err)
    } else console.log('Network error. Please try again later.')
  }

  errorHandling()
  //console.log('expected error. do not try again.')
  
}