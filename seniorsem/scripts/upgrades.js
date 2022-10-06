var growUpgrades = []
var evolveUpgrades = []
var activeGrow = []
var activeEvo = []



// Model of upgrades comes from the game Universal Paperclips
var growUpgrade1 = {
    id: "growUpgrade1",
    title: "GROW MORE",
    priceTag: "(1 Evolution Point)",
    description: "Increases amount of size gained per second.",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 1 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade1.flag = 1;
        //displayMessage("AutoClippper performance boosted by 25%");
        virus.useEvoPoints(1)
        virus.setGrowthRate(1)
        //boostLvl = 1;
        growUpgrade1.element.parentNode.removeChild(growUpgrade1.element);
        var index = activeGrow.indexOf(growUpgrade1);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade1);

function manageUpgrades(upgrades, activeUpgrades){
    
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
    
    upgrade.element.setAttribute("class", "btn effect04");
    upgrade.element.setAttribute("data-sm-link-text", "GROW")
    document.getElementById("upgradeList").appendChild(upgrade.element, upgradeList.firstChild);
    
    var span = document.createElement("span");
    span.style.fontWeight = "bold";
    upgrade.element.appendChild(span);
    
    var title = document.createTextNode(upgrade.title);
    span.appendChild(title);   
    
    var hr = document.createElement("BR");
    upgrade.element.appendChild(hr);   
    
    var cost = document.createTextNode(upgrade.priceTag);
    upgrade.element.appendChild(cost);
    
    var div = document.createElement("div");
    upgrade.element.appendChild(div);
    
    var description = document.createTextNode(upgrade.description);
    upgrade.element.appendChild(description);
    
    
}