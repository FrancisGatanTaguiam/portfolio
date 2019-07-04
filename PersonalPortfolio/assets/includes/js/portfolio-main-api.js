/* 
 * This the main API interfacing with backend of HRIS
 * HRIS web services.
 */
//object
$ = (typeof $ !== 'undefined') ? $ : {};
$.portfolio = (typeof $.portfolio !== 'undefined') ? $.portfolio : {};
$.portfolio.ws = (typeof $.portfolio.ws !== 'undefined') ? $.portfolio.ws : {};

$.portfolio.ws = (function() {
    // Context Root
    //base Path or base url
    var ___ctx = '';
   
    var __setContext = function(newctx) {
        ___ctx = newctx;
    };
    
    var __getContext = function() {
        return ___ctx;
    };
    
    var __executeGet = function(path) {
        var d = $.Deferred();
        $('#loader').show();
        $.ajax({
            method: "GET",
            url: path,
            dataType: "json"
        }).done(function (data, textStatus, jqXHR) {
            d.resolve(data);
            $('#loader').hide();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('---FAILED---');
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log('---FAILED---');
            
            d.resolve({
                status : 'ERROR',
                message : errorThrown
            });
            $('#loader').hide();
        });
        
        return d.promise();
    };
    
    var __executePost = function(path, jsonObj) {
        var d = $.Deferred();
        $('#loader').show();
        $.ajax({
            method: "POST",
            url: path,
            dataType: "json",
            data: JSON.stringify(jsonObj)
        }).done(function (data, textStatus, jqXHR) {
            d.resolve(data);
            $('#loader').hide();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('---FAILED---');
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log('---FAILED---');
            
            d.resolve({
                status : 'ERROR',
                message : errorThrown
            });
            $('#loader').hide();
        });
        
        return d.promise();
    };
    
    var __executeDelete = function(path) {
        var d = $.Deferred();
        
        $.ajax({
            method: "DELETE",
            url: path,
            dataType: "json"
        }).done(function (data, textStatus, jqXHR) {
            d.resolve(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('---FAILED---');
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log('---FAILED---');
            
            d.resolve({
                status : 'ERROR',
                message : errorThrown
            });
        });
        
        return d.promise();
    };
    
    var __executePut = function(path, jsonObj) {
        var d = $.Deferred();

        $.ajax({
            method: "PUT",
            url: path,
            dataType: "json",
            data: JSON.stringify(jsonObj)
        }).done(function (data, textStatus, jqXHR) {
            d.resolve(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('---FAILED---');
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            console.log('---FAILED---');
            
            d.resolve({
                status : 'ERROR',
                message : errorThrown
            });
        });
        
        return d.promise();
    };
    
    var __isNumberOnly = function(val) {
        if(typeof val === 'unfined') return false;
        return /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(val); 
    };

    return {
        setContext : __setContext,
        getContext : __getContext,
        executeGet : __executeGet,
        executePost : __executePost,
        executeDelete : __executeDelete,
        executePut : __executePut,
        isNumberOnly : __isNumberOnly,
    };
}());
