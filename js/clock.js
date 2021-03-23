    $(document).ready(function(){
     setInterval(() => {
        var clock = moment().format('h:mm:ss a');
        $('#clock').html(clock);

     }, 1000);


    });