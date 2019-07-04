$ = (typeof $ !== 'undefined') ? $ : {};
$.portfolio = (typeof $.portfolio !== 'undefined') ? $.portfolio : {};
$.portfolio.ws = (typeof $.portfolio.ws !== 'undefined') ? $.portfolio.ws : {};

$.portfolio.ws.create = (function(){

	// var webServicePath = ['localhost/ci/ContactController/addContact'];



	var __addContact = function(data){
		var d = $.Deferred();

		$.portfolio.ws.executePost('/ci/ContactController/addContact', data).done(function(result){
			d.resolve(result);
			console.log(result);
		});

		return d.promise();
	};



return {
	addContact : __addContact
};


}());
