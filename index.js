const  express = require("express")
const app = express()
const port = 3000
const multer = require("multer")


// img upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "_" + file.
      originalname
      cb(null,name)
    },
  })
  
  const upload = multer({ storage: storage })

app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname + "/./index.html")
})

app.post("/register", upload.single("image"),(req,res)=>{
    res.status(200).send("file is uploaded")
})

app.listen(port,()=>{
    console.log(`Server run successfully at http://localhost:${port}`)
}) 