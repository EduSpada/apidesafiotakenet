function takenet(request, response) {
    //const dynamicDate = new Date();
    const dadosTake = await fetch("https://api.github.com/users/takenet/repos");
    //const dadosJson = await dadosTake.json();

    response.json({
        dados: dadosTake

    })
}
export default takenet;