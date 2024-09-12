import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.send("hii");
})

app.listen(3000,()=>{
    console.log("connected to 3000");
})