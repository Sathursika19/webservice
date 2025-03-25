const express = require('express');
const app =express();
const port=4001;

let students=
  [
    {regno:'2021/ict/103',name:'hiii',age:'21',course:'it'},
	{regno:'2021/ict/102',name:'hel',age:'22',course:'it'},
	{regno:'2021/ict/103',name:'hpp',age:'23',course:'it'}
  ]

  app.get('/stu',(req,res)=>{
    res.send(students);
  });
  app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    const result=students.map((students)=>students.id==id)
    res.send(result);
});
app.get('/students/gender/:gen',(req,res)=>{
    const gender=req.params.gender
    const result=students.filter((student)=>student.id==id)
    res.send(result);
})


app.get('/',(req,res)=>{
    res.send('hello express js');
    });
    app.get('/msg',(req,res)=>{
    res.send('hello it students');
    });
    app.listen(port,()=>{console.log(`Server is running on ${port}`);});