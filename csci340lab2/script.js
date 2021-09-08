$(document).ready(function(){

  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  function nextQuestion(results, amount, count) {
    if (amount >= results['results'].length){
        $("#ending").text("You have finished your trivia game! You got " + count + " correct.").css("color", "white")
      }
    else{
      var questions = results['results'].length
      var answers = results["results"][amount]["incorrect_answers"]
      var correct = results["results"][amount]["correct_answer"]
      answers.push(correct)
      $('#start').prop('disabled', 'true')
      var temp = $('#tquestion').text(decodeHtmlCharCodes(results["results"][amount]["question"]))
      temp.css("color", "white").css("font-size", "4vw")
      answers = shuffle(answers)

      if ($("#answers").length > 0){
        $("#answers").empty()
      }
      $.each(answers, function(i, val){
        $('#answers').append('<li> <button class="button" id="' + i + '">' + val + '</button></li>')
      });

      $('.button').click(function(e){
          $("#pic").attr( "src", "empty.jpg")
          var idClicked = e.target.id;
          if ($("#" + idClicked).text() == correct) {
            $("#result").text('That is correct!\n Here is a cute pupper for your troubles:) ').css("color", "white")
            Pupper()
            count++;
          } else{
            $("#result").text('That is wrong!:(').css("color", "white")
          }
          nextQuestion(results, amount + 1, count)
      });

      console.log(amount)
    }
  }
  function decodeHtmlCharCodes(str) {
  return str.replace(/(&#(\d+);)/g, function(match, capture, charCode) {
    return String.fromCharCode(charCode);
  });
}

  $('#restart').click(function(){
    window.location.reload();
  });

  $('#start').click(function Screen(){
    $.ajax({
      dataType: "json",
      url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
      success: function(results) {
        $('#start').prop('disabled', 'true')
        nextQuestion(results , 0, 0)
      },
      error: function(xhr,status,error) {
        console.log(error);
      }

    })
  });
    function Pupper (){
      $.ajax({
        dataType: "json",
        url: "https://random.dog/woof.json",
        success: function(results) {
          console.log(results)
          if (results["url"].endsWith(".mp4")){
            Pupper()
          }else{
            $("#pic").attr( "src", results["url"])
          }


        },
        error: function(xhr,status,error) {
          console.log(error);
        }

      })
    };

});
