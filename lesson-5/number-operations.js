// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

firstNum=prompt("1. sayıyı giriniz.");
secondNum=prompt("2. sayıyı giriniz.");
let maxNum=Math.max(firstNum,secondNum);
document.write("Max: "+Math.max(firstNum,secondNum)+"<br>");
document.write("Min: "+Math.min(secondNum,firstNum)+"<br>");
document.write("Max Sqrt: "+Math.sqrt(Math.max(firstNum,secondNum))+"<br>");
document.write("max sqrt ceil: "+Math.ceil(Math.sqrt(Math.max(firstNum,secondNum)))+"<br>");
document.write("min abs: "+Math.abs(Math.min(secondNum,firstNum))+"<br>");
document.write("pow: "+Math.pow(Math.min(firstNum,secondNum),Math.max(firstNum,secondNum))+"<br>");