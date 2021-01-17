
const express = require('express')
// modulos internos
const news = require('./modules/news.js') // importamos el modulo
const app = express() // es lo que haciamos antes createServer
const port = 3000

// midelware
app.use(express.static('public'));
// para trabajar cpn PUG
app.set('view engine', 'pug');
app.set('views','./views');


app.get ('/', news.getHome)
app.get ('/About_Esto_acaba_de_empezar', news.getAbout)
app.get ('/Location_Ni_te_imaginas_lo_que_te_espera', news.getLocation)
app.get ('/Mission_Morirnos_eso_hacemos', news.getMission)
app.get ('/Contact_Llama_llama_que_veras_que_gracia', news.getContact)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
