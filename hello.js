let a=[1,2,2,5,9];
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
{
    if(a[i]==a[j])
    {
        console.log("Duplicate values is : "+a[i]);
    }
}
}