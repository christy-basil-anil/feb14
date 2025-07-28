function hideButton(elementId) {
    var element=document.getElementById(elementId);
    if(element){
        element.style.visibility="hidden";
    }
}

function showButton(elementId) {
    var element=document.getElementById(elementId);
    if(element){
        element.style.visibility="visible";
    }
}

function newb(){
    document.body.style.backgroundImage="url('pinkb.png')";
}


        const a = ["WIN","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","WIN","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","WIN","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING","NOTHING",];


        // Function to apply the Fisher-Yates Shuffle
        function myFunction(array) {
        
            // Iterate over the array in reverse order
            for (let i = array.length - 1; i > 0; i--) {
        
                // Generate Random Index
                const j = Math.floor(Math.random() * (i + 1));
        
                // Swap elements
                [array[i], array[j]] = [array[j], array[i]];
            }
            
        }
        
        
        
        function Display(){
            document.getElementById('1').value =a[0];
            document.getElementById('2').value =a[1];
            document.getElementById('3').value =a[2];
            document.getElementById('4').value =a[3];
            document.getElementById('5').value =a[4];
            document.getElementById('6').value =a[5];
            document.getElementById('7').value =a[6];
            document.getElementById('8').value =a[7];
            document.getElementById('9').value =a[8];
            document.getElementById('10').value =a[9];
            document.getElementById('11').value =a[10];
            document.getElementById('12').value =a[11];
            document.getElementById('13').value =a[12];
            document.getElementById('14').value =a[13];
            document.getElementById('15').value =a[14];
            document.getElementById('16').value =a[15];
            document.getElementById('17').value =a[16];
            document.getElementById('18').value =a[17];
            document.getElementById('19').value =a[18];
            document.getElementById('20').value =a[19];
            document.getElementById('21').value =a[20];
            document.getElementById('22').value =a[21];
            document.getElementById('23').value =a[22];
            document.getElementById('24').value =a[23];
            document.getElementById('25').value =a[24];
            document.getElementById('26').value =a[25];
            document.getElementById('27').value =a[26];
            document.getElementById('28').value =a[27];
            document.getElementById('29').value =a[28];
            document.getElementById('30').value =a[29];
            document.getElementById('31').value =a[30];
            document.getElementById('32').value =a[31];
            document.getElementById('33').value =a[32];
            document.getElementById('34').value =a[33];
            document.getElementById('35').value =a[34];
            document.getElementById('36').value =a[35];
        }
        
        async function Dis() {  
                myFunction(a);      // Call your myFunction(a)
                Display();          // Call your Display()          
            console.log(a);
            hideButton('play');
            showButton('lay');
            newb();
            
        }
        
        