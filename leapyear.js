
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

let userinput = "february";

let dictionary1 = {
    "january" : "♑Capricorn",
	"february" : "♒Aquarius",
	"march" : "♓Pisces",
	"april" : "♈Aries",
	"may" : "♉Taurus",
	"june" : "♊Gemini",
	"july" : "♋Cancer",
	"august" : "♌Leo",
	"september" : "♍Virgo",
	"october" : "♎Libra",
	"november" : "♏Scorpio",
	"december" : "♐Sagittarius",    
}

/* O(n) time complexity */
let a = true;
while (a) {   
    for (let property in dictionary1) {
        if (userinput == property)
        {
            console.log("your horoscope is... ", dictionary1[userinput]);
            a = false;
        }
        else
        {
            continue;
        }
    }
    if (a == false)
    {
        break;       
    }
    else
    {
        console.log("please input your month in lowercase w/ no whitespaces");
				break;
    }
}