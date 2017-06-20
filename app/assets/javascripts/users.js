$(document).on('turbolinks:load', function() {

  $("#email").emailautocomplete({
    domains: ["fintros.com"] //additional domains
  });

  $("#email").focusout(function() {
    $.ajax({
      method: 'GET',
      dataType: 'JSON',
      url: '/cbit/' + $('#email').val()

      }).done(function(data){
        $('#full_name').val(data.person.name.fullName)
        $('#company_name').val(data.company.legalName)
      }).fail(function(){
        console.log('Person not found!');
      });
  });

});
