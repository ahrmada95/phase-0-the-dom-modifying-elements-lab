main = document.getElementById("main");
main.remove()

//Why does this work but removing const does not?
//What am I creating here exactly?
const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Ahnaf is the champion";