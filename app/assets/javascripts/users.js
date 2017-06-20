$(document).on('turbolinks:load', function() {

  $("#email").emailautocomplete({
    domains: ["fintros.com"] //additional domains
  });

  $("#email").focusout(function() {
    $.ajax({
      method: 'GET',
      //API key currently directly in code for testing
      beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Basic ' + btoa('sk_469ac595952197c04dcb17f6aee47420:'));},
      dataType: 'JSON',
      url: 'https://person-stream.clearbit.com/v2/combined/find?email=' + $('#email').val()
      }).done(function(data){
        $('#full_name').val(data.person.name.fullName)
        $('#company_name').val(data.company.legalName)
      }).fail(function(){
        console.log('Person not found!');
      });
  });

});
