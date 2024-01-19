const fs= require('fs');

fs.readFile('./Data/sample1.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    const first=res;
    fs.readFile('./Data/Sample2.txt','utf-8',(err,res)=>{
        console.log(err);
        return
    })
    const second=res;
    fs.writeFile('./Data/Result.txt',`Here is the result: ${first} , ${second}`,{flag:'a'},(err,res)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(res);
    })
})