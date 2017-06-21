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
        $('.hiddenfields').removeClass( 'hide' );
        $('#company_name').val(data.company.legalName);
      }).fail(function(){
        clearFields();
        console.log('Person not found!');
        $('.hiddenfields').removeClass( 'hide' );
      });
  });


  //This function uses an AJAX call to dynamically scrape meetup's user data, and append it to the page
  $("#scrape_form").submit(function(e) {
    e.preventDefault();

    $.ajax({
      method: $(this).attr('method'),
      url: $(this).attr('action'),
      dataType: 'JSON',

      }).done(function(data){
        console.log('ajax success');
        console.log('data');

      }).fail(function(){
        console.log('ajax fail');
      });
  });

});
