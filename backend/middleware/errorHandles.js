const notFound = (req,res,next)=>{
    const error = new Error(`Not Found -  ${req.originalUrl}`);
    res.status(400);
    next(error);
};

// const errorHandle = (err, req,res, next)=>{
//     const statusCode = 
// }

module.exports =  {notFound}