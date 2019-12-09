import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from "./doctor.js";

$(document).ready(function(){
  let updateDoctor = (firstName, lastName, streetAddress, cityAddress, stateAddress, zipAddress, phoneNumber, website, accepts) => {
    let createDocDisplay = document.createElement("p");
    let pushName = document.createTextNode(firstName + " " + lastName + ". Office information: " + streetAddress + ", " + cityAddress + ", " + stateAddress + ", " + zipAddress + ", " + phoneNumber + ", " + "Website: " + website + ", " + "Accepting new Patients at this time? " + accepts);
    createDocDisplay.appendChild(pushName);
    let element = document.getElementById("docDisplay");
    element.appendChild(createDocDisplay);
    $("#search").val("");
  };

  $("form.docFinder").submit(function(event){
    $("#docDisplay").text("");
    event.preventDefault();
    let search = $("#search").val();
    (async () => {
      let doctorService = new DoctorService(search);
      const response = await doctorService.getResponse();
      if (response === "There seems to be an error. Check the API key to ensure it is live.") {
        return $("#error").text("There seems to be an error. Check the API key to ensure it is live.");
      } else if (response.data === undefined || response.data.length === 0 ) {
        return $("#docDisplay").text("No doctors within your area. Please type in another search query or be more specific in your request.");
      }
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
