const fs = require('fs');
class Productcontroller {

    static productupload = (req,res)=>{
        const oldPath = req.file.path;
        const newPath = 'public/images/' + req.file.originalname;
        fs.rename(oldPath, newPath, err => {
          if (err) throw err;
          res.send('Image uploaded successfully');
        });
    }
    
}


module.exports= Productcontroller