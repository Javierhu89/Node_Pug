// home, about, location, mission, contact

exports.getHome = (req, res) => {
    res.render('index', {name:"NODEjarás de  llorar...Bienvenido", desc: "llora"})
}
exports.getAbout = (req, res) => {
    res.render('About_Esto_acaba_de_empezar')
}
exports.getLocation = (req, res) => {
    res.render('Location_Ni_te_imaginas_lo_que_te_espera')
}
exports.getMission = (req, res) => {
    res.render('Mission_Morirnos_eso_hacemos')
}
exports.getContact = (req, res) => {
    res.render('Contact_Llama_llama_que_veras_que_gracia')
}