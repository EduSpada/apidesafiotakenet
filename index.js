const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

function doGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function getDados() {
    let data = doGet("https://api.github.com/users/takenet/repos");
    let cards = JSON.parse(data);
    return cards
}

function filter(language) {
    var dados = getDados()
    var qt = dados.length
    var dadosF = {}
    var chave = 0
    for (var i = 0; i < qt; i++) {
        if (language == dados[i].language){
            chave++
            chaveId = "id"+chave
            dadosF[dados[i].id] = {descripition:dados[i].description
                    , name: dados[i].full_name
                    , avatar: dados[i].owner.avatar_url
                    , created_at: dados[i].created_at
                }
        }
    }
    return dadosF
}

app.get('/', (req, res) => {
    return res.json(filter('C#'))
})

app.listen(23654, () => {
    console.log('Express started at http://localhost:23654')
})