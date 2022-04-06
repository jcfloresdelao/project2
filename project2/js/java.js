function namesTogether() {
    var firstName = document.getElementById("nameOne").value;
    var secondName = document.getElementById("nameTwo").value;
    let firstInitial = firstName.charAt(0);
    let secondInitial = secondName.charAt(0);
    document.getElementById("initials").innerHTML = firstInitial + " & " + secondInitial;
    document.getElementById("names").innerHTML = firstName + " & " + secondName;
}

function surnameFunction() {
    var sName = document.getElementById("surname").value;
    document.getElementById("sName").innerHTML = sName;
}

function weddingDateFunction() {
    let dateOfWed = document.getElementById("date").value;
    document.getElementById("weddingDate").innerHTML = dateOfWed;
}

function locationLocation() {
    let wedLocal = document.getElementById("local").value;
    document.getElementById("weddingLocation").innerHTML = wedLocal;
}

function formalFunction() {
    let formalChange = document.getElementById("output");
    formalChange.style.backgroundImage = "url('formal.png')";
    formalChange.style.color = "black";
    formalChange.style.fontFamily="Cursive";
    formalChange.style.textShadow ="#FFD700";
}

function springFunction() {
    let springChange = document.getElementById("output");
    springChange.style.backgroundImage = "url('spring.png')";
    springChange.style.color = "#369cae";
    springChange.style.fontFamily="Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
    springChange.style.fontStyle="Italic";
  }


  function artFunction() {
    let artChange = document.getElementById("output");
    artChange.style.backgroundImage = "url('art.png')";
    artChange.style.color = "white";
    artChange.style.fontFamily="Franklin Gothic Medium, Arial Narrow, Arial, sans-serif";
    artChange.style.fontStyle="Italic";
  }