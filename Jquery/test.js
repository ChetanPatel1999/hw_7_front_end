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
// $(document).ready(function () {

//     $(".btn").click(function (e) {

//         // $(".box").animate({ left: '250px' }, 2000, () => {
//         //     $(".box").animate({ left: '0px' }, 2000)
//         // });

//         //Manipulate Multiple Properties
//         // $(".box").animate({ left: '250px', width: '300px', opacity: '0.5' }, 2000, () => {
//         //     $(".box").animate({ left: '0px', width: '150px' }, 2000)
//         // });


//         // Uses Queue Functionality
//         // $(".box").animate({ left: "300px", }, 1000);

//         // $(".box").animate({ width: "300px" }, 1000);

//         // $(".box").animate({ height: "300px" }, 1000);
//         // $(".box").animate({ width: "150px" }, 1000);
//         // $(".box").animate({ height: "150px" }, 1000);
//         // $(".box").animate({ left: "0px", }, 1000);



//         $(".box").animate({ left: "300px"}, 2000);
//         $(".box").animate({ fontSize: "50px"}, 2000);


//     });
// });


// //jQuery Stop Animations
// $(document).ready(function () {

//     $(".btn").click(function (e) {
//         $(".box").animate({ width: 300 }, 5000);
//         $(".box").animate({ height: 300 }, 5000, () => {
//             console.log("animation complete");
//         });

//     });

//     // $("#stop").click(function (e) {
//     //     $(".box").stop();
//     // });
// })


// //jQuery - Chaining
// $(document).ready(function () {
//     $(".btn").click(function (e) {

//         $(".box").css("background-color", "blue").slideUp(2000).slideDown(2000).hide(4000);

//     });
// });


// Get Content and Attributes
//Set Content and attributes

// $(document).ready(function () {

//     // console.log($("#para").text())
//     // console.log($(".box").text())
//     // console.log($("h1").text())
//     // console.log($(".box").html())

//     // console.log($("textarea").val())
//     // console.log($("h1").attr("class"))
//     // console.log($("img").attr("src"))
//     // console.log($("img").attr("title"))  

//     $(".btn").click(function (e) {
//         // $("#para").text("<b>hello raj sharma<b>");
//         // $("#para").html("<b>hello raj sharma<b>");
//         // $("input").val("welcome");
//         // $("img").attr("title", "monky");
//         // $(".box").attr("class", "box1");
//         $("#para").text((i, orgtext) => {
//             return "old text " + orgtext + " hello raj sharma"
//         })

//     });

// });



//Add New HTML Content
// append() - Inserts content at the end of the selected elements
// prepend() - Inserts content at the beginning of the selected elements
// after() - Inserts content after the selected elements
// before() - Inserts content before the selected elements

// jQuery - Remove Elements

$(document).ready(function () {

    $(".btn").click(function () {
        // $(".box").prepend("ram is good boy");

        // let text="<button>get details</button>"

        // let text=document.createElement("button");
        // text.innerText="click me!"

        // let text = $("<button></button>").text("click me !")

        // $(".box").after(text);


        // var txt1 = "<p>Text1</p>";               // Create element with HTML 
        // var txt2 = $("<h1></h1>").text("Text2");   // Create with jQuery
        // var txt3 = document.createElement("button");  // Create with DOM
        // txt3.innerText = "Text3";
        // $(".box").append(txt1, txt2, txt3);      // Append the new elements

        // $(".box").remove();
        // $(".box").empty();
        $("p").remove("#para");
    });
});