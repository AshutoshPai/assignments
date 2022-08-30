import express from "express";
import axios from "axios";

const PORT = 3000

const app = express();

app.get('/', (req,res)=>{
    res.send("API endpoint: /getGithubUser/userid")
})

app.get('/getGithubUser/:uid', (req,res)=>{

    console.log("req.params.uid : ", req.params.uid)
    const uid = req.params.uid
    const githubUrl = `https://api.github.com/users/${uid}` 
    console.log("githubUrl : ", githubUrl)
    axios.get(githubUrl).then(response => {
        const responseJSON = response.data;
        return res.status(200).json({ source: 'Docker Microservice', ...responseJSON, })    
    })
    .catch(err => { return res.json(err)} )
})

app.listen(PORT, () => {
    console.log(`Application started at ${PORT}`);
})