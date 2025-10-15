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
// $(document).ready(function () {

//     // $("#para").click(function () {
//     //     $(".btn").css("background-color","red");
//     // })

//     //dblclick()

//     // $(".btn").dblclick(()=>{
//     //     console.log("dblclick is perform");
//     // })

//     //  mouseenter()
//     //  mouseleave()

//     // $(".box").mouseenter(function () {
//     //     $("div p").hide();
//     // });

//     // $(".box").mouseleave(function () {
//     //     $("div p").show();
//     // });

//     //
//     // $(".box").mousedown(function () {
//     //     $("div p").hide();
//     // });

//     // $(".box").mouseup(function () {
//     //     $("div p").show();
//     // });

//     // //hover

//     // $(".box").hover(function () {
//     //     // over
//     //     $(this).css("color", "white");
//     // }, function () {
//     //     // out
//     //     $(this).css("color", "black");
//     // }
//     // );

//     // $("input").focus(function () {
//     //     $(this).css("background-color", "red")
//     // });

//     // $("input").blur(function () {
//     //     $(this).css("background-color", "white")
//     // });


//     //The on() Method

//     // $(".btn").on("click", function () {
//     //     $(".box").css("background-color", "white")
//     // });

//     // $("p").on({
//     //     mouseenter: function () {
//     //         $(this).css("background-color", "lightgray");
//     //     },
//     //     mouseleave: function () {
//     //         $(this).css("background-color", "white");
//     //     },
//     //     click: function () {
//     //         $(this).css("background-color", "yellow");
//     //     }
//     // });

//     $(".btn").click(
//         function () {
//             let color = $(".box").css("background-color");
//             if (color === "rgb(255, 0, 0)") {
//                 $(".box").css("background-color", "white");
//             }
//             else {
//                 $(".box").css("background-color", "red");
//             }
//         }
//     );
// });


// Hide and Show method of jquery
//$(selector).hide(speed,callback);
//$(selector).show(speed,callback);
// $(document).ready(function () {

//     $(".btn").click(function () {
//         // $(".box").hide(2000, () => {
//         //     $(".box").show(2000,()=>{
//         //         console.log("hide show complete");
//         //     });
//         // });
//         $(".box").toggle(2000,function(){
//             console.log("togel is complete")
//         });
//     });

// });



// //jQuery Effects - Fading
// $(document).ready(function () {

//     $(".btn").click(function () {
//         // $(".box").fadeOut(4000, () => {
//         //     $(".box").fadeIn(2000,()=>{
//         //         console.log("fadein,out complete ")
//         //     });
//         // });

//         // $(".box").fadeToggle(1000);
//         $(".box").fadeTo(2000, 0.7, () => {
//             $(".box").fadeTo(1000, 1);
//             // console.log("hello fade to")
//         });

//     });
// });


// // jQuery Effects - Sliding
// $(document).ready(function () {
//     $(".btn").click(function (e) {
//         // $(".box").slideUp(2000, () => {
//         //     $(".box").slideDown(2000);
//         // });
//         $(".box").slideToggle(2000);
//     });
// });


//jQuery Effects - Animation
$(document).ready(function () {

    $(".btn").click(function (e) {

        // $(".box").animate({ left: '250px' }, 2000, () => {
        //     $(".box").animate({ left: '0px' }, 2000)
        // });

        //Manipulate Multiple Properties
        // $(".box").animate({ left: '250px', width: '300px', opacity: '0.5' }, 2000, () => {
        //     $(".box").animate({ left: '0px', width: '150px' }, 2000)
        // });


        // Uses Queue Functionality
        // $(".box").animate({ left: "300px", }, 1000);

        // $(".box").animate({ width: "300px" }, 1000);

        // $(".box").animate({ height: "300px" }, 1000);
        // $(".box").animate({ width: "150px" }, 1000);
        // $(".box").animate({ height: "150px" }, 1000);
        // $(".box").animate({ left: "0px", }, 1000);



        $(".box").animate({ left: "300px"}, 2000);
        $(".box").animate({ fontSize: "50px"}, 2000);


    });
});
