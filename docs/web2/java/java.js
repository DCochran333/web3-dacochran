var npcCounter = 0;
var deathCount = 0;

let npcList = new Array();

class NPC {

    constructor (newName, newAC, newHP, newCurrent, newChange, newStat, newCounter, newDeath, newLife, newDCount) {
        this.name = newName;
        this.ac = newAC;
        this.hp = newHP;
        this.current = newCurrent;
        this.change = newChange;
        this.stat = newStat;
        this.counter = newCounter;
        this.death = newDeath;
        this.life = newLife;
        this.dcount = newDCount;
    }

    getFromUI() {
        this.name = document.getElementById(`npc_name${this.counter}`);
        this.hp = document.getElementById(`hp${this.counter}`);
        this.change = document.getElementById(`healthChange${this.counter}`);
        this.stat = document.getElementById(`stat${this.counter}`);
        this.death = document.getElementById(`deathThrow${this.counter}`);
        this.life = document.getElementById(`lifeThrow${this.counter}`);
        // console.log(this.name.value);
        // console.log(this.hp.value);
        // console.log(this.current);
        // console.log(this.change);
        // console.log(this.counter);
    }

    initilizeValues() {
        this.name.value = "New NPC";
        this.hp.value = 100;
        this.change.value = 0;
        
    }

    updateUI() {
        this.name.innerHTML = this.name.innerHTML+this.name.innerHTML.value;
        this.ac.innerHTML = this.ac.innerHTML+this.ac.innerHTML.value;
        this.hp.innerHTML = this.hp.innerHTML+this.hp.innerHTML.value;
        this.change.innerHTML = this.change.innerHTML+this.change.innerHTML.value;
        console.log(this.name.value);
        console.log(this.hp.value);
        console.log(this.change.value);
        console.log(this.counter);
    }

    damage() {
        document.getElementById(`damage${this.counter}`).addEventListener('click', () => {
            this.hp.value = parseInt(this.hp.value) - parseInt(this.change.value);
            this.updateUI;
            if(this.hp.value <= 0) {
                this.stat.selectedIndex = '8'
            }
            this.change.value = 0;
            this.updateUI;
        });
    }

    healing() {
        document.getElementById(`healing${this.counter}`).addEventListener('click', () => {
                this.hp.value = parseInt(this.hp.value) + parseInt(this.change.value);
                this.change.value = 0;
                this.updateUI;
                
        });
    }

    isItDead(){
        document.getElementById(`deathThrow${this.counter}`).addEventListener('change', () => {
            this.dcount++;
            if (this.dcount >= 3) {
                this.stat.selectedIndex = '7';
            }
        });
    }

    makeNPC() {
        //citation: https://youtu.be/y17RuWkWdn8 "Learning DOM Manipulation in 18 minutes" -Web Dev Simplified
        const content = document.getElementById('table');
        // console.log(table);
        // console.log(this.counter);
        // let c=this.counter;
        content.innerHTML= content.innerHTML + `  
            <table>
                <tr>
                    <td>
                        <label for="npc_name${this.counter}"></label>
                        <input type="text" id="npc_name${this.counter}"/>
                    </td>
                    <td>
                        <label for="ac${this.counter}"></label>
                        <input type="number" id="ac${this.counter}"/>
                    </td>
                    <td>
                        <label for="hp${this.counter}"></label>
                        <input type="number" id="hp${this.counter}"/>
                    </td>
                    <td>
                        <label for="healthChange${this.counter}"></label>
                        <input type="number" id="healthChange${this.counter}"/><br>
                        <button id="damage${this.counter}">Damage</button>
                        <button id="healing${this.counter}">Healing</button>
                    </td>
                    <td>
                        <label for="stat${this.counter}"></label>
                        <select name = status id="stat${this.counter}">
                            <option value='0'>None</option>
                            <option value='1'>Poisoned</option>
                            <option value='2'>Stunned</option>
                            <option value='3'>Blinded</option>
                            <option value='4'>Charmed</option>
                            <option value='5'>Prone</option>
                            <option value='6'>Banished</option>
                            <option value='7'>Dead</option>
                            <option value='8'>Unconscious</option>
                        </select>
                    </td>
                    <td>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox" id="deathThrow${this.counter}"/>
                    </td>
                    <td>
                        <input type="checkbox" id=/>
                        <input type="checkbox" id=/>
                        <input type="checkbox" id="lifeThrow${this.counter}"/>
                    </td>

                </tr>
            </table>`;
            // console.log(content)
    }

}

function fillContent() {
    newNPC();
    
}

function newNPC() {
    // console.log(npcCounter);
    var npc = new NPC("New NPC", 0, 0, 0, 0, 0, npcCounter, "", "", 0);
    // console.log(npc);
    npc.makeNPC();
    npcList.push(npc);
    npcList[npcCounter].getFromUI();
    npcCounter++;
    console.log(npcList[npcList.length-1]);
}

function updateNPC() {
    for (var i = 0; i < npcList.length; i++) {
        npcList[i].getFromUI();
        npcList[i].isItDead();
        npcList[i].damage();
        npcList[i].healing();
        console.log(npcList[i]);
    }
}



// function damage() {
//     document.getElementById(`damage`).onclick = function(){
//         for (var i = 0; i < npcList.length; i++) {
//             npcList[i].hp.value = npcList[i].hp.value - npcList[i].change.value;
        
//             if(npcList[i].hp.value <= 0) {
//                 npcList[i].stat.selectedIndex = "7";
//                 console.log("did something");
//             }            
//             npcList[i].change.value = '0';
//             updateNPC();
//         }
//     }
// }

// function healing() {
//     document.getElementById(`healing`).onclick = function(){
//         for (var i = 0; i < npcList.length; i++) {
//             npcList[i].hp.value = parseInt(npcList[i].hp.value) + parseInt(npcList[i].change.value);
//             npcList[i].change.value = 0;
//             updateNPC();
//         }
//     }
// }