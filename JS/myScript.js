var setValuesToEmpty = () => {
  var table = document.getElementsByClassName("game-table")[0];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      document.getElementById(cell.id).innerText = "";
      document.getElementById(cell.id).classList.remove("animate-td");
      document.getElementById(cell.id).classList.remove("winnerCell");
    }
  }
  document.getElementById("xTurn").classList.add("x-turn");
  document.getElementById("xTurn").classList.add("turnColor");
  document.getElementById("oTurn").classList.remove("o-turn");
  document.getElementById("oTurn").classList.remove("turnColor");
  document.getElementById("winner").innerText = "";
  document.body.classList.add("bodyBG");
  setGameOn();
};

var checkWin = (str) => {
  if (str !== "") {
    var winnerFound = false;
    if (
      document.getElementById("box0").innerText === str &&
      document.getElementById("box1").innerText === str &&
      document.getElementById("box2").innerText === str
    ) {
      document.getElementById("box0").classList.add("winnerCell");
      document.getElementById("box1").classList.add("winnerCell");
      document.getElementById("box2").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box3").innerText === str &&
      document.getElementById("box4").innerText === str &&
      document.getElementById("box5").innerText === str
    ) {
      document.getElementById("box3").classList.add("winnerCell");
      document.getElementById("box4").classList.add("winnerCell");
      document.getElementById("box5").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box6").innerText === str &&
      document.getElementById("box7").innerText === str &&
      document.getElementById("box8").innerText === str
    ) {
      document.getElementById("box6").classList.add("winnerCell");
      document.getElementById("box7").classList.add("winnerCell");
      document.getElementById("box8").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box0").innerText === str &&
      document.getElementById("box3").innerText === str &&
      document.getElementById("box6").innerText === str
    ) {
      document.getElementById("box0").classList.add("winnerCell");
      document.getElementById("box3").classList.add("winnerCell");
      document.getElementById("box6").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box1").innerText === str &&
      document.getElementById("box4").innerText === str &&
      document.getElementById("box7").innerText === str
    ) {
      document.getElementById("box1").classList.add("winnerCell");
      document.getElementById("box4").classList.add("winnerCell");
      document.getElementById("box7").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box2").innerText === str &&
      document.getElementById("box5").innerText === str &&
      document.getElementById("box8").innerText === str
    ) {
      document.getElementById("box2").classList.add("winnerCell");
      document.getElementById("box5").classList.add("winnerCell");
      document.getElementById("box8").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box0").innerText === str &&
      document.getElementById("box4").innerText === str &&
      document.getElementById("box8").innerText === str
    ) {
      document.getElementById("box0").classList.add("winnerCell");
      document.getElementById("box4").classList.add("winnerCell");
      document.getElementById("box8").classList.add("winnerCell");
      winnerFound = true;
    } else if (
      document.getElementById("box2").innerText === str &&
      document.getElementById("box4").innerText === str &&
      document.getElementById("box6").innerText === str
    ) {
      document.getElementById("box2").classList.add("winnerCell");
      document.getElementById("box4").classList.add("winnerCell");
      document.getElementById("box6").classList.add("winnerCell");
      winnerFound = true;
    }
    if (winnerFound) {
      finishGame(str);
    }
  }
};

var finishGame = (str) => {
  var table = document.getElementsByClassName("game-table")[0];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.onclick = "";
    }
  }
  if (str === "X") {
    document.getElementById("winner").innerHTML =
      "Player 1 <i class='fas fa-trophy'></i>";
  } else if (str === "0") {
    document.getElementById("winner").innerHTML =
      "Player 2 <i class='fas fa-trophy'></i>";
  }
};

function setChecked() {
  //console.log(this.id);
  if (document.getElementById(this.id).innerText === "") {
    if (
      document.getElementById("xTurn").classList.contains("x-turn") &&
      !document.getElementById("oTurn").classList.contains("o-turn")
    ) {
      document.getElementById(this.id).innerText = "X";
      document.getElementById("xTurn").classList.remove("x-turn");
      document.getElementById("xTurn").classList.remove("turnColor");
      document.getElementById("oTurn").classList.add("o-turn");
      document.getElementById("oTurn").classList.add("turnColor");
    } else if (
      !document.getElementById("xTurn").classList.contains("x-turn") &&
      document.getElementById("oTurn").classList.contains("o-turn")
    ) {
      document.getElementById(this.id).innerText = "0";
      document.getElementById("oTurn").classList.remove("o-turn");
      document.getElementById("oTurn").classList.remove("turnColor");
      document.getElementById("xTurn").classList.add("x-turn");
      document.getElementById("xTurn").classList.add("turnColor");
    }
    document.getElementById(this.id).classList.add("animate-td");
    checkWin(document.getElementById(this.id).innerText);
  } else {
    errorToastr(
      "Already Occupied by " + document.getElementById(this.id).innerText,
      "Not Empty"
    );
  }
}

var errorToastr = (errorMessage = "", errorTitle = "") => {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-center",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "500",
    timeOut: "3000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  toastr["error"](errorMessage, errorTitle);
};

var setGameOn = () => {
  var table = document.getElementsByClassName("game-table")[0];
  for (let row of table.rows) {
    for (let cell of row.cells) {
      //console.log(cell.id);
      cell.onclick = setChecked;
    }
  }
};

var toggleValues = () => {
  if (document.getElementById("mode").classList.contains("btnL")) {
    document.getElementById("mode").classList.add("logo-dm");
    document.getElementById("mode").classList.remove("btnL");
    document.getElementById("mode").classList.add("btnD");
    document.getElementById("mode").innerHTML =
      "<i class='fas fa-sun fa-3x'></i>";
    document
      .getElementsByClassName("container")[0]
      .classList.add("container-dm");
    document.getElementById("head").classList.add("head-dm");
    document.getElementById("info-table").classList.add("info-table-dm");
    document.getElementById("winner").classList.add("winner-dm");
    document.body.classList.add("bodyBG-dm");
    document.body.classList.remove("bodyBG");
    var logo = document.getElementsByClassName("btnLogo");
    for (var i = 0; i < logo.length; ++i) {
      logo[i].classList.remove("black-icon");
      logo[i].classList.add("logo-dm");
    }
  } else if (document.getElementById("mode").classList.contains("btnD")) {
    document.getElementById("mode").classList.remove("logo-dm");
    document.getElementById("mode").classList.remove("btnD");
    document.getElementById("mode").classList.add("btnL");
    document.getElementById("mode").innerHTML =
      "<i class='fas fa-moon fa-3x'></i>";
    document
      .getElementsByClassName("container")[0]
      .classList.remove("container-dm");
    document.getElementById("head").classList.remove("head-dm");
    document.getElementById("info-table").classList.remove("info-table-dm");
    document.getElementById("winner").classList.remove("winner-dm");
    document.body.classList.remove("bodyBG-dm");
    document.body.classList.add("bodyBG");
    var logo = document.getElementsByClassName("btnLogo");
    for (var i = 0; i < logo.length; ++i) {
      logo[i].classList.remove("logo-dm");
      logo[i].classList.add("black-icon");
    }
  }
};

window.onload = function () {
  setValuesToEmpty();
  document.getElementById("restartGameBtn").onclick = setValuesToEmpty;
  document.getElementById("mode").innerHTML =
    "<i class='fas fa-moon fa-3x'></i>";
  document.getElementById("mode").classList.add("btnL");
  document.getElementById("mode").onclick = toggleValues;
  document.addEventListener("contextmenu", (event) => event.preventDefault());
};
