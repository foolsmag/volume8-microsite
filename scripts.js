$(window).on("load", function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

$(document).ready(function(){
	 $("modal").modal("hide");

	   $("btn").click(function(){
    $("#myModal").modal("show");
  });
});