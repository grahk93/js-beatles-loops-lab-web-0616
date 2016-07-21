function theBeatlesPlay(musiciansArray, instrumentArray) {
  var theyPlay = [];
  for(var i = 0; i < musiciansArray.length; i++) {
    var sentence = `${musiciansArray[i]} plays ${instrumentArray[i]}`;
    theyPlay.push(sentence);
  }
  return theyPlay
}

function johnLennonFacts(factArray) {
  var screamFacts = [];
  var i = 0;
  while(i < factArray.length) {
    screamFacts.push(factArray[i] + "!!!");
    i++;
  }
  return screamFacts
}

function iLoveTheBeatles(number){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    number++;
  } 
  while(number < 15);
  return loveArray
}