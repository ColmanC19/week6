import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  let upDateDoctor = (name, address, phoneNumber, website, newPatients) =>{
    $("#name").text(name);

    name.forEach(function(name){
      $("#name").append(`<li>${name.data.practices} : ${name.name}</li>`);
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
        let firstName = response.data[i].profile.first_name;
        let lastName = response.data[i].profile.last_name;
        let practiceName = response.data[i].practices[0].name;
        let address = response.data[i].profile.title;
      }
    }
  });
});
