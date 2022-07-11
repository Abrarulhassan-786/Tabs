// get elements for 0st tab
var tab0 = document.getElementById("tab0")
var btn0 = document.getElementById("btn1")
tab0.style.display = "block"
btn0.style.backgroundColor = "blue"
btn0.style.color = "white"

// // get elements for 1st tab
var tab1 = document.getElementById("tab1")
var btn1 = document.getElementById("btn2")
tab1.style.display = "none"

// // get elements for 2st tab
var tab2 = document.getElementById("tab2")
var btn2 = document.getElementById("btn3")
tab2.style.display = "none"

// // get elements for 3st tab
var tab3 = document.getElementById("tab3")
var btn3 = document.getElementById("btn4")
tab3.style.display = "none"

function changeTab(tabValue){
    if (tabValue == 0)
    {
        tab0.style.display = "Block"
        btn0.style.backgroundColor = "blue"
        btn0.style.color = "white"
        tab1.style.display = "none"
        btn1.style.backgroundColor = "transparent"
        btn1.style.color = "black"
        tab2.style.display = "none"
        btn2.style.backgroundColor = "transparent"
        btn2.style.color = "black"
        tab3.style.display = "none"
        btn3.style.backgroundColor = "transparent"
        btn3.style.color = "black"
    }
    else if (tabValue == 1)
    {
        tab0.style.display = "none"
        btn0.style.backgroundColor = "transparent"
        tab1.style.display = "Block"
        btn1.style.backgroundColor = "blue"
        btn1.style.color = "white"
        tab2.style.display = "none"
        btn2.style.backgroundColor = "transparent"
        btn2.style.color = "black"
        tab3.style.display = "none"
        btn3.style.backgroundColor = "transparent"
        btn3.style.color = "black"
    }
    else if (tabValue == 2)
    {
        tab0.style.display = "none"
        btn0.style.color = "black"
        btn0.style.backgroundColor = "transparent"
        btn0.style.color = "black"
        tab1.style.display = "none"
        btn1.style.backgroundColor = "transparent"
        btn1.style.color = "black"
        tab2.style.display = "Block"
        btn2.style.backgroundColor = "blue"
        btn2.style.color = "white"
        tab3.style.display = "none"
        btn3.style.backgroundColor = "transparent"
        btn3.style.color = "black"
    }
    else if (tabValue == 3)
    {
        tab0.style.display = "none"
        btn0.style.backgroundColor = "transparent"
        btn0.style.color = "black"
        tab1.style.display = "none"
        btn1.style.backgroundColor = "transparent"
        btn1.style.color = "black"
        tab2.style.display = "none"
        btn2.style.backgroundColor = "transparent"
        tab3.style.display = "Block"
        btn3.style.backgroundColor = "blue"
        btn3.style.color = "white"
    }
}
