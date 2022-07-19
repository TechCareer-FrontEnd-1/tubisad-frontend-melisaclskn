// //hamit h***t
// var data=prompt("adınızı girin");

// // for (let index = 0; index < data.length; index++) {
   
    
// // }

// // function myfunction(data){
// //    var son= data.length();
// //    console.log(son);
// //    var data2=data.substring(0,son);
// //    console.log(data2);
// //    var data3=data2.concat(data2)
// //    var data2= data2.replace(data3,"*");
// // return data2
// // }

// const str = 'best';

// const replaced = 't' + str.substring(1);
// console.log(replaced); // test



// console.log( myfunction(data));


// var number=prompt("sayi giriniz");
// if(number<0 || number==1){
//     alert("yanlış sayı girdiniz");
// }
// var toplam=0;
// switch (number) {
//     case number==44:
//         break;
    
//     default:
//         for (let i = 0; i < number; i++) 
//         {
//             if(i==7)
//             {
//                 continue;
//             }
//             var toplam=toplam+i;
//         }
// }
// document.write(toplam);


// if(sayı==44){
//     break;
// }
// else 
// {
//     for (let i = 0; i < number; i++) 
//     {
//         var toplam=toplam+i;
//     }
// }

// let getDay= () => {
//      let dayNumber=new Date().getDay();
//      let day="";
//      switch (dayNumber) {
//          case 0:
//              day="pazar"
//         case 1:
//              day="pazartesi"
//         case 2:
//              day="salı"
//         case 3:
//              day="çarşamba"   
//         case 4:
//              day="perşembe"
//         case 5:
//              day="cuma"    
//         case 5:
//              day="cumartesi"
             
//              break;
     
//      }
//     document.write(day)
//  }
//  getDay();

// let username=prompt("adınızı giriniz");
// let pass=prompt("şifrenizi giriniz");

// let dbUsername="deneme";
// let dbPass="root";
// let hak=4;

// if(){
//     for(let i=4 ; i>0 ; i--){
    
//         if(username==dbUsername && pass==dbPass){
//             document.write("adminFunction(username,pass)")
//         }
//         hak--;
        
//     }
// }else{
//     document.write("bloke oldunuz.")
// }



// for( ;i<4 ;){
//     hak--;
//     if(username==dbUsername && pass==dbPass){
//         document.write("adminFunction(username,pass)")
//         break;
//     }else{
//         username=prompt("adınızı giriniz");
//         pass=prompt("şifrenizi giriniz");
//     }
// }
// if(hak==0){
//     document.write("bloke oldunuz");
// }
let username=prompt("adınızı giriniz");
let pass=prompt("şifrenizi giriniz");

let dbUsername="deneme";
let dbPass="root";
let hak=4;
do{
    if(username==dbUsername && pass==dbPass){
        document.write("adminFunction(username,pass)")
        break;
    }else{
        hak--;
        username=prompt("adınızı giriniz");
        pass=prompt("şifrenizi giriniz");
        alert("kalan hak:"+hak);
    }
}while(hak=0){
    document.write("bloke oldunuz");
}












