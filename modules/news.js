const fetch = require('node-fetch') // hay que instalarlo para trabajar con el fetch
const apiKeyEjemplo = '733f724259904120aba988be2b5dc99d'; // noticias
const apyKeyPelis = '184ad13a' // pelis
const request = require('request'); // hay que instalarlo para hacer el post


// home, about, location, mission, contact

exports.getHome = (req, res) => {
    res.render('index', { name: "NODEjarás de  llorar...Bienvenido"})
}
exports.getAbout = (req, res) => {
    res.render('About_Esto_acaba_de_empezar')
}

exports.getLocation = (req, res) => {
    res.render('Location_Ni_te_imaginas_lo_que_te_espera')
}
// get y post para obtener las pelis en un buscador
exports.getMission = (req, res) => {
    res.render('Mission_Morirnos_eso_hacemos')
}
exports.postMission = ('Mission_Morirnos_eso_hacemos', function (req, res) {
    let title = req.body.peli; // name del form
    let type = req.body.type; // name del form
    let url = `http://www.omdbapi.com/?type=${type}&t=${title}&apikey=${apyKeyPelis}` // las incluyo en la url para obtener los datos que mete el usuario
    request(url, function (err,response,body) { // parámetros necesarios, body es del body-parser
  
        if (err) {
            res.render('Mission_Morirnos_eso_hacemos', {result: 'Please, try again'});
        } else {
            let movies = JSON.parse(body) // todos los datos del JSON, método body-parser

            if (movies.Title === undefined || movies.Type === undefined) {
                res.render('Mission_Morirnos_eso_hacemos', {result: 'Please, enter any data'});
            } else {
                let movieTitle = movies.Title
                let movieType = movies.Type
                let movieDirector = movies.Director
                let movieYear = movies.Year
                let movieLang = movies.Language
                res.render('Mission_Morirnos_eso_hacemos', {movie: movieTitle, type:movieType, director:movieDirector, year:movieYear, lang:movieLang}); // pinta en el pug cada una de estas variables

            }
        }
    });
});

// fetch para que pinte una noticia segun el id que le metas en la url. OJO! SE LO TIENES QUE METER A MANO
exports.getContact = (req, res) => {
    console.log(req.params.id) // sale vacío porque no lee nada hasta que no le meta a mano en la url el id
    if (req.params.id) { // DUDA
   fetch(`http://newsapi.org/v2/everything?q=politics&from=2021-01-15&sortBy=publishedAt&apiKey=${apiKeyEjemplo}`)
    .then(data => data.json()) 
    .then(news => { 
        let id = req.params.id // DUDA
       res.render('Contact_Llama_llama_que_veras_que_gracia', {
        titulo:news.articles[req.params.id].title, //DUDA
            contenido:news.articles[req.params.id].content,
            url:news.articles[req.params.id].urlToImage
       })
    })
    .catch(e => console.log(e))
    }else {
        res.render('Contact_Llama_llama_que_veras_que_gracia',{
            titulo:'Página General de Noticias',
            contenido:'En estos momentos no podemos mostrarle ninguna noticia. Lea un libro. Gracias'
        })
    }
    
}



