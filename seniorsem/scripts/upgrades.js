var growUpgrades = []
var evolveUpgrades = []
var activeGrow = []
var activeEvo = []

sizeBoost = 0
powerBoost = 0
speedBoost = 0
mutateBoost = 0
replicateCount = 0
lightningCount = 0
evoFactorCount = 0
evoAmountCount = 0

// Model of upgrades comes from the game Universal Paperclips


// Size gain upgrades

var growUpgrade1 = {
    id: "growUpgrade1",
    title: "GROW MORE",
    priceTag: "(5 EP)",
    description: "Increases size gained per second.",
    list: "upgradeList1",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 5 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade1.flag = 1;
        virus.useEvoPoints(5)
        virus.setGrowthRate(1)
        sizeBoost = 1;
        growUpgrade1.element.parentNode.removeChild(growUpgrade1.element);
        var index = activeGrow.indexOf(growUpgrade1);
        activeGrow.splice(index, 1);
    }
}

growUpgrades.push(growUpgrade1);

var growUpgrade2 = {
    id: "growUpgrade2",
    title: "GROW EVEN MORE",
    priceTag: "(10 EP)",
    description: "Doubles size gained per second.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 10 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade2.flag = 1;
        virus.useEvoPoints(10)
        virus.setGrowthRate(2)
        sizeBoost = 2;
        growUpgrade2.element.parentNode.removeChild(growUpgrade2.element);
        var index = activeGrow.indexOf(growUpgrade2);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade2);

//

var growUpgrade3 = {
    id: "growUpgrade3",
    title: "CANT STOP GROWING",
    priceTag: "(40 EP)",
    description: "Doubles size gained per second.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 40 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade3.flag = 1;
        virus.useEvoPoints(40)
        virus.setGrowthRate(4)
        sizeBoost = 3;
        growUpgrade3.element.parentNode.removeChild(growUpgrade3.element);
        var index = activeGrow.indexOf(growUpgrade3);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade3);




// Mutation upgrades

var growUpgrade4 = {
    id: "growUpgrade4",
    title: "MUTATE",
    priceTag: "(60 EP)",
    description: "Every 1000 size gained gives a chance for a random positive mutation of stats.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 60},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade4.flag = 1;
        virus.useEvoPoints(60)
        virus.mutation = true;
        mutateBoost = 1;
        growUpgrade4.element.parentNode.removeChild(growUpgrade4.element);
        var index = activeGrow.indexOf(growUpgrade4);
        activeGrow.splice(index, 1);
    }
}
growUpgrades.push(growUpgrade4);

var growUpgrade5 = {
    id: "growUpgrade5",
    title: "BETTER MUTATION",
    priceTag: "(50 EP)",
    description: "Better mutation odds.",
    list: "upgradeList1",
    trigger: function(){return mutateBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 50},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade5.flag = 1;
        virus.useEvoPoints(50)
        virus.mutateFloor = 0.65
        mutateBoost = 2;
        growUpgrade5.element.parentNode.removeChild(growUpgrade5.element);
        var index = activeGrow.indexOf(growUpgrade5);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade5);

var growUpgrade6 = {
    id: "growUpgrade6",
    title: "GOING THROUGH CHANGES",
    priceTag: "(75 EP)",
    description: "Greatly increased mutation odds",
    list: "upgradeList1",
    trigger: function(){return mutateBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 75},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade6.flag = 1;
        virus.useEvoPoints(75)
        virus.mutateFloor = .40
        mutateBoost = 3
        growUpgrade6.element.parentNode.removeChild(growUpgrade6.element);
        var index = activeGrow.indexOf(growUpgrade6);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade6);

var growUpgrade7 = {
    id: "growUpgrade7",
    title: "MUTATION COMPLETE",
    priceTag: "(100 EP)",
    description: "The odds are forever in your favor",
    list: "upgradeList1",
    trigger: function(){return mutateBoost == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 100 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade7.flag = 1;
        virus.useEvoPoints(100)
        virus.mutateFloor = 0.1
        mutateBoost = 4
        growUpgrade7.element.parentNode.removeChild(growUpgrade7.element);
        var index = activeGrow.indexOf(growUpgrade7);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade7);

var growUpgrade8 = {
    id: "growUpgrade8",
    title: "EFFICIENT EVOLUTION",
    priceTag: "(15 EP, 750 Size)",
    description: "Decrease amount of size needed for EPs.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 2},
    uses: 1,
    cost: function(){ return virus.evoPoints >= 15 && virus.tSize> 750},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade8.flag = 1;
        virus.useEvoPoints(15)
        virus.removeSize(750)
        evoFactorCount = 1
        virus.evoLevel = 1
        virus.evoSet(1)
        growUpgrade8.element.parentNode.removeChild(growUpgrade8.element);
        var index = activeGrow.indexOf(growUpgrade8);
        activeGrow.splice(index, 1);
    }
}
growUpgrades.push(growUpgrade8);

var growUpgrade9 = {
    id: "growUpgrade9",
    title: "EVEN MORE EFFICIENT EVOLUTION",
    priceTag: "(30 EP, 1250 Size)",
    description: "Even less size for EPs",
    list: "upgradeList1",
    trigger: function(){return evoFactorCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 30 && virus.tSize> 1250},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade9.flag = 1;
        virus.useEvoPoints(30)
        virus.removeSize(1250)
        evoFactorCount = 2
        virus.evoLevel = 2
        virus.evoSet(1)
        growUpgrade9.element.parentNode.removeChild(growUpgrade9.element);
        var index = activeGrow.indexOf(growUpgrade9);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade9);

var growUpgrade10 = {
    id: "growUpgrade10",
    title: "SYSTEMATIC EVOLUTION",
    priceTag: "(40 EP. 2000 size)",
    description: "More evolution, less size.",
    list: "upgradeList1",
    trigger: function(){return evoFactorCount == 2},
    uses: 1,
    cost: function(){return  virus.evoPoints >= 40 && virus.tSize > 2000 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade10.flag = 1;
        virus.useEvoPoints(40)
        virus.removeSize(2000)
        evoFactorCount = 3
        virus.evoLevel = 3
        virus.evoSet(1)
        growUpgrade10.element.parentNode.removeChild(growUpgrade10.element);
        var index = activeGrow.indexOf(growUpgrade10);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade10);

var growUpgrade11 = {
    id: "growUpgrade11",
    title: "EFFCIENCY OVERLOADED",
    priceTag: "(100 EP, 3000 size)",
    description: "Most efficient evolution size can get you.",
    list: "upgradeList1",
    trigger: function(){return evoFactorCount == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 100 && virus.tSize > 3000},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade11.flag = 1;
        virus.useEvoPoints(100)
        virus.removeSize(3000)
        evoFactorCount = 4
        virus.evoLevel = 4
        virus.evoSet(1)
        growUpgrade11.element.parentNode.removeChild(growUpgrade11.element);
        var index = activeGrow.indexOf(growUpgrade11);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade11);


var growUpgrade12 = {
    id: "growUpgrade12",
    title: "REPLICATE",
    priceTag: "(100 EP)",
    description: "Unlock the ability to replicate.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 100 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade12.flag = 1;
        virus.useEvoPoints(100)
        virus.replication = true;
        virus.replicateCheck;
        replicateCount = 1;
        virus.replicateLimit = 2
        growUpgrade12.element.parentNode.removeChild(growUpgrade12.element);
        var index = activeGrow.indexOf(growUpgrade12);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade12);

var growUpgrade13 = {
    id: "growUpgrade13",
    title: "WE NEED MORE",
    priceTag: "(120 EP)",
    description: "Increase amount of replicates you can create.",
    list: "upgradeList1",
    trigger: function(){return replicateCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 120},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade13.flag = 1;
        virus.useEvoPoints(120)
        replicateCount = 2;
        virus.replicateLimit = 3
        growUpgrade13.element.parentNode.removeChild(growUpgrade13.element);
        var index = activeGrow.indexOf(growUpgrade13);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade13);

var growUpgrade14 = {
    id: "growUpgrade14",
    title: "POWER OVERWHELMING",
    priceTag: "(150 EP)",
    description: "Reach the maximum replicant count.",
    list: "upgradeList1",
    trigger: function(){return replicateCount == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 150 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade14.flag = 1;
        virus.useEvoPoints(150)
        replicateCount = 3;
        virus.replicateLimit = 4
        growUpgrade14.element.parentNode.removeChild(growUpgrade14.element);
        var index = activeGrow.indexOf(growUpgrade14);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade14);


var growUpgrade15 = {
    id: "growUpgrade15",
    title: "WE MUST EVOLVE",
    priceTag: "(1000 Size)",
    description: "Incease evolution points per evolution.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 1},
    uses: 1,
    cost: function(){return virus.tSize > 1000}, 
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade15.flag = 1;
        virus.removeSize(1000)
        evoAmountCount = 1
        virus.evoAmount += 1
        growUpgrade15.element.parentNode.removeChild(growUpgrade15.element);
        var index = activeGrow.indexOf(growUpgrade15);
        activeGrow.splice(index, 1);
    }
}
  
growUpgrades.push(growUpgrade15);

var growUpgrade16 = {
    id: "growUpgrade16",
    title: "ONLY THE FITTEST SURVIVE",
    priceTag: "(7500 Size)",
    description: "More EP per evolution and a special gift.",
    list: "upgradeList1",
    trigger: function(){return evoAmountCount == 1},
    uses: 1,
    cost: function(){return virus.tSize > 7500},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade16.flag = 1;
        virus.removeSize(7500)
        virus.evoPoints += 50
        evoAmountCount = 2
        virus.evoAmount += 1
        growUpgrade16.element.parentNode.removeChild(growUpgrade16.element);
        var index = activeGrow.indexOf(growUpgrade16);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade16);






var evoUpgrade1 = {
    id: "evoUpgrade1",
    title: "POWER",
    priceTag: "(1 EP)",
    description: "Begin gaining power",
    list: "upgradeList2",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 1 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade1.flag = 1;
        virus.useEvoPoints(1)
        virus.setPower(1)
        powerBoost = 1;
        evoUpgrade1.element.parentNode.removeChild(evoUpgrade1.element);
        var index = activeEvo.indexOf(evoUpgrade1);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade1)

var evoUpgrade2 = {
    id: "evoUpgrade1",
    title: "SPEED",
    priceTag: "(1 EP)",
    description: "Begin gaining speed",
    list: "upgradeList2",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 1 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade2.flag = 1;
        virus.useEvoPoints(1)
        virus.setSpeed(1)
        speedBoost = 1;
        evoUpgrade2.element.parentNode.removeChild(evoUpgrade2.element);
        var index = activeEvo.indexOf(evoUpgrade2);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade2)

var evoUpgrade3 = {
    id: "evoUpgradex ",
    title: "MORE POWER",
    priceTag: "(2 EP)",
    description: "Gain more power",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 2 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade3.flag = 1;
        virus.useEvoPoints(2)
        virus.setPower(2)
        powerBoost = 2;
        evoUpgrade3.element.parentNode.removeChild(evoUpgrade3.element);
        var index = activeEvo.indexOf(evoUpgrade3 );
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade3)

var evoUpgrade4 = {
    id: "evoUpgradex ",
    title: "MORE SPEED",
    priceTag: "(2 EP)",
    description: "Gain more speed",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 2},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade4.flag = 1;
        virus.useEvoPoints()
        virus.setSpeed(2)
        speedBoost = 2
        evoUpgrade4.element.parentNode.removeChild(evoUpgrade4.element);
        var index = activeEvo.indexOf(evoUpgrade4);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade4)

var evoUpgrade5 = {
    id: "evoUpgrade5",
    title: "EVEN MORE POWER",
    priceTag: "(4 EP)",
    description: "Read the title",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 4 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade5.flag = 1;
        virus.useEvoPoints(4)
        virus.setPower(4)
        powerBoost = 3;
        evoUpgrade5.element.parentNode.removeChild(evoUpgrade5.element);
        var index = activeEvo.indexOf(evoUpgrade5);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade5)

var evoUpgrade6 = {
    id: "evoUpgrade6",
    title: "EVEN MORE SPEED",
    priceTag: "(4 EP)",
    description: "I've got the need for speed!",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 4 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade6.flag = 1;
        virus.useEvoPoints(4)
        virus.setSpeed(4)
        speedBoost = 3;
        evoUpgrade6.element.parentNode.removeChild(evoUpgrade6.element);
        var index = activeEvo.indexOf(evoUpgrade6);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade6)

var evoUpgrade7 = {
    id: "evoUpgrade7",
    title: "SURVIVE",
    priceTag: "(25 EP)",
    description: "Spread to survive",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 3 && powerBoost == 3},
    // trigger: function(){return speedBoost == 3 && powerBoost == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 25 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade7.flag = 1;
        virus.useEvoPoints(25)
        combat.initCombat()
        evoUpgrade7.element.parentNode.removeChild(evoUpgrade7.element);
        var index = activeEvo.indexOf(evoUpgrade7);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade7)


var evoUpgrade8 = {
    id: "evoUpgrade8",
    title: "LIGHTNING BOLT",
    priceTag: "(20 EP)",
    description: "Harness your speed to create lighting.",
    list: "upgradeList2",
    trigger: function(){return combat.combatFlag},
    uses: 1,
    cost: function(){return virus.evoPoints >= 20},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade8.flag = 1;
        virus.useEvoPoints(20)
        var attack = {
            name: "Lightning Bolt",
            dmg : [15, 20],
            cooldown : 2000 - (100 * speedBoost),
            uses: 15
        }
        combat.addAttack(attack)
        evoUpgrade8.element.parentNode.removeChild(evoUpgrade8.element);
        var index = activeEvo.indexOf(evoUpgrade8);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade8)

var evoUpgrade9 = {
    id: "evoUpgrade9",
    title: "TOXIC CLOUD",
    priceTag: "(20 EP)",
    description: "Harness your power to create toxins.",
    list: "upgradeList2",
    trigger: function(){return combat.combatFlag},
    uses: 1,
    cost: function(){return virus.evoPoints >= 20},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade9.flag = 1;
        virus.useEvoPoints(20)
        var attack = {
            name: "Toxic Cloud",
            dmg : [10 * powerBoost, 15 * powerBoost],
            cooldown : 3500,
            uses: 15
        }
        combat.addAttack(attack)
        evoUpgrade9.element.parentNode.removeChild(evoUpgrade9.element);
        var index = activeEvo.indexOf(evoUpgrade8);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade9)





function manageUpgrades(upgrades, activeUpgrades){
    for(var i = 0; i < upgrades.length; i++){
        if (upgrades[i].trigger() && (upgrades[i].uses > 0)){
            displayUpgrades(upgrades[i]);
            upgrades[i].uses = upgrades[i].uses - 1;
            activeUpgrades.push(upgrades[i]);
        }
    }
        
        
    for(var i = 0; i < activeUpgrades.length; i++){
        if (activeUpgrades[i].cost()){
            activeUpgrades[i].element.disabled = false;
        } else {
            activeUpgrades[i].element.disabled = true;
        }   
    }
}


function displayUpgrades(upgrade){
    
    upgrade.element = document.createElement("button");
    upgrade.element.setAttribute("id", upgrade.id);
    
    upgrade.element.onclick = function(){upgrade.effect()};
    
    upgrade.element.setAttribute("class", "btn-upgrade");
    //upgrade.element.setAttribute("data-sm-link-text", "GROW")

    document.getElementById(upgrade.list).appendChild(upgrade.element, upgrade.list.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
    upgrade.element.appendChild(span);
    
    var title = document.createTextNode(upgrade.title);
    span.appendChild(title);      
    
    var cost = document.createTextNode(upgrade.priceTag);
    upgrade.element.appendChild(cost);
    
    var div = document.createElement("div");
     upgrade.element.appendChild(div);
    
    var description = document.createTextNode(upgrade.description);
    upgrade.element.appendChild(description);
    
    
}