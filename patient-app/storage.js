class Storage{
    static getPatientFromLs(){
        let patients;
        if(localStorage.getItem('patients')){
            patients = JSON.parse(localStorage.getItem('patients'))
        }else{
            patients = []
        }

        return patients
    }
    static addPatientFromLs(newPatient){
        let patients = this.getPatientFromLs();
        patients.push(newPatient);
        localStorage.setItem('patients',JSON.stringify(patients))
    }
}