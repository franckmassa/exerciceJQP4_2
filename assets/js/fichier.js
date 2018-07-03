$(function(){
  //Assignation des variables à la valeur des notes
  $('#check').click(function(){
  var note1 = parseFloat($('#note1').val());
  var note2 = parseFloat($('#note2').val());
  var note3 = parseFloat($('#note3').val());
  var note4 = parseFloat($('#note4').val());
  var note5 = parseFloat($('#note5').val());
  //regex
  var regexNumber = /^[0-9]{1,2}[\.]{0,1}[0-9]{0,2}$/;
  if(regexNumber.test(note1) && regexNumber.test(note2) && regexNumber.test(note3) && regexNumber.test(note4) && regexNumber.test(note5)){
    var average = (note1 + note2 + note3 + note4 + note5 )/5;
    alert('Moyenne ' + average);
    if(average >= 0 && average < 10){
      alert('En dessous de la moyenne');
    }else if(average >= 10 && average < 13){
      alert('Moyen');
    }else if(average >= 13 && average < 16){
      alert('Bien');
    }else if(average >= 16 && average < 20){
      alert('Très bien');
    }else if(average == 20){
      alert('Excellent');
    }
  }else{
    alert('Veuillez vérifier vos notes');
  }

  //Affichage des appréciations

});
});
