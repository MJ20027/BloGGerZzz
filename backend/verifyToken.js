// const jwt=require('jsonwebtoken')

// const verifyToken=(req,res,next)=>{
//     const token = localStorage.getItem("token");
//     // const token=req.cookies.uid;

//     console.log(token)
//     if(!token){
//         return res.status(401).json("You are not authenticated!")
//     }
//     jwt.verify(token, "fbsdfbkjfbkjxzfbjkxzbf", async (err, data) => {
//       if (err) {
//         return res.status(403).json("Token is not valid!");
//       }

//       req.userId = data._id;

//       console.log("passed")

//       next();
//     });
// }

// module.exports=verifyToken