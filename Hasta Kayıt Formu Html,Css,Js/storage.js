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
    static deletePatientFormLs(id){
        let patients = this.getPatientFromLs();
        patients.forEach((item,index) =>{
            if(item.patientId == id){
                patients.splice(index,1)
            }
        })
        localStorage.setItem('patients',JSON.stringify(patients))
    }
    static deleteAllPatientsFromLs(){
        localStorage.removeItem('patients')
    }
}