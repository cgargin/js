class Patient{
    constructor(name,surName,age,policlinic){
        this.patientId = Math.floor(Math.random() * 10000)
        this.name = name;
        this.surName = surName;
        this.age = age;
        this.policlinic = policlinic;
    }
}