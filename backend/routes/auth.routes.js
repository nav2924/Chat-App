import express from  "express";

const router = express.Router();

router.get("/signup",async(req, res) => {
   try{
    const {fullName , username ,password , confirmPassword,gender} = req.body;
     
   }catch(error){

   }
});

router.get("/login",(req , res) => {
    res.send("loginUser");
});

router.get("/logout",(req , res) => {
    res.send("logoutUser");
});

export default router;