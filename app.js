const exp=require('express');
const app=exp();
const path=require('path');
const file=require('fs');
const Port=3000;
const cors = require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    const path1=path.join(__dirname,'/Formapi/formData.json');
    let gdata=file.readFileSync(path1,'utf-8');
    res.statusCode=200;
    res.json(JSON.parse(gdata));
})
app.listen(process.env.PORT || Port,()=>{
    console.log('run successfully')
});