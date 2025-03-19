//Array

let a = [1,23,45,234,2]

for(let i = 0; i < a.length; i++)
{
	console.log(a[i])
	
}

console.log(a)

 a.forEach((n) => 
{
   console.log(n)
})
	
//find the maximum num
 let max = 0
 a.forEach((n) =>
 {
	 (max<n) && (max = n)
 })

//nested Array[[1,2,30],[5,6],[8,5,3]]
let b = [[1,2,30],[5,6],[8,5,3]]

b.forEach((n) => 
{
	n.forEach((i) =>
	{
		console.log(i)
	})
	
})

/* a = [4,5,6,3,7]
b = [8,3,2,1,5]
//find the common elements between a and b */




/* let c = [4,5,6,3,7]
let d = [8,3,2,1,5]

c.forEach((n) =>
{
	n.forEach((i) =>
	{
		console.log(i)
	})
})

d.forEach((n) =>
{
	n.forEach((j) =>
	{
		console.log(j)
	})
})

if(c[i] == d[j])
{
	console.log(a[i])
} */


/* for(let i = 0; i < a.length; i++)
{
	for(let j = 0; j < b.length; j++)
	{
		if(c[i] == d[j])
		{
			console.log(a[i])
		}
	}
} */

/* arr = [1,2,3,4,5,6]
target = 7
write the code to find the all pairs that sum up to the target */

let arr = [1,2,3,4,5,6]
for(let i = 0; i < arr.length; i++)
{
	for(let j = 0; j <= i; j++)
	{
		if(arr[i]+arr[j]==7)
		{
			console.log(arr[i])
			console.log(arr[j])
		}
	}
}


/* [4,8,3,4,3,2,1,8,4]
find the most frequent element in the array */


arr1 = ['a','b','c']
console.log(arr1)
arr1.push('e')
console.log(arr1)
arr1.pop()
console.log(arr1)

/* reversed the array using push and pop
a b c d -> d c b a */

let arr2 = ['a','b','c','d']
for(let i = arr2.length - 1; i >= 0; i--)
{
	console.log(arr2.pop())
}

/* JSON
[key:value] */

let student = {regno:"2021/ICT/103",name:"Thaksi",age:23,course:"IT",skills:['java','Js','C++']}
console.log(student)
console.log(student.name)

let students =[
{regno:"2021/ICT/103",name:"Thaksi",age:23,course:"IT",skills:['java','Js','C++']},
{regno:"2021/ICT/92",name:"Sathu",age:23,course:"IT",skills:['java','Js','C++']},
{regno:"2021/ICT/91",name:"Rajeevni",age:23,course:"IT",skills:['java','Js','C++']}
]

console.log(students)


