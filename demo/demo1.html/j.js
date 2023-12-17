var arr=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var count=0;
var x='a';
for(var i=0; i<arr.length; i++)
{
    if(arr[i]==x)
    {
        count++;
    }
}
console.log("a :"+count);