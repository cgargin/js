var list = document.querySelector(".items");/*Var list deyip containerımıza ulaştık.Sonradan h1(SÜRÜKLENEBİLİR LİSTE) eklediğimiz için bir div daha açıp items yazdık.*/

new Sortable(list,{/*Sortable ekledik cdnjs'den.*/
    animation:500/*Sürüklenebilir hale getirdik.*/ 
})