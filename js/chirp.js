function chirp(n){
  if(n === 1){
    return "chirp";
  }
  return "chirp " + chirp(n-1);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});