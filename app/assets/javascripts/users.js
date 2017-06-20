$(document).on('turbolinks:load', function() {

  $("#email").emailautocomplete({
    domains: ["fintros.com"] //additional domains
  });

  $("#email").focusout(function() {
    console.log('focus lost');
  });

});
