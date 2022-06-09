//Uygulama:Promise

let myObj = {
    //method : "POST",
    url : "https://randomuser.me/api/?results=5",
    /*headers : [  Post yaptığımızda lazım olur.
        {"content-type":"application//json"}
    ]*/
    /*body : {// Post veya put reguestleri için kullanıyoruz.
        "name":"sadık",
    }*/
}

let request = obj =>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);

        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader
                (key,obj.headers[key]);
            });
        }

        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => {
            reject(xhr.statusText);
        }
        xhr.send(obj.body);
    });
}

let buildHtml = function(data){

}

request(myObj)
    .then(data => {
        let users = JSON.parse(data);
        let html ="";
        users.results.forEach(user => {
            html+=`
                <div>
                    <img src ="${user.picture.medium}">
                    <div>
                        ${user.name.title} ${user.namefirst}${user.name.last}
                    </div>
                </div>
            `; 
            //console.log(user);
            document.querySelector('#users').innerHTML = html;
        })
    }).catch(error => {
        console.log(error);
    })