$(document).on('turbolinks:load', function() {

  $("#email").emailautocomplete({
    domains: ["fintros.com"] //additional domains
  });

  $("#email").focusout(function() {
    $.ajax({
      method: 'GET',
      // crossDomain: true,
      beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Basic ' + btoa('ENV[CBIT_API]:'));},
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
