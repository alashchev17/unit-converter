document.addEventListener('DOMContentLoaded', () => {
  const celsiusInput = document.getElementById('celsius')
  const fahrenheitInput = document.getElementById('fahrenheit')
  const milesInput = document.getElementById('miles')
  const kilometersInput = document.getElementById('kilometers')
  const historyContent = document.getElementById('historyContent')
  const history = document.getElementById('history')

  const convertCtoF = () => {
    const celsius = parseFloat(celsiusInput.value)
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9) / 5 + 32
      updateHistory(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`)
      celsiusInput.value = ''
    }
  }

  const convertFtoC = () => {
    const fahrenheit = parseFloat(fahrenheitInput.value)
    if (!isNaN(fahrenheit)) {
      const celsius = ((fahrenheit - 32) * 5) / 9
      updateHistory(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`)
      fahrenheitInput.value = ''
    }
  }

  const convertMtoK = () => {
    const miles = parseFloat(milesInput.value)
    if (!isNaN(miles)) {
      const kilometers = miles * 1.60934
      updateHistory(`${miles} miles = ${kilometers.toFixed(2)} km`)
      milesInput.value = ''
    }
  }

  const convertKtoM = () => {
    const kilometers = parseFloat(kilometersInput.value)
    if (!isNaN(kilometers)) {
      const miles = kilometers / 1.60934
      updateHistory(`${kilometers} km = ${miles.toFixed(2)} miles`)
      kilometersInput.value = ''
    }
  }

  const updateHistory = (text) => {
    let historyArray = JSON.parse(localStorage.getItem('calculationHistory')) || []
    historyArray.push(text)
    localStorage.setItem('calculationHistory', JSON.stringify(historyArray))
    addHistoryItem(text)
  }

  const renderHistory = () => {
    const historyArray = JSON.parse(localStorage.getItem('calculationHistory')) || []
    const historyList = document.getElementById('historyList')
    historyList.innerHTML = ''

    if (historyArray.length === 0) {
      const li = document.createElement('li')
      li.textContent = 'No calculations yet.'
      historyList.appendChild(li)
    } else {
      historyArray.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        historyList.appendChild(li)
      })
    }

    if (!history.classList.contains('show')) {
      setTimeout(() => {
        history.classList.add('show')
      }, 500)
    }
  }

  const addHistoryItem = (text) => {
    const historyList = document.getElementById('historyList')

    // Remove "No calculations yet." message if it exists
    if (historyList.children.length === 1 && historyList.children[0].textContent === 'No calculations yet.') {
      historyList.innerHTML = ''
    }

    const li = document.createElement('li')
    li.textContent = text
    li.classList.add('hide')
    historyList.appendChild(li)
    setTimeout(() => {
      li.classList.remove('hide')
    }, 300)
  }

  const loadHistory = () => {
    renderHistory()
  }

  document.getElementById('convertCtoF').addEventListener('click', convertCtoF)
  document.getElementById('convertFtoC').addEventListener('click', convertFtoC)
  document.getElementById('convertMtoK').addEventListener('click', convertMtoK)
  document.getElementById('convertKtoM').addEventListener('click', convertKtoM)

  celsiusInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertCtoF()
  })

  fahrenheitInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertFtoC()
  })

  milesInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertMtoK()
  })

  kilometersInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertKtoM()
  })

  loadHistory()
})
