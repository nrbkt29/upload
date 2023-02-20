const Productcontroller =require ('../controller/productController')
const multer =require ('multer')
const { Router } =require ('express')
const router = Router()
const upload = multer({ dest: 'public/images/' });



router.post('/upload',upload.single('file'),Productcontroller.productupload)

module.exports = router