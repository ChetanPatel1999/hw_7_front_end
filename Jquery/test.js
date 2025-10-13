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
// $(document).ready(function () {
//     $(".btn").click(function () {

//         // $("*").hide();
//         // $(this).hide();
//         // $("p.my-class").hide();
//         // $("p:first").hide();
//         // $("p:last").hide();
//         // $("div p:first").hide();
//         $(".box p:first").hide();

//     });
// });  

//JQuery events 
$(document).ready(function () {

    // $("#para").click(function () {
    //     $(".btn").css("background-color","red");
    // })

    //dblclick()

    // $(".btn").dblclick(()=>{
    //     console.log("dblclick is perform");
    // })

    //  mouseenter()
    //  mouseleave()

    // $(".box").mouseenter(function () {
    //     $("div p").hide();
    // });

    // $(".box").mouseleave(function () {
    //     $("div p").show();
    // });

    //
    // $(".box").mousedown(function () {
    //     $("div p").hide();
    // });

    // $(".box").mouseup(function () {
    //     $("div p").show();
    // });

    // //hover

    // $(".box").hover(function () {
    //     // over
    //     $(this).css("color", "white");
    // }, function () {
    //     // out
    //     $(this).css("color", "black");
    // }
    // );

    // $("input").focus(function () {
    //     $(this).css("background-color", "red")
    // });

    // $("input").blur(function () {
    //     $(this).css("background-color", "white")
    // });


    //The on() Method

    // $(".btn").on("click", function () {
    //     $(".box").css("background-color", "white")
    // });

    // $("p").on({
    //     mouseenter: function () {
    //         $(this).css("background-color", "lightgray");
    //     },
    //     mouseleave: function () {
    //         $(this).css("background-color", "white");
    //     },
    //     click: function () {
    //         $(this).css("background-color", "yellow");
    //     }
    // });

    $(".btn").click(
        function () {
            let color = $(".box").css("background-color");
            if (color === "rgb(255, 0, 0)") {
                $(".box").css("background-color", "white");
            }
            else {
                $(".box").css("background-color", "red");
            }
        }
    );
});

