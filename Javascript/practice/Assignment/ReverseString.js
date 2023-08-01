const str = "Hey World";
function reverseStr(str)
{
    const reverseStr = str.split('').reverse().join('');
  console.log(reverseStr);
}
setTimeout(() =>reverseStr(str),2000);
