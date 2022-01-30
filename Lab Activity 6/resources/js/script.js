function swapMedia(){
    var top = document.getElementById("top")
    var bot = document.getElementById("buttom")
    var bParrent = document.getElementById("buttomCont")
    top.parentNode.replaceChild(bot, top)
    document.getElementById("buttom").id = "top"
    bParrent.appendChild(top)
    top.id = "buttom"
}

function removAud(){
    var aud = document.getElementById("audio")
    var parent = aud.parentNode
    parent.removeChild(aud)
}

function addElem(){
    var div = document.createElement("div")
    var p1 = document.createElement("p")
    var text1 = document.createTextNode("This is the first paragraph.")
    var p2 = document.createElement("p")
    var text2 = document.createTextNode("This is the second paragraph.")
    var parent = document.getElementById("buttomCont")
    p1.appendChild(text1)
    p2.appendChild(text2)
    div.appendChild(p1)
    div.appendChild(p2)
    parent.appendChild(div)

}