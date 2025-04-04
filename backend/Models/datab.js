const mongoose=require('mongoose');

const mong_url=process.env.MONG_CONN;

mongoose.connect(mong_url).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log('DB not connected, error');
})

    

