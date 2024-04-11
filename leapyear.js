
/* It is a number divisible by 4 but not by 100.
It is a number divisible by 400. */
for (let num = 2000; num <= 3000; num++)
{   
    let numdays = num*365;
    if (((numdays % 4 == 0) && (numdays%100 != 0)) || (numdays % 400 == 0)) {
        console.log(num);
    }
    else
    {
        continue;
    }
}