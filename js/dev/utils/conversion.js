/*-_-*-_-*-_-*-_-*-_-*-_-*-_-
function used by units-switching button
-_-*-_-*-_-*-_-*-_-*-_-*-_-*/

export default function convert(){
  var temperature, C, F;
  if($(".temp").hasClass("degF")){
    C = Math.round((temperature - 32) * 5 / 9);
    //console.log(C);
    $(".temp").removeClass("degF");
    $(".switch").text("F");
    $(".temp").text(Math.round(C) + " C")
    temperature = C;
  }

  else {
    F = Math.round((temperature * 9 / 5) + 32);
    //console.log(F);
    $(".temp").addClass("degF");
    $(".switch").text("C");
    $(".temp").text(Math.round(F) + "\xb0 F")
    temperature = F;
  }
  //console.log(temperature);
}
