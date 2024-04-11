
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
        console.log("please input your birth month in lowercase w/ no whitespaces");
				break;
    }
}