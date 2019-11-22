import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  let upDateDoctor = (name, address, phoneNumber, newPatients) =>{
    $("#name").text(name);

    name.forEach(function(name){
      $("#name").append(`<li>${name.data.practices} : ${name.name}</li>`);
    })
    address.forEach(function(address){
      $("#office").append(`<li>${address.data.practices.visit_address}</li>`)
    })
    phoneNumber.forEach(function(phoneNumber){
      $("#phone").append(`<li>${phoneNumber.data.practices.phones} : ${phoneNumber.number}</li>`)
    })
    // website.forEach(function(website){
    //   $("#website").append(`<li>${website.data.practices.} : ${}</li>`)
    // })
    newPatients.forEach(function(newPatients){
      $("#patients").append(`<li>${newPatients.data.practices.accepts_new_patients} : ${newPatients.accepts_new_patients}</li>`)
    })
  }





  $("form.docFinder").submit(function(event){
    event.preventDefault();
    (async () => {
      let doctor = new Doctor();
      let response = await doctor.getDoctor(illness);
      getElements(response);
    })();

    function getElements(response) {
      let keys = Object.keys(response.data);
      for (let i=0; i < keys.length; i++){
        let name = response.data[i].practices.name;
        let address = response.data[i].practices.visit_address;
        let phoneNumber = response.data[i].practices.phones.number;
        let website = response.data[i].
      }
    }
  });
});
