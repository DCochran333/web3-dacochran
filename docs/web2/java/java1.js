let npcCounter = 0;
let npc_name;
let maxhp;
let currentHP;
let healthChange;
let stat;

function getFromUI(npcCounter) {
 
    npc_name=document.getElementById(`npc_name${npcCounter}`);
    maxhp=document.getElementById(`maxHP${npcCounter}`);
    currentHP=document.getElementById(`currentHP${npcCounter}`);
    healthChange=document.getElementById(`healthChange${npcCounter}`);
    stats=document.getElementById(`stat${npcCounter}`);
    
    console.log(npc_name);
    console.log(maxhp.value);
    console.log(currentHP);
    console.log(healthChange);
    console.log(stats);
}

function initValues() {
    npc_name.value = "New NPC";
    maxhp.value = 0;
    healthChange.value = 0;
    stat.value = 0;

    npc_name.innerText=npc_name.value;
    maxhp.innerText=maxhp.value;
    healthChange.innerText=healthChange.value;

}

function fillContent() {
    getFromUI(npcCounter);
    initValues(npcCounter);
}

function setHP() {
    var hp = maxhp.value
    currentHP.innerHTML=`<p>${hp}</p>`;
}




// function newNPC() {
//     var npc = new NPC("NPCNAME", "000", "000", "000", "NONE", "0")
//     npc.getFromUI();
//     npc.innerHTML=obj.innerHTML+
//             `<tr>
//             <td>
//                 <label for="npc_name${newNPC.idnumber}"></label>
//                 <input type="text" id="npc_name"/>
//             </td>
//             <td>
//                 <label for="hp"></label>
//                 <input type="number" id="hp${newNPC.idnumber}"/>
//             </td>
//             <td>
//                 <label for="current"></label>
//                 <input type="number" id="current${newNPC.idnumber}"/>
//             </td>
//             <td>
//                 <label for="healthChange"></label>
//                 <input type="number" id="healthChange${newNPC.idnumber}"/>
//                 <button id="damage${newNPC.idnumber}">Damage</button><button id="healing${newNPC.idnumber}">Healing</button>

//             </td>
//             <td>
//                 <label for="stat"></label>
//                 <input type="text" id="stat${newNPC.idnumber}"/>
//                 <select id="status${newNPC.idnumber}">
//                     <option value='0'>None</option>
//                     <option value='1'>Poisoned</option>
//                     <option value='2'>Stunned</option>
//                     <option value='3'>Blinded</option>
//                     <option value='4'>Charmed</option>
//                     <option value='5'>Prone</option>
//                     <option value='1'>Banished</option>
//                     <option value='1'>Dead</option>
//                 </select>
//             </td>
//         </tr>`
//     npcCounter++;

// }    

// function newNPC() {
//     var obj=document.getElementById("tablebody");
//     obj.innerHTML=obj.innerHTML+
//             `<tr>
//             <td>
//                 <label for="npc_name${npcCounter}"></label>
//                 <input type="text" id="npc_name"/>
//             </td>
//             <td>
//                 <label for="hp"></label>
//                 <input type="number" id="hp${npcCounter}"/>
//             </td>
//             <td>
//                 <label for="current"></label>
//                 <input type="number" id="current${npcCounter}"/>
//             </td>
//             <td>
//                 <label for="healthChange"></label>
//                 <input type="number" id="healthChange${npcCounter}"/>
//                 <button id="damage${npcCounter}">Damage</button><button id="healing${npcCounter}">Healing</button>

//             </td>
//             <td>
//                 <label for="stat"></label>
//                 <input type="text" id="stat${npcCounter}"/>
//                 <select id="status${npcCounter}">
//                     <option value='0'>None</option>
//                     <option value='1'>Poisoned</option>
//                     <option value='2'>Stunned</option>
//                     <option value='3'>Blinded</option>
//                     <option value='4'>Charmed</option>
//                     <option value='5'>Prone</option>
//                     <option value='1'>Banished</option>
//                     <option value='1'>Dead</option>
//                 </select>
//             </td>
//         </tr>`
//     npcCounter++;
// }    

// function setHP() {
//     getFromUI();
//     currentHP.innerHTML=hp;
// }



// function damage() {
//     var buffer = hp.val() - healthChange.value();
//     currentHP.innerHTML = buffer;
// }

// function healing() {
//     var buffer = hp.val() - healthChange;
//     currentHP.innerHTML = buffer;
// }

// function statEffects(effect) {
//     // let effectType = document.getElementById(`status${npcCounter}`).value();
//     // if (effectType == 1) {
        
//     // }
// }
  
// $('#newCharacter').on('click', newNPC);

