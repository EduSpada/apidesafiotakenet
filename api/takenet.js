function takenet(request, response) {
    //const dynamicDate = new Date();
    const dadosTake = await fetch("https://api.github.com/users/takenet/repos");
    const dadosJson = await dadosTake[1].json();

    response.json({
        dados: dadosJson

    })
}
export default takenet;