import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  (async () => {
      let doctor = new Doctor();
      let response = await doctor.getDoctor(illness);
      getElements(response);
    })();




  $("form.docFinder").submit(function(event){
    event.preventDefault();
  });
});
