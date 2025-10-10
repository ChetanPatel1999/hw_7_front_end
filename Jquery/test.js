// $(document).ready(function () {

//     $("button").click(() => {
//         //element access by tag name
//         // $("p").hide();

//         //element access by id name
//         // $("#para").hide();

//         //element access by class name 
//         // $(".my-class").hide();
//         // $(".my-class").css("color", "red");
//         // $(".my-class").css("background-color", "red");

//     })

// })


// $(function () {

//     $("p").click(function () {

//         // $("p").hide();

//         // $("#para").hide();

//         $(this).hide();

//     });
// });


//jquery selecter 
$(document).ready(function () {
    $(".btn").click(function () {

        // $("*").hide();
        // $(this).hide();
        // $("p.my-class").hide();
        // $("p:first").hide();
        // $("p:last").hide();
        // $("div p:first").hide();
        $(".box p:first").hide();

    });
});

