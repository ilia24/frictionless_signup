$(document).on('turbolinks:load', function() {

  $("#email").emailautocomplete({
    domains: ["fintros.com"] //additional domains
  });

  function clearFields() {
    $('#full_name').val("");
    $('#company_name').val("");
  };

  //this is the internal rails Clearbit call for user info
  $("#email").focusout(function() {
    $.ajax({
      method: 'GET',
      dataType: 'JSON',
      url: '/cbit/' + $('#email').val()

      }).done(function(data){
        clearFields();
        $('#full_name').val(data.person.name.fullName);
        $('#company_name').val(data.company.legalName);
      }).fail(function(){
        clearFields();
        console.log('Person not found!');
      });
  });

});
