import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from "./doctor.js";

$(document).ready(function(){
    // console.log(require('dotenv').config());
  // console.log("hey");
  let updateDoctor = (name, address, phoneNumber, newPatients) => {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.newPatients = newPatients;
    $("#name").text(name);

    name.forEach(function(name){
      $("#name").append(`<li>${name.practice.name}</li>`);
    });

    address.forEach(function(address){
      $("#office").append(`<li>${address.practice.visit_address}</li>`);
    });

    phoneNumber.forEach(function(phoneNumber){
      $("#phone").append(`<li>${phoneNumber.practice.phones} : ${phoneNumber.number}</li>`);
    });

    newPatients.forEach(function(newPatients){
      $("#patients").append(`<li>${newPatients.practice.accepts_new_patients} : ${newPatients.accepts_new_patients}</li>`);
    });
  };





  $("form.docFinder").submit(function(event){
    event.preventDefault();
    let search = $("#search").val();
    (async () => {
      let doctorservice = new DoctorService(search);
      const response = await doctorservice.getResponse();
      getElements(response);
    })();
  });

  // function getElements(response) {
  //   let description = Object.description(response.data);
  //   for (let i=0; i < description.length; i++) {
  //     let name = response.data[i].practices.name;
  //     let address = response.data[i].practices.visit_address;
  //     let phoneNumber = response.data[i].practices.phones.number;
  //   }
  // }
  function getElements(response) {
    let name = response.name;
    let address = response.visit_address;
    let phoneNumber = response.phones;
    let newPatients = response.newPatients;
    return updateDoctor(name, address, phoneNumber, newPatients);
  }

});
