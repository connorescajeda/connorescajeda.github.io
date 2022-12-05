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
toxicCount = 0
fireCount = 0
acidCount = 0
iceCount = 0

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
    priceTag: "(60 EP)",
    description: "Unlock the ability to replicate.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 3},
    uses: 1,
    cost: function(){return virus.evoPoints >= 60 },
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade12.flag = 1;
        virus.useEvoPoints(60)
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
        console.log(virus.evoPoints)
        virus.evoPoints += 50
        virus.setEvoPoints()
        evoAmountCount = 2
        virus.evoAmount += 1
        growUpgrade16.element.parentNode.removeChild(growUpgrade16.element);
        var index = activeGrow.indexOf(growUpgrade16);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade16);

var growUpgrade17 = {
    id: "growUpgrade17",
    title: "MUST SPREAD",
    priceTag: "(40 EP)",
    description: "Gain the ability to gain traits.",
    list: "upgradeList1",
    trigger: function(){return sizeBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 40},
    flag: 0,
    element: null,
    effect: function(){
        growUpgrade17.flag = 1;
        virus.useEvoPoints(40)
        htmlInteraction.setElementVisibility("middleColumnevo", true)
        growUpgrade17.element.parentNode.removeChild(growUpgrade17.element);
        var index = activeGrow.indexOf(growUpgrade17);
        activeGrow.splice(index, 1);
    }
}
    
growUpgrades.push(growUpgrade17);



var evoUpgrade1 = {
    id: "evoUpgrade1",
    title: "POWER",
    priceTag: "(4 EP)",
    description: "Begin gaining power",
    list: "upgradeList2",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 4},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade1.flag = 1;
        virus.useEvoPoints(4)
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
    priceTag: "(4 EP)",
    description: "Begin gaining speed",
    list: "upgradeList2",
    trigger: function(){return virus.evoPoints > 0},
    uses: 1,
    cost: function(){return virus.evoPoints >= 4 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade2.flag = 1;
        virus.useEvoPoints(4)
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
    priceTag: "(5 EP)",
    description: "Gain more power",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 5 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade3.flag = 1;
        virus.useEvoPoints(5)
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
    priceTag: "(5 EP)",
    description: "Gain more speed",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 5},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade4.flag = 1;
        virus.useEvoPoints(5)
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
    priceTag: "(6 EP)",
    description: "Read the title",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 6 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade5.flag = 1;
        virus.useEvoPoints(6)
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
    priceTag: "(6 EP)",
    description: "I've got the need for speed!",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 6 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade6.flag = 1;
        virus.useEvoPoints(6)
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
            dmg : [10, 15],
            cooldown : 2000 - (100 * speedBoost),
            uses: 15,
            used : 15
        }
        lightningCount += 1
        combat.addAttack(attack, false)
        evoUpgrade8.element.parentNode.removeChild(evoUpgrade8.element);
        var index = activeEvo.indexOf(evoUpgrade8);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade8)

var evoUpgrade9 = {
    id: "evoUpgrade9",
    title: "BETTER LIGHTNING BOLT",
    priceTag: "(30 EP)",
    description: "Harness your speed to create better lighting.",
    list: "upgradeList2",
    trigger: function(){return lightningCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 30},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade9.flag = 1;
        virus.useEvoPoints(30)
        var attack = {
            name: "Lightning Bolt",
            dmg : [30, 35],
            cooldown : 2000 - (200 * speedBoost),
            uses: 15,
            used: 15
        }
        lightningCount += 1
        combat.addAttack(attack, true)
        evoUpgrade9.element.parentNode.removeChild(evoUpgrade9.element);
        var index = activeEvo.indexOf(evoUpgrade9);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade9)

var evoUpgrade10 = {
    id: "evoUpgrade10",
    title: "BEST LIGHTNING BOLT",
    priceTag: "(45 EP)",
    description: "Harness your speed to create lighting.",
    list: "upgradeList2",
    trigger: function(){return lightningCount == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 35},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade10.flag = 1;
        virus.useEvoPoints(20)
        var attack = {
            name: "Lightning Bolt",
            dmg : [50, 80],
            cooldown : 2000 - (250 * speedBoost),
            uses: 15,
            used : 15
        }
        lightningCount = 3
        combat.addAttack(attack,)
        evoUpgrade10.element.parentNode.removeChild(evoUpgrade10.element);
        var index = activeEvo.indexOf(evoUpgrade10);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade10)

var evoUpgrade11 = {
    id: "evoUpgrade11",
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
        evoUpgrade11.flag = 1;
        virus.useEvoPoints(20)
        var attack = {
            name: "Toxic Cloud",
            dmg : [10 * powerBoost, 15 * powerBoost],
            cooldown : 4000,
            uses: 15,
            used : 15
        }
        toxicCount += 1
        combat.addAttack(attack)
        evoUpgrade11.element.parentNode.removeChild(evoUpgrade11.element);
        var index = activeEvo.indexOf(evoUpgrade8);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade11)

var evoUpgrade12 = {
    id: "evoUpgrade12",
    title: "ENHANCED TOXINS",
    priceTag: "(35 EP)",
    description: "Your power makes the toxins even stronger",
    list: "upgradeList2",
    trigger: function(){return toxicCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 35},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade12.flag = 1;
        virus.useEvoPoints(35)
        var attack = {
            name: "Toxic Cloud",
            dmg : [40 * powerBoost, 55 * powerBoost],
            cooldown : 3500,
            uses: 15,
            used : 15
        }
        toxicCount += 1
        combat.addAttack(attack, true)
        evoUpgrade12.element.parentNode.removeChild(evoUpgrade12.element);
        var index = activeEvo.indexOf(evoUpgrade12);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade12)

var evoUpgrade13 = {
    id: "evoUpgrade13",
    title: "PERFECTED TOXINS",
    priceTag: "(60 EP)",
    description: "Your toxic abilities have been perfected.",
    list: "upgradeList2",
    trigger: function(){return toxicCount == 2},
    uses: 1,
    cost: function(){return virus.evoPoints >= 60},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade13.flag = 1;
        virus.useEvoPoints(60)
        var attack = {
            name: "Toxic Cloud",
            dmg : [10 * powerBoost, 15 * powerBoost],
            cooldown : 4000,
            uses: 15,
            used : 15
        }
        toxicCount = 3
        combat.addAttack(attack)
        evoUpgrade13.element.parentNode.removeChild(evoUpgrade13.element);
        var index = activeEvo.indexOf(evoUpgrade13);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade13)

var evoUpgrade14 = {
    id: "evoUpgrade14",
    title: "FLAME BURST",
    priceTag: "(35 EP)",
    description: "Use your speed to turn your self into fire.",
    list: "upgradeList2",
    trigger: function(){return lightningCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 35},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade14.flag = 1;
        virus.useEvoPoints(35)
        var attack = {
            name: "Flame Burst",
            dmg : [20 , 30],
            cooldown : 1000 - (50 * speedBoost),
            uses: 25,
            used : 25
        }
        combat.addAttack(attack)
        fireCount = 1
        evoUpgrade14.element.parentNode.removeChild(evoUpgrade14.element);
        var index = activeEvo.indexOf(evoUpgrade14);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade14)


var evoUpgrade15 = {
    id: "evoUpgrade15",
    title: "HOTTER FIRE",
    priceTag: "(50 EP)",
    description: "You move so fast your fire turns blue. ",
    list: "upgradeList2",
    trigger: function(){return fireCount == 1 & speedBoost == 4},
    uses: 1,
    cost: function(){return virus.evoPoints >= 50},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade15.flag = 1;
        virus.useEvoPoints(50)
        var attack = {
            name: "Flame Burst",
            dmg : [40 , 50],
            cooldown : 1000 - (100 * speedBoost),
            uses: 25,
            used : 25
        }
        fireCount = 2
        combat.addAttack(attack, true)
        evoUpgrade15.element.parentNode.removeChild(evoUpgrade15.element);
        var index = activeEvo.indexOf(evoUpgrade15);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade15)


var evoUpgrade16 = {
    id: "evoUpgrade16",
    title: "WILDFIRE",
    priceTag: "(75 EP)",
    description: "Let the inferno rage.",
    list: "upgradeList2",
    trigger: function(){return fireCount == 2 & speedBoost == 5},
    uses: 1,
    cost: function(){return virus.evoPoints >= 75},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade16.flag = 1;
        virus.useEvoPoints(75)
        var attack = {
            name: "Flame Burst",
            dmg : [65 , 80],
            cooldown : 1000 - (125 * speedBoost),
            uses: 25,
            used : 25
        }
        fireCount = 3
        combat.addAttack(attack, true)
        evoUpgrade16.element.parentNode.removeChild(evoUpgrade16.element);
        var index = activeEvo.indexOf(evoUpgrade16);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade16)

var evoUpgrade17 = {
    id: "evoUpgrade17",
    title: "ACID POOL",
    priceTag: "(45 EP)",
    description: "Your power lets you create extremely dangerous chemicals.",
    list: "upgradeList2",
    trigger: function(){return toxicCount == 1},
    uses: 1,
    cost: function(){return virus.evoPoints >= 45},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade17.flag = 1;
        virus.useEvoPoints(45)
        var attack = {
            name: "Acid Pool",
            dmg : [35 * powerBoost , 50 * powerBoost],
            cooldown : 4500,
            uses: 12,
            used : 12
        }
        acidCount = 1
        combat.addAttack(attack)
        evoUpgrade17.element.parentNode.removeChild(evoUpgrade17.element);
        var index = activeEvo.indexOf(evoUpgrade17);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade17)

var evoUpgrade18 = {
    id: "evoUpgrade18",
    title: "CORROSIVE UPGRADES",
    priceTag: "(65 EP)",
    description: "The chemicals have become quite unruly",
    list: "upgradeList2",
    trigger: function(){return toxicCount == 1 && powerBoost == 4},
    uses: 1,
    cost: function(){return virus.evoPoints >= 65},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade18.flag = 1;
        virus.useEvoPoints(65)
        var attack = {
            name: "Acid Pool",
            dmg : [65 * powerBoost , 80 * powerBoost],
            cooldown : 4000,
            uses: 12,
            used : 12
        }
        acidCount = 2
        combat.addAttack(attack, true)
        evoUpgrade18.element.parentNode.removeChild(evoUpgrade18.element);
        var index = activeEvo.indexOf(evoUpgrade18);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade18)

var evoUpgrade19 = {
    id: "evoUpgrade19",
    title: "CAUSTIC FINALE",
    priceTag: "(80 EP)",
    description: "The acid can't be contained by anything.",
    list: "upgradeList2",
    trigger: function(){return toxicCount == 2 && powerBoost == 5},
    uses: 1,
    cost: function(){return virus.evoPoints >= 8},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade19.flag = 1;
        virus.useEvoPoints(80)
        var attack = {
            name: "Acid Pool",
            dmg : [85 * powerBoost , 100 * powerBoost],
            cooldown : 3750,
            uses: 12,
            used : 12
        }
        acidCount = 3
        combat.addAttack(attack, true)
        evoUpgrade19.element.parentNode.removeChild(evoUpgrade19.element);
        var index = activeEvo.indexOf(evoUpgrade19);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade19)

var evoUpgrade20 = {
    id: "evoUpgrade20",
    title: "THIRST FOR STRENGTH",
    priceTag: "(30 EP)",
    description: "Oh the power...",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 3 && combat.combatFlag},
    uses: 1,
    cost: function(){return virus.evoPoints >= 15 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade20.flag = 1;
        virus.useEvoPoints(15)
        virus.setPower(4)
        powerBoost = 4;
        evoUpgrade20.element.parentNode.removeChild(evoUpgrade20.element);
        var index = activeEvo.indexOf(evoUpgrade20);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade20)

var evoUpgrade21 = {
    id: "evoUpgrade21",
    title: "THEY WILL NEVER UNDERSTAND",
    priceTag: "(50 EP)",
    description: "You are unstoppable",
    list: "upgradeList2",
    trigger: function(){return powerBoost == 4},
    uses: 1,
    cost: function(){return virus.evoPoints >= 50},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade21.flag = 1;
        virus.useEvoPoints(50)
        virus.setPower(2)
        powerBoost = 1;
        evoUpgrade21.element.parentNode.removeChild(evoUpgrade21.element);
        var index = activeEvo.indexOf(evoUpgrade21);
        activeEvo.splice(index, 1);
    }
}
evolveUpgrades.push(evoUpgrade21)

var evoUpgrade22 = {
    id: "evoUpgrade22",
    title: "THEY'LL NEVER CATCH ME",
    priceTag: "(30 EP)",
    description: "Faster than sight",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 3 && combat.combatFlag},
    uses: 1,
    cost: function(){return virus.evoPoints >= 30},
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade22.flag = 1;
        virus.useEvoPoints(30)
        virus.setSpeed(4)
        speedBoost = 4;
        evoUpgrade22.element.parentNode.removeChild(evoUpgrade22.element);
        var index = activeEvo.indexOf(evoUpgrade22);
        activeEvo.splice(index, 1);
    }
}
    
evolveUpgrades.push(evoUpgrade22);

var evoUpgrade23 = {
    id: "evoUpgrade23",
    title: "WILL THEY EVER FIND ME",
    priceTag: "(50 EP)",
    description: "Your speed is truly unmatched.",
    list: "upgradeList2",
    trigger: function(){return speedBoost == 4},
    uses: 1,
    cost: function(){return virus.evoPoints >= 50 },
    flag: 0,
    element: null,
    effect: function(){
        evoUpgrade23.flag = 1;
        virus.useEvoPoints(50)
        virus.setSpeed(2)
        speedBoost = 5;
        evoUpgrade23.element.parentNode.removeChild(evoUpgrade23.element);
        var index = activeEvo.indexOf(evoUpgrade23);
        activeEvo.splice(index, 1);
    }
}
    
evolveUpgrades.push(evoUpgrade23);










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