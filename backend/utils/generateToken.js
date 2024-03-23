import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId , res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
      expiresIn : '60d'  
    })

    res.cookie("jwt",token,{
        maxAge: 60 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevent XSS attacks
        sameSite : "strict", //CSRF
        secure:false,
    });
};

export default generateTokenAndSetCookie