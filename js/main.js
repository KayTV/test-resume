// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');

  $('#poke_email').on('click', function(){
    $('#new_poke').show();
    $('#poke_email').hide();
  })

  $('#new_poke').on('click', function(){
    $('#poke_email').show();
    $('#new_poke').hide();
  })
});
