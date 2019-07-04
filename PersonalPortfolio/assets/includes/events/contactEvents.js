$ = (typeof $ !== 'undefined') ? $ : {};
$.portfolio = (typeof $.portfolio !== 'undefined') ? $.portfolio : {};
$.portfolio.ws = (typeof $.portfolio.ws !== 'undefined') ? $.portfolio.ws : {};


$.portfolio.ws.contactEvents = (function(){


		var __clearInput = function(){
			$('#nameVariable').val("");
    	 	$('#emailVariable').val("");
    	 	$('#numberVariable').val("");
    	 	$('#messageVariable').val("");
		};


		var __validateContact = function(){

			  var errmsg = [];
				
			if($('#nameVariable').val() === null || $('#nameVariable').val() === ''){

				errmsg[1] = 1;
			}
			if($('#emailVariable').val() === null || $('#emailVariable').val() === ''){
				errmsg[1] = 1;
		
			}
			if($('#numberVariable').val() === null || $('#numberVariable').val() === ''){

				errmsg[1] = 1;
					
			}
			if($('#messageVariable').val() === null || $('#messageVariable').val()  === ''){

				errmsg[1] = 1;

			}

			if(errmsg.length > 0){
				return false;
			}

			return true;
		};


		var __addContactEvents = function(){
			console.log('Send Message');
			$('#sendButtonInModal').unbind("click").on("click", function(){
				

				if(__validateContact() === true){

					var contact = {
						contactname : $('#nameVariable').val(),
						contactemail : $('#emailVariable').val(),
						contactnumber : $('#numberVariable').val(),
						contactmessage : $('#messageVariable').val()
					};
					
					$.portfolio.ws.create.addContact(contact).done(function(result){
						console.log(result);

						if(result.status === 'SUCCESS'){
							 swal({
			                    title: "Successfully Send",
			                    text: "",
			                    type: "success", 
			                    allowOutsideClick: false
                			},function(){
                				$('#modal1').modal('close');
                				__clearInput();
                		
                			});
						} else if(result.status === 'FAILED'){
							swal({
			                    title: "Failed to save",
			                    text: "",
			                    type: "error", 
			                    allowOutsideClick: false
                			},function(){
                				$('#modal1').modal('close');
                				__clearInput();
                			});
						} else{
							swal({
			                    title: "Error Connection",
			                    text: "No Connection",
			                    type: "error", 
			                    allowOutsideClick: false
                			},function(){
                				$('#modal1').modal('close');
                				__clearInput();

                			});
						}

					});
				}

				else{
					 swal({
	                    title: "Required Fields",
	                    text: "Please fill out all the fields",
	                    type: "warning", 
	                    allowOutsideClick: false
                	});
				}

			});


		};

	return{
		addContactEvents : __addContactEvents
		// clearInput : __clearInput
	};	

}());
