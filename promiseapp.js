const fs=require('fs').promises;
const readFile=(filepath)=>{
    return fs.readFile('file.txt','utf8')
}
readFile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err);
})
