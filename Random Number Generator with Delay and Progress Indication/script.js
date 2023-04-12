let delay = 3;
setInterval(()=>{
    console.log(`time remaining ${delay}...`);
    delay--;
},1000);
setInterval(()=>{
    console.log(Math.random());
},delay*1000);