import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from "./doctor.js";

$(document).ready(function(){
  let updateDoctor = (firstName, lastName, streetAddress, cityAddress, stateAddress, zipAddress, phoneNumber, website, accepts) => {
    // this.name = name;
    // this.address = address;
    // this.phoneNumber = phoneNumber;
    // this.newPatients = newPatients;
    $(".docDisplay").(firstName + " " + lastName);

    // firstName.forEach(function(name){
    //   $("#name").append(`<li>"Doc Name": + ${name.practice.name}</li>`);
    // });
    //
    // address.forEach(function(address){
    //   $("#office").append(`<li>${address.practice.visit_address}</li>`);
    // });
    //
    // phoneNumber.forEach(function(numbers){
    //   $("#phone").append(`<li>${numbers.practice.phones} : ${phoneNumber.number}</li>`);
    // });
    //
    // newPatients.forEach(function(newPatients){
    //   $("#patients").append(`<li>${newPatients.practice.accepts_new_patients} : ${newPatients.accepts_new_patients}</li>`);
    // });
  };
  $("form.docFinder").submit(function(event){
    event.preventDefault();
    let search = $("#search").val();
    (async () => {
      let doctorService = new DoctorService(search);
      const response = await doctorService.getResponse();
      getElements(response);
      console.log(response);
    })();
  });

  function getElements(response) {
    for (var i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;
      let streetAddress = response.data[i].practices[0].visit_address.street;
      let cityAddress = response.data[i].practices[0].visit_address.city;
      let stateAddress = response.data[i].practices[0].visit_address.state_long;
      let zipAddress = response.data[i].practices[0].visit_address.zip;
      let phoneNumber = response.data[i].practices[0].phones[0].number;
      let website = response.data[i].practices[0].website;
      let accepts = response.data[i].practices[0].accepts_new_patients;



      updateDoctor(firstName, lastName, streetAddress, cityAddress, stateAddress, zipAddress, phoneNumber, website, accepts);
    }


  }

});
