//if else 
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun 
//eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

var number = prompt("sayı girin");
var hak = 0;
var deneme = 0;
var randomNumber = Math.floor(Math.random() * 10) + 1;


do {
    if (number < randomNumber) {
        hak++;
        alert("daha büyük sayı giriniz");
        number = prompt("sayi gir ulan")
    }
    else if (number > randomNumber) {

        hak++;
        alert("daha küçük sayı giriniz")
        number = prompt("sayi giriniz");
    }
    else if (number == randomNumber) {

        hak++;
        alert("Tebrikler " + (hak) +" .denemenizde bildiniz."+ "sayı :"+randomNumber);
        break;

    }
    
} while ( hak <5 && number != randomNumber) {

    alert("Hakkınız kalmadı. Tutulan sayı : " + randomNumber);

}