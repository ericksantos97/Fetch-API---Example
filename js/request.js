// Url for test > http://transparencia.portalfacil.com.br/api/clientes

// OLD CODE
const getData = async () => {
    const url = document.querySelector(['input'])
    const code = document.querySelector('#results')
    const select = document.querySelector('#method')
    const method = select.value

    if (url.value) {
        function reqListener() {
            var data = JSON.parse(this.responseText)
            code.innerHTML = JSON.stringify(data)
        }

        var req = new XMLHttpRequest()
        req.onload = reqListener
        req.open(method, url.value, true)
        req.send()
    } else {
        code.innerHTML = 'Please, enter a url for request data'
    }
}

//CURRENT CODE 
const getData = async () => {
    const url = document.querySelector(['input'])
    const code = document.querySelector('#results')
    const select = document.querySelector('#method')
    const method = select.value

    if (url.value) {
        code.innerHTML = await fetch(url.value, { method }).then(res => res.text()).catch(error => error)
    } else {
        code.innerHTML = 'Please, enter a url for request data'
    }
}