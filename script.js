    //CSS taken from JS2 project, a little code taken from dice game project
    d1 = 0;
    d2 = 0;
    d3 = 0;
       function roll(){
           d1 = parseInt(Math.random() * 6);
           d2 = parseInt(Math.random() * 6);
           d3 = parseInt(Math.random() * 6);
        //    write()
       }
    //    function write(){
    //        why = document.getElementById("p");
    //        text = document.createTextNode("Dice 1 = "+d1);
    //        why.appendChild(text);
    //        text = document.createTextNode("  Dice 2 = "+d2);
    //        why.appendChild(text);
    //        text = document.createTextNode("  Total = "+(d1+d2));
    //        why.appendChild(text);
    //    }