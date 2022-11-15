let express=require("express")
let app=express()
app.use(express.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS,PUT,PATCH,DELETE,HEAD"
    )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    )
    next()
})
const port = process.env.PORT || 2410;
app.listen(port,()=> console.log(`Node app listening on port ${port}!`))

let axios=require("axios");
let histories=[]

app.post("/get",function (req,res) {
    let body=req.body
    console.log(body)
    let fetchurl=body.fetchurl
    histories.unshift({fetchurl:fetchurl,method:body.method})
    if (body.method=="get") {
        console.log("Hello")
    axios.get(fetchurl)
    .then((response)=>{
        let header=response.headers;
        console.log(header)
        res.send([response.data,header]);
    })
    .catch(function (error) {
        if (error.response) {
        let {status,statusText}=error.response;
        console.log(status,statusText,"get");
        res.send(error) 
        }
        else{
            console.log("Error")
            res.send(error);
        }
    })
    }
    if (body.method=="post") {
    let data=body.data
    let data1=JSON.parse(data)
    console.log(data1)
    axios.post(fetchurl,data1)
    .then((response)=> {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function (error) {
        if (error.response) {
            let {status,statusText}=error.response
        console.log(status,statusText,"post");
        res.send(error)
        }
        else{
            res.status(404).send(error);
        }
        
    })
    }

    if (body.method=="put") {
        let data=body.data
        console.log(data,fetchurl)
        axios.put(fetchurl,data)
        .then((response)=> {
            console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                let {status,statusText}=error.response
            console.log(status,statusText,"put");
            res.send(error)
            }
            else{
                res.status(404).send(error);
            }
            
        })
        }
        if (body.method=="delete") {
        let data=body.data
        console.log(data,fetchurl)
        axios.delete(fetchurl)
        .then((response)=> {
            console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                let {status,statusText}=error.response
            console.log(status,statusText,"delete");
            res.send(error)
            }
            else{
                res.status(404).send(error);
            }
            
        })
        }
})
app.get("/history",function (req,res) {
        res.send(histories)
})
app.post("/clearhistory",function(req,res){
        let body=req.body
        histories=[]
        res.send(histories)
})







