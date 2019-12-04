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
    let createDocDisplay = document.createElement("p");
    let pushName = document.createTextNode(firstName + " " + lastName + ". " + "Office information: " + streetAddress + ", " + cityAddress + ", " + stateAddress + ", " + zipAddress + ", " + phoneNumber + ", " + website + ", " + accepts);
    createDocDisplay.appendChild(pushName);
    let element = document.getElementById("docDisplay");
    element.appendChild(createDocDisplay);

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
    // accepts.forEach(function(newPatient){
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
      let practice;
      for (var k = 0; k < response.data[i].practices.length; k++) {
        if (response.data[i].practices[k].within_search_area) {
          practice = response.data[i].practices[k];
        }
      }
      let streetAddress = practice.visit_address.street;
      let cityAddress = practice.visit_address.city;
      let stateAddress = practice.visit_address.state_long;
      let zipAddress = practice.visit_address.zip;
      let phoneNumber = practice.phones[0].number;
      let website = practice.website;
      let accepts = practice.accepts_new_patients;




      updateDoctor(firstName, lastName, streetAddress, cityAddress, stateAddress, zipAddress, phoneNumber, website, accepts);
    }


  }

});
