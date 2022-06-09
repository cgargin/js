function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
    //console.log(newFilm);
  /*
    <!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->*/

    const filmList = document.getElementById("films");

    //console.log(filmList);
    // += Önceki verinin üstüne yazmış oluyoruz.Eğer sadece = dersek önceki yazdıklarımızı almaz.
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    `;// Bu bizim arayüzümü filmimize eklemiş olacaktır.
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
UI.prototype.displayMessages = function(message,type){//İkinci bölüm
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturma

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){// Alert mesajımız 1 saniye çalışacak ve silinecek.
       div.remove();
    },1000);

}
UI.prototype.loadAllFilms = function(films){//Dördüncü Bölüm
    //Arayüzlerimiz ui'de yaptık.

    const filmList = document.getElementById("films");// Arrayini aldık.

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
    });
 
}
UI.prototype.deleteFilmFromUI = function(element){// Beşinci Bölüm

    element.parentElement.parentElement.remove();
}


UI.prototype.clearAllFilmsFromUI = function(){// Yedinci Bölüm

    const filmList = document.getElementById("films");

    //filmList.innerHTML = ""; Ancak bu yavaş çalışan bir yöntem.

    while(firstList.firstElementChild !== null) {// Child olduğu sürece while döngüsü yazıyoruz.
    
        filmList.firstElementChild.remove();
    }
}