const homeid = document.getElementById("hscore")

const guestid = document.getElementById("gscore")

function win(){
    let h = parseInt(homeid.textContent)
    let g = parseInt(guestid.textContent)

    if( h>=18 & h>=g){
        let d=h-g
        let id="HOME"
        winner()
        popup(d,id)
    }
    else if(g>=18 & g>=h)
    {
        let d=g-h
        let id="GUEST"
        winner()
        popup(d,id)
    }
}

function add1() {
    let score = parseInt(homeid.textContent)
    score +=1
    homeid.textContent = score
    win()
}

function add2() {
    let score = parseInt(homeid.textContent)
    score +=2
    homeid.textContent = score
    win()
}

function add3() {
    let score = parseInt(homeid.textContent)
    score +=3
    homeid.textContent = score
    win()
}

function add4() {
    let score = parseInt(guestid.textContent)
    score +=1
    guestid.textContent = score
    win()
}

function add5() {
    let score = parseInt(guestid.textContent)
    score +=2
    guestid.textContent = score
    win()
}

function add6() {
    let score = parseInt(guestid.textContent)
    score +=3
    guestid.textContent = score
    win()
}

function reset() {
    homeid.textContent = "00"
    guestid.textContent = "00"
}


function winner() {
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);

}

function popup(d,id){
    document.getElementsByClassName("pop")[0].classList.add("active")
    let winn = document.getElementById("winners")
    let text = id + " Won the match by " + d + " points " 
    winn.textContent = text

}

function cpopup() {
     document.getElementsByClassName("pop")[0].classList.remove("active")
    reset()
}