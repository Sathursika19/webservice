const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
const results=studentService.getstudents()
if(results)
{
    res.status(200).json(results)
}
else
{
    res.status(404).send("Sorry,no Data Found !")
}
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    const results=studentService.getStudent(id)
    if(results)
    {
        res.status(200).json(results)
    }
    else
    {
        res.status(404).send("Sorry, No data Found !")
    }
})
module.exports=router