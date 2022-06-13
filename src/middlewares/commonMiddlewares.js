
const mid= function ( req, res, next) {
    let data = req.headers;

    if(!req.headers.isfreeappuser) return res.send({msg:"request is missing a mandatory header"})
    if(!(req.headers.isfreeappuser=="true" || req.headers.isfreeappuser=="false") return res.send(msg:"this is not header of isfreeappuser")
    next()
}


module.exports.mid= mid
