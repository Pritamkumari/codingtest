let array = [1,0,1,0,0,0,1,0,0,1];
var maxOnce = 0;
var currentOnce = 0;
for (let i=0; i<array.length; i++)
{
    if(array[i] == 1)
    {
        currentOnce += 1;
    }
    else if(currentOnce > maxOnce)
    {
        maxOnce = currentOnce;
        currentOnce = 0;
    }
    else
    {
        currentOnce = 0;
    } 
}
console.log(maxOnce);