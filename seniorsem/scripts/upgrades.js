var growUpgrades = []
var evolveUpgrades = []
var activeGrow = []
var activeEvo = []

sizeBoost = 0
powerBoost = 0
speedBoost = 0
mutateBoost = 0
replicateCount = 0

// Model of upgrades comes from the game Universal Paperclips
var growUpgrade1 = {
    id: "growUpgrade1",
    title: "GROW MORE",
    priceTag: "(1 EP)",
    description: "Increases size gained per second.",
    list: "upgradeList1",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 1 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade1.flag = 1;
        virus.useEvoPoints(1)
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
        growUpgrade5.flag = 1;
        virus.useEvoPoints(100)
        virus.replication = true;
        virus.replicateCheck;
        replicateCount = 1;
        virus.replicateLimit = 1
        growUpgrade5.element.parentNode.removeChild(growUpgrade5.element);
        var index = activeGrow.indexOf(growUpgrade5);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade5);












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
        speedBoost = 12
        evoUpgrade4.element.parentNode.removeChild(evoUpgrade4.element);
        var index = activeEvo.indexOf(evoUpgrade4);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade4)



function manageUpgrades(upgrades, activeUpgrades,){
    for(var i = 0; i < upgrades.length; i++){
        if (upgrades[i].trigger() && (upgrades[i].uses > 0)){
            displayUpgrades(upgrades[i]);
            upgrades[i].uses = upgrades[i].uses - 1;
            upgrades.push(upgrades[i]);
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