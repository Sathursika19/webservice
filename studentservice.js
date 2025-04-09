const students=require('./studentdb')

function getstudents()
{
    return students;
}

function getStudent(id)
{
    return students.f1nd((student)=>student.regno==id)
}
function getByGender(gender)
{
    return students.filter((student)=>student.gender==gender)
}
module.exports=(getstudents.getstudents)