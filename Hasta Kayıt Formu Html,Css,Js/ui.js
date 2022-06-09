class UI {
    //     <tr>
    //     <td>Eyüp</td>
    //     <td>Helva</td>
    //     <td>32</td>
    //     <td>Göz</td>
    //     <td><button type="button" class="btn btn-danger"> Sil</button></td>
    //   </tr>
    static addPatientFromUI(newPatient) {
        let patientList = document.getElementById('patientList') // tbdoy
        patientList.innerHTML += `
        <tr>
        <td>${newPatient.name}</td>
        <td>${newPatient.surName}</td>
        <td>${newPatient.age}</td>
        <td>${newPatient.policlinic}</td>
        <td><button type="button" id="delete-patient" data-id=${newPatient.patientId} class="btn btn-danger"> Sil</button></td>
      </tr>

        `
    }
    static clearInput(input1, input2, input3, input4) {
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input4.value = ""
    }
    static deletePatient(item) {
        item.parentElement.parentElement.remove();
    }
    static deleteAllPatient() {
        const patientList = document.getElementById('patientList');
        const listLength = patientList.children.length; // tablodaki trlerin   sayısını

        for (let i = 0; i < listLength; i++) {
            patientList.children[0].remove();
        }
    }
    static loadData() {
        const patients = Storage.getPatientFromLs();
        patients.forEach(data => {
            UI.addPatientFromUI(data)
        });
    }

    static displayMessage(message, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = `
        <div class="alert alert-${type}" role="alert">
            ${message}
      </div>
        `
        setTimeout(function(){
            messageDiv.innerHTML = ""
        },3000)
    }
}
