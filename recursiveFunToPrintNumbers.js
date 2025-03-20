
function Recursive(n) {
	
	if(n == 0) {
		return 1
	}
	else {
		Recursive(n-1)
		console.log(n)
	}
	
}
Recursive(10)