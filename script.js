//CSS taken from JS2 project, a little code taken from dice game project

count = 0;
times = 0;
dlist = [];
sumlist = [];
d1 = 0;
d2 = 0;
d3 = 100;
summation = 0;
truesummation = 0;
doubles = 0;
triples = 0;


function roll(){


   count = 0;
   times = 0;
   dlist = [];
   sumlist = [];
   d1 = 0;
   d2 = 0;
   d3 = 100;
   summation = 0;
   truesummation = 0;
   doubles = 0;
   triples = 0;

   count = document.getElementById("count");
   times = document.getElementById("times");
   for (i = 0; times > i; i++){
   d1 = parseInt(Math.random() * 6)+1;
   d2 = parseInt(Math.random() * 6)+1;
   d3 = parseInt(Math.random() * 6)+1;
   
   if (d1 == d2 ==d3){
      triples++;
   } else if (d1 == d2 || d2== d3){
      doubles++;
   }

   // summation = summation+d1+d2+d3;
      for (i = 0; count > i; i++){
      dlist.push( eval("d"+toString(i)));
      summation +=eval("d"+toString(i));
      truesummation +=eval("d"+toString(i));
      }
      sumlist.push(summation);
      summation = 0;
   }
   calculateStats();
}
   

function calculateStats(){
   
   document.getElementById("i1").innerHTML= (truesummation/(count*times));
   document.getElementById("i2").innerHTML= (sumlist.sort(function(a, b){return a-b}))[parseInt((sumlist.length/2)-1)];
   document.getElementById("i3").innerHTML= mode(sumlist);
   document.getElementById("i4").innerHTML= doubles;
   document.getElementById("i5").innerHTML= triples;
}
//taken from stack overflow
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function buttonsChange(am){
   count = am;
}
// end taken

// function timesChange(){

// }

// function amountChange(){
   
// }