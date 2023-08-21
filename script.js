let arr=[-1,2,1,-4];
let target=1;
function threeSum(arr, target) {
// write your code here
	let ans=1;
	for(let i=0 ;i<arr.length; i++)
		{
			for(let j=0 ;j<arr.length ;j++)
				{
					for(let k=0;k<arr.length ;k++)
						{
							let a= arr[i]+arr[j]+arr[k] ;
							if(ans<a)
							{
								ans=a;
							}
						}
				}
		}
	console.log(ans); 
  
}
threeSum(arr,target);

module.exports = threeSum;
