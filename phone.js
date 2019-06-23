$(document).ready(function(){
        $("#cancelf").click(function(){
            $(".screen2").css("display","none");
           $(".screen1").css("display","block");
        })


        $(".Contact1").click(function(){
            $(".screen2").css("display","block");
           $(".screen1").css("display","none");
        })


           

            $( ".key" ).on( "click", function() {
                if ( $( this ).is( "#1" ) ) {
                    $("#in").val(($("#in").val()+"1"));
                } 
                else if ( $( this ).is( "#2" ) ) {
                    $("#in").val(($("#in").val()+"2"));
                } 
                else if ( $( this ).is( "#3" ) ) {
                    $("#in").val(($("#in").val()+"3"));
                } 
                else if ( $( this ).is( "#4" ) ) {
                    $("#in").val(($("#in").val()+"4"));
                } 
                else if ( $( this ).is( "#5" ) ) {
                    $("#in").val(($("#in").val()+"5"));
                } 
                else if ( $( this ).is( "#6" ) ) {
                    $("#in").val(($("#in").val()+"6"));
                } 
                else if ( $( this ).is( "#7" ) ) {
                    $("#in").val(($("#in").val()+"7"));
                } 
                else if ( $( this ).is( "#8" ) ) {
                    $("#in").val(($("#in").val()+"8"));
                } 
                else if ( $( this ).is( "#9" ) ) {
                    $("#in").val(($("#in").val()+"9"));
                } 
                else if ( $( this ).is( "#0" ) ) {
                    $("#in").val(($("#in").val()+"0"));
                } 
                else if ( $( this ).is( "#s" ) ) {
                    $("#in").val(($("#in").val()+"*"));
                } 
                else if ( $( this ).is( "#h" ) ) {
                    $("#in").val(($("#in").val()+"#"));
                } 
            });



            $("#ncall").click(function(){
                $("#number2").text( $("#in").val());
            $(".screen2").css("display","block");
           $(".screen1").css("display","none");
           
        })

    

    });

    // $("p").text($("p").text()+"Hello World!");