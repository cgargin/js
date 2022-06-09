// ekle butonu,Hepsini sil butonu tbdoy(#patienlist),input elemanları
const btnNewPatient = document.getElementById('newPatient');
const btnDeleteAllPatient = document.getElementById('deleteAllPatient');
const patientName = document.getElementById('name');
const patientSurName = document.getElementById('surName');
const patientAge = document.getElementById('age');
const policlinic = document.getElementById('policlinic');
const patientList = document.getElementById('patientList')
eventListener()

function eventListener(){
    btnNewPatient.addEventListener('click',addNewPatient)
    patientList.addEventListener('click',deletePatient);
    btnDeleteAllPatient.addEventListener('click',deleteAllPatient);
    document.addEventListener('DOMContentLoaded',UI.loadData)

}

function addNewPatient(){
    const name = patientName.value.trim();
    const surName = patientSurName.value.trim();
    const age = patientAge.value.trim();
    const selectedPoliclinic = policlinic.value;
    if(name && surName && age && selectedPoliclinic){
        const newPatient = new Patient(name,surName,age,selectedPoliclinic)
        // newPatient = {name:'eyup',surName:''helba.....}
        UI.addPatientFromUI(newPatient)
        Storage.addPatientFromLs(newPatient)
        UI.clearInput(patientName,patientSurName,patientAge,policlinic)
        console.log(newPatient);
        UI.displayMessage('Hasta Başarı Bir Şekilde Eklenmiştir','primary')
    }else{
        UI.displayMessage('Lütfen Tüm alanları Doldurunuz','warning')
    }
  
}
function deletePatient(e){
    console.log(e.target)
    if(e.target.id == 'delete-patient'){
        const patientId = e.target.getAttribute('data-id');
        Storage.deletePatientFormLs(patientId)
        UI.deletePatient(e.target);
        UI.displayMessage('Hasta Silinmiştir','danger')
    }
}
function deleteAllPatient(){
    UI.deleteAllPatient();
    Storage.deleteAllPatientsFromLs()
    UI.displayMessage('Tüm  Hastalar Silinmiştir','danger')
}

