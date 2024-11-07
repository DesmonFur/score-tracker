let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0

homeScoreEl.innerText = homeScore
homeScoreEl.innerText = guestScore
console.log(homeScoreEl)
console.log(guestScoreEl)

function addOne(team) {
if (team === 'home') {
    
homeScoreEl.innerText = homeScore += 1
}
if (team === 'guest') {
    
guestScoreEl.innerText = guestScore += 1
}
highlightLeader()

}



function addTwo(team) {
if (team === 'home') {
    
homeScoreEl.innerText = homeScore += 2
}
if (team === 'guest') {
    
guestScoreEl.innerText = guestScore += 2
}
highlightLeader()

}




function addThree(team) {
if (team === 'home') {
    
homeScoreEl.innerText = homeScore += 3
}
if (team === 'guest') {
    
guestScoreEl.innerText = guestScore += 3
}
highlightLeader()
}


function newGame() {

    homeScore = 0; 
    guestScore = 0;
    
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore 
    
     homeScoreEl.classList.remove('leader');
       guestScoreEl.classList.remove('leader');


}

function highlightLeader() {
    if (homeScore > guestScore) {
    console.log('hit')
  homeScoreEl.classList.add('leader');
  guestScoreEl.classList.remove('leader');
} else {
  guestScoreEl.classList.add('leader');
  homeScoreEl.classList.remove('leader');
}

}


