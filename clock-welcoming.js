let userName = prompt ("Adınızı yazınız")
let karsilama =  document.querySelector ("#karsilama")
karsilama.innerHTML = `${userName.toUpperCase()}` 
karsilama.innerHTML = `${userName.length>0 ? userName.toUpperCase() : alert ("kullanıcı bilginiz yok" ) }` 
//boş girilirse alert uyarısı verir

function tarihSaat() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayName = date.getDay();
     switch (dayName) {
        case 1:
           dayName = "Pazartesi";
           break;
        case 2:
           dayName = "Salı";
           break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
            break;           
     }
     var timer = ` ${h} : ${m} : ${s}  - ${dayName} `;
    document.querySelector('#zaman').innerHTML = timer ; //zaman id'li elemente yazdırır 

    setInterval(tarihSaat, 1000); // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştırır
}
tarihSaat(); 