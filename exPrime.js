function pm(x) {
	
    if(x > 1)
		{
		for(let i=2;i<x;i++)
			{
			if(x%i==0) 
			{
				return false
			}
			return true
		}
	}
}
console.log(pm(8))
