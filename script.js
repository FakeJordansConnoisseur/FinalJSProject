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
br = true;
one  = 0;
two = 0;
tres = 0;
four = 0;
five = 0;
six = 0;
table = document.getElementById("i6");

function roll(){

 if (br){
    // for (let k = 1; 6 >= k; k++){
    //     let row = i6.insertRow();
    //     c1 = row.insertCell();
    //     c2 = row.insertCell();
    //     }
        br = false;
 }
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
   a1  = 0;
    a2 = 0;
    a3 = 0;
    a4 = 0;
    a5 = 0;
    a6 = 0;

   


   times = parseInt(document.getElementById("fname").value);
//    let counts = count.ban;


//    times = document.getElementById("times").innerHTML;
 console.log("god");
   for (let i = 0; times > i; i++){
   d1 = parseInt(Math.random() * 6)+1;
   d2 = parseInt(Math.random() * 6)+1;
   d3 = parseInt(Math.random() * 6)+1;
   for (let p = 1; count >= p; p++){
        if (eval("d"+(p))== 1){
            a1++;
        } else if (eval("d"+(p))== 2){
            a2++;
        }else if (eval("d"+(p))== 3){
            a3++;
        }else if (eval("d"+(p))== 4){
            a4++;
        }else if (eval("d"+(p))== 5){
            a5++;
        }else if (eval("d"+(p))== 6){
            a6++;
        }
   }

   if (d1 == d2 ==d3){
      triples++;
   } else if (d1 == d2 || d2== d3){
      doubles++;
   }

   // summation = summation+d1+d2+d3;
   console.log("damn");
      for (let k = 1; count >= k; k++){
    console.log(k);
      dlist.push( eval("d"+(k)));
      summation +=eval("d"+(k));
      truesummation +=eval("d"+(k));
      }
      sumlist.push(summation);
      summation = 0;
      console.log("it");
   }
   calculateStats();
}
   

function calculateStats(){
   
   document.getElementById("i1").innerHTML= (truesummation/(count*times)).toFixed(2);
   document.getElementById("i2").innerHTML= (sumlist.sort(function(a, b){return a-b}))[parseInt((sumlist.length/2)-1)];
   document.getElementById("i3").innerHTML= mode(dlist);
   document.getElementById("i4").innerHTML= doubles;
   document.getElementById("i5").innerHTML= triples;
   tableUpdate();
   console.log(count,times,dlist,sumlist,d1,d2,d3,summation,truesummation,doubles,triples);
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
// end taken
function buttonsChange(am){
   count = am;
}
function tableUpdate(){
    for (let k = 1; 6 >= k; k++){
        console.log(table);
        console.log(table);
        table.rows[k].cells[0].innerHTML = eval(k);
        table.rows[k].cells[1].innerHTML = eval("a"+(k));
        console.log(a1,a2);
        
        }
}

// function timesChange(){

// }

// function amountChange(){
   
// }