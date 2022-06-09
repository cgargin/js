function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){// Üçüncü bölüm
    //console.log(newFilm);
    let films = this.getFilmsFromStorage();

    films.push(newFilm);
    /*
    [Ancak şuanda arraylerimize film objelerimizi atıyoruz.
        {title:"sadsadsad",director:"sadsadasd",url:"324324234"}
        {title:"sadsadsad",director:"sadsadasd",url:"324324234"}
    ]
    */

    localStorage.setItem("films",JSON.stringify(films));
    
}
Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));//Array oluşturduk ve eğer yoksa da biz bunu jsonparse olarak aldık.
        
    }

    return films; 
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){// Altıncı Bölüm
    let films = this.getFilmsFromStorage();
    // Splice
    films.forEach(function(film,index){

        if(film.title === filmTitle) {// Objemizin title yani ismi eğer eşitse bunu arrayden silmemiz lazım. 
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));//Filimimiz kaldırılmış olacak.

}

Storage.prototype.clearAllFilmsFromStorage = function(){// Yedinci Bölüm

    localStorage.removeItem("films");
}





