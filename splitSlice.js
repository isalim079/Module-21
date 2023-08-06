let text = "Can you hear me? I don't think so. Just go away from me. Hope you like my word. Otherwise I can't do anything for you"
console.log(text.split(" ")); //.split() er maddhome amra kono sentence ke vaag kore felte pari. inverted comma er majhe space deoay jekhane jekhane sentence er space paice, oikhane oikhane break hoye new word create oorce ba space gulate giye split hoye gece.

console.log(text.split("."));     //amra j shudhu matro sentence er majher text gula alada korte pari ta noy, amra xhaile sob ee nijeder icchamoto customize korte pari. jemon ekhane inverted comma er majhe dot diyechi. jekhane jekhane se dot paice sekhane sekhane se ta alada kore diyeche. 


console.log(text.split(""));   //prottekta character alada korte inverted comma er majhe kono gap na diye just 2 ta inverted comma dite hobe. 

console.log(text.slice(2,8));     //slice() diye kono kichu katar jonno bebohar hoy. index 2 theke 8 er ag obdhi elements gula nibe. ei code e. jodi 2nd e 12 ditam, tobe index 12 porjonto elements nito index 2 theke.


console.log(text.substring(2,8));     //slice() er motoi same kaj kore.