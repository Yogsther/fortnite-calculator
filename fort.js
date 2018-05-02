// DATA
var allowed = new Array();
var sheet = new Array();

data = [
    [1, 100],
    [6, 850],
    [8, 1050],
    [14, 1650],
    [17, 1950],
    [19, 2150],
    [20, 2300],
    [21, 2450],
    [23, 2750],
    [35, 4550],
]

for(i = 0; i < data.length; i++){
    allowed[i] = data[i][0]
    sheet[i] = data[i][1]
}

var table = new Array();
table[0] = {xp: 0, lvl: 0}

onlyPrintKnown = true;
startXP = 100;
tablePos = 0;
for (let i = 1; i <= 100; i++) {

    
    // TODO
    //*************************  

    jump = (Math.floor(i / 10) + 1) * 50;
    startXP += jump;

    //*************************   
    

    /* startXP = Math.pow(Math.E, 6.3795 + (0.0466 * i)); Not working. */
    /* startXP = 4732.3923 + (((-1) * 5938.2544) / i); Not wurking */
    
    
    if (allowed.indexOf(i) != -1 && onlyPrintKnown) {
        
        try{
            table[tablePos] = {
                xp: startXP,
                lvl: i
            };
            tablePos++;

            if(table.length > 1) avrageSpacing = table[table.length-2].lvl;
                else avrageSpacing = table[table.length-1].lvl;
            
            avrageSpacing = table[table.length-1].lvl - avrageSpacing 

            var r = {
                lvl: i,
                jump: jump,               
                xp: Math.round(startXP / 10) * 10,
                answer: sheet[allowed.indexOf(i)],
                avrageSpacing: (sheet[allowed.indexOf(i)] - sheet[allowed.indexOf(i)-1]) / avrageSpacing,
                correct: sheet[allowed.indexOf(i)] == startXP,
            }

            console.log(`Lvl: ${r.lvl} Jump: ${r.jump} XP: ${r.xp} Answer: ${r.answer} Avrage spacing: ${r.avrageSpacing} Correct: ${r.correct}`);
        } catch(e){
            throw e
        }
        
    }
}

var getStrings = () => {
    var string1 = ""
    var string2 = ""
    for (let i = 0; i < allowed.length; i++) {
        string1 += allowed[i] + " "
        string2 += sheet[i] + " "
    }
    console.log(string1)
    console.log(string2);
}

function getXP(lvl) {
    startXP = 700;
    for (let i = 1; i <= lvl; i++) {
        add = (Math.floor(i / 10) + 1) * 50
        startXP += add
    }
    return startXP;
}


function calculate(currentLVL, wantedTeir) {

}


function run() {
    var level = Number(document.getElementById("level").value);
    var teir = Number(document.getElementById("teir").value);
    var desiredTeir = Number(document.getElementById("desiredTeir").value);






}