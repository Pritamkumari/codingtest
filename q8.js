 /*It can not be sorted as it is not array of object. It is a object with
 multiple same key values, In this case we can only read last id which 
 is 6rest other value will be override by last id value and value name. 
 But if we want to sort it we need to create it in array of object format 
 like below:- */

 var obj = [
    {id : 4, name :'abc'},
    {id : 10, name: 'ab2'},
    {id : 5, name : 'abc3'},
    {id : 6, name : 'abc5'}
]
 obj.sort(function(a,b){
     return a.id - b.id;
 });
for(var i=0; i<obj.length;i++)
{
    console.log(obj[i].id);
}
