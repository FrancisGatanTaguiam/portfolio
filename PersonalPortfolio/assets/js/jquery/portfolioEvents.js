// $(document).ready(function(){
// 	$('.button-collapse').sideNav();
// 	$('.parallax').parallax();

// 	 $('.modal').modal();
// });

// $(document).ready(function(){
// 	$(".button-collapse").sideNav();
// });
  






// (function ($) {
  $(document).ready(function() {


   setTimeout(function(){
       $('body').addClass('loaded');
       $('h1').css('color','#222222');
    }, 3000);


 

  $(".button-collapse").sideNav();
	$('.parallax').parallax();

	 $('.modal').modal();
	 $('.scrollSpy').scrollSpy();

   
	 $('#emailVariable').blur(function(){

	 });

   $('.editSendButton').unbind("click").on("click", function(){
      $('#first_name').val("");
      swal("Message Done!", "");

   });
	 
  
	 //closeButtonModal
	 $('#closeButtonInModal').unbind("click").on("click" , function(){

         swal({
            title: "CLOSE",
            text: "",
            type: "success", 
            allowOutsideClick: false
         }, function(isConfirm){
            
            if(isConfirm){
              $('#modal1').modal('close');
              $('#nameVariable').val("");
              $('#emailVariable').val("");
              $('#numberVariable').val("");
              $('#messageVariable').val("");
            }
          
         });



    	 


	 });

   $("#emailVariable").keypress(function (e) {
     if(!/[0-9a-zA-Z_.@]/.test(String.fromCharCode(e.which))){
        return false;
     }
    });

	 // sendButtonModal
  	 // $('.sendButtonEdit').unbind("click").on("click",function(){
    	 	
    // 	 	$('#nameVariable').val("");
    // 	 	$('#emailVariable').val("");
    // 	 	$('#numberVariable').val("");
    // 	 	$('#messageVariable').val("");
  	 	
  	 // });

     
	 //typeNumberOnly
 	 $("#numberVariable").keypress(function (e) {

     	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        	return false;
    	}

      
   	});



    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
          $(this).find('.card-content>span').attr('style', '');
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
          $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
        }
      }

      $('.card-reveal').closest('.card').css('overflow', 'hidden');

    });

     // Make Reveal animate up and display when mouseenter
    $(document).on('mouseenter.hover-reveal','.hover-reveal', function (e){
      $(e.target).closest('.card').css('overflow', 'hidden');
      $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
      $(this).find('.card-reveal').css({ display: 'block'})
        .velocity("stop", false)
        .velocity({translateY: '-100%'},
        {duration: 500,
         queue: false,
         easing: 'easeInOutQuad'});
    });

    // Make Reveal animate down and display none when mouseleave
    $(document).on('mouseleave.hover-reveal','.hover-reveal', function (e){
      $(this).find('.card-reveal').velocity(
        {translateY: 0}, {
          duration: 1000,
          queue: false,
          easing: 'easeInOutQuad',
          complete: function() { $(this).css({ display: 'none'}); }
        }
      );
      $(this).find('.card-content>span').attr('style', '');
    });



    
     


  });
// }( jQuery ));

