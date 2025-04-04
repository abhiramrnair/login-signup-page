const jwt=require('jsonwebtoken');
const ensureAuth=(req,res,next)=>{
    const auth=req.headers['authorization'];
    if(!auth) {
        return res.status(403).json({message: 'unauthorized, JTW token required'});
    }
    try{
        const decoded=JsonWebTokenError.verify(auth, process.env.JWT_SEC);
        req.user=decoded;
        next();
    } catch(err){
        return res.status(403).json({message: 'unauthorized, JWT token expired or wrong'});
    }
}

module.exports=ensureAuth;