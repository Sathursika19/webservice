const msg = ()=> {console.log{"Hello JS"}}
msg()

const add = (a,b) => {return a+b}
console.log{add(4,5)}

//default parameter 
const mult = (a,b = 2) => {return a*b}
console.log(mult(4,5))
console.log(mult(4))

//Rest parameter
const mysum = (...n) => 
{
	return n.reduce((t,i)=>t = t + i)
}

console.log(mysum(4,5,6,89,2)) 

//callback function
//a function passed as an argument

const greet = (msg,fun) => 
{
	console.log("hi..."+msg)
	fun()
}
const myname = (name) => (console.log("My name is "+name))
greet("Good morning",()=>{console.log(myname("My name is Rajeevni")})

const multtwo = (n) => n*2

const myarr = (mul,...n) => 
{
	n.forEach((i)=>console.log(mul(i)))
}

console.log(myarr(multtwo,4,5,6,8,2))