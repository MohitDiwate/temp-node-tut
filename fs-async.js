const fs=require('fs');

fs.readFile('./Async/first.txt',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    let first=res;
    fs.readFile('./Async/second.txt',(err,res)=>{
        if(err){
            console.log(err);
            return
        }
        let second=res;
    fs.writeFile('./Async/result.txt',`Here is the result: ${first},${second}`,{flag:'a'},(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    })
    })
})