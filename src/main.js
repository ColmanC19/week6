import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor.js";

$(document).ready(function(){

  let upDateDoctor = (name, address, phoneNumber, newPatients) =>{
    $("#name").text(name);

    name.forEach(function(name){
      $("#name").append(`<li>${name.data.practices.name}</li>`);
    })
    address.forEach(function(address){
      $("#office").append(`<li>${address.data.practices.visit_address}</li>`);
    })
    phoneNumber.forEach(function(phoneNumber){
      $("#phone").append(`<li>${phoneNumber.data.practices.phones} : ${phoneNumber.number}</li>`);
    })
    newPatients.forEach(function(newPatients){
      $("#patients").append(`<li>${newPatients.data.practices.accepts_new_patients} : ${newPatients.accepts_new_patients}</li>`);
    })
  }
  




  $("form.docFinder").submit(function(event){
    event.preventDefault();
    let illness = $("#needs").val();
    (async () => {
      let doctor = new DoctorService();
      const response = await doctorService.getResponse(illness);
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
        let phoneNumber = response.phones.number;
        let newPatients = response.newPatients;
        console.log(response);
        updateDoctor(name, address, phoneNumber, newPatients);
      }

    });
