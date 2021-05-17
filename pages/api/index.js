const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

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

function filter() {
    var language = 'C#'
    var dados = getDados()
    var qt = dados.length
    var dadosF = {}
    for (var i = 0; i < qt; i++) {
        if (language == dados[i].language){
            dadosF[dados[i].id] = {descripition:dados[i].description
                    , name: dados[i].full_name
                    , avatar: dados[i].owner.avatar_url
                    , created_at: dados[i].created_at
                }
        }
    }
    return dadosF
}


function Api(request, response){
    response.json(filter())
}

export default Api