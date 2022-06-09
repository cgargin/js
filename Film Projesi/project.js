const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];// Yani ikincisi almış oluyoruz.Beşinci bölüm
const clear = document.getElementById("clear-films");//Yedinci Bölüm

// UI Objesiniz Başlatma
const ui = new UI();
// Storage Objesi Üret

const storage = new Storage();// Bir tane obje oluşturduk.Üçüncü bölüm

// Tüm eventleri yükleme

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){//Dördüncü Bölüm
       let films = storage.getFilmsFromStorage();
       ui.loadAllFilms(films);
    });

    cardbody.addEventListener("click",deleteFilm);// Beşinci bölüm
    clear.addEventListener("click",clearAllFilm);//Yedinci Bölüm
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    if (title === "" || director === "" || url === ""){
        // Hata ikinci bölüm
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else {//Eğer bir sorun yoksa biz buraya else durumlarını gireceğiz.
        // Yeni Film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme Üçüncü Bölüm
        ui.displayMessages("Film başarıyla eklendi...","success")

    }

    ui.clearInputs(titleElement,urlElement,directorElement);// Silme işlemleri yapılıyor.

    e.preventDefault();
}

function deleteFilm(e){//Beşinci bölüm
    //İki tane parent elementi bulmamız gerekiyor a'nın bir üstü td'ye bir üstü ise tr'ye gitmeliyiz. 
    //console.log(e.target);

    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//Stroage. Beşincirevious
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//Altıncı bölüm. Üstünün üstü previous
    
        ui.displayMessages("Silme işlemi başarılı...","success");// Altıncı Bölüm
    
    }
}
function clearAllFilms(){//Yedinci Bölüm

    if (confirm("Emin misiniz ?")) {// Tüm filmleri silin butonuna bastığımızda yukarıdan Emin misiniz soran kutu çıkıyor.
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }
    
}