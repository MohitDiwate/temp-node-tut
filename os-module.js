const os=require('os');

console.log(os.userInfo());

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    type:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);