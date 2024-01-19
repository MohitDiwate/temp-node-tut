const os=require('os');

console.log(os.userInfo()); //userInfo()

console.log(`Uptime is ${os.uptime()} seconds.`)

const currentOs={
    type:os.type(),
    releae:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);