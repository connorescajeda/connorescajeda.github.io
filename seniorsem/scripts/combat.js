var enemy1 = {
    id : "enemy1",
    name: "Humble Farming Village",
    health: 200,
    attack0 : {"dmg" : 100, "cooldown": 3000, "desc": `The enemy threw a pitch fork and reduced your size by `},
    cooldown: true,
}

var enemy2 = {
    id : "enemy2",
    name: "Quaint Fishing Town",
    health: 400,
    attack0 : {"dmg" : 130, "cooldown": 2600, "desc": `The enemy hooked you with their poles and reduced your size by `},
    cooldown: true,
}
var enemy3 = {
    id : "enemy3",
    name: "Growing Suburban Neighborhood",
    health: 800,
    attack0 : {"dmg" : 200, "cooldown": 2000, "desc": `The children ran over you with their bicycles and reduced your size by `},
    cooldown: true,
}
var enemy4 = {
    id : "enemy4",
    name: "Bustling City",
    health: 1500,
    attack0 : {"dmg" : 300, "cooldown": 2400, "desc": `The noise of the area harms you and reduced your size by `},
    attack1 : {"dmg" : 150, "cooldown": 5000, "desc": `Antibiotics were given to your victims and reduced the size of each cell by `},
    cooldown: true,
}
var enemy5 = {
    id : "enemy5",
    name: "Thriving Metropolitan Area",
    health: 2500,
    attack0 : {"dmg" : 450, "cooldown": 2500, "desc": `The flashing lights harm your ability to replicate and you reduce your size by `},
    cooldown: true,
}
var enemy6 = {
    id : "enemy6",
    name: "Nuclear Power Plant",
    health: 4000,
    attack0 : {"dmg" : 600, "cooldown": 2000, "desc": `Radiation hurts and reduced your size by `},
    cooldown: true,
}
var enemy7 = {
    id : "enemy7",
    name: "The World",
    health: 6000,
    attack0 : {"dmg" : 700, "cooldown": 2000, "desc": `The world throws everything it has at you and reduced your size by `},
    cooldown: true,
}



enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7]
var combat = {

    combatFlag : false,
    attacks: [],
    inBattle: false,
    current_enemy: enemy1,
    enemy_health: enemy1.health,
    cooldowns: {0: true, 1: true, 2: true, 3: true},
    message1 : "",
    message2 : "",
    message3 : "",
    message4: "",
    message5: "",
    enemyId : 1,


    initCombat : function(){
        htmlInteraction.showButton("enemyDisplay")
        htmlInteraction.showButton("enemy1")
        htmlInteraction.setInnerHtml("enemyName", this.current_enemy.name)
        this.combatFlag = true
        this.displayMessages("You must fight to survive.")
    },

    battleFlag : function(){
        if (this.combatFlag) {
            if (this.inBattle == false) {
                this.inBattle = true
                var test = "You are now in battle."
                this.displayMessages(test, false, true)
            }
        }
        
    },

    fight: function(){  
        if (this.inBattle) {
            htmlInteraction.showButton("enemyHP")
            htmlInteraction.setInnerHtml("enemyHP", "Health: " + `${this.current_enemy.health}/${this.enemy_health}`)
            if (virus.size < 0){
                virus.size = 1
                this.inBattle = false
                this.displayMessages("The enemy has bested you. Grow and try again later.")     
                this.current_enemy.health = this.enemy_health
                

            } else if (this.current_enemy.health < 0) {
                this.inBattle = false
                this.displayMessages("You have vanquished the foe. Feast.")
                htmlInteraction.setElementVisibility(this.current_enemy.id, false)
                this.nextEnemy()


            } else if (virus.cloneSizes.length == 0 && this.current_enemy.cooldown){
                tmp = this.current_enemy.attack0
                attack = tmp["dmg"]
                cooldown = tmp["cooldown"]
                damage = this.getRandomInt(attack-10, attack)
                virus.setVirusSize(virus.size - damage)
                this.current_enemy.cooldown = false
                this.displayMessages(`${tmp["desc"] + damage}.`, true)
                window.setTimeout(function () {enemyCooldowns(combat.current_enemy)}, cooldown);

            } else if (this.current_enemy.cooldown) {
                tmp = this.current_enemy.attack0
                attack = tmp["dmg"]
                cooldown = tmp["cooldown"]
                damage = this.getRandomInt(attack-10, attack)
                index = virus.cloneSizes.length
                virus.cloneSizes[index - 1] -= damage
                this.displayMessages(`${tmp["desc"] + damage}.`, true)
                this.cloneSizeCheck(index - 1)
                this.current_enemy.cooldown = false
                virus.virusCombat()
                window.setTimeout(function () {enemyCooldowns(combat.current_enemy)}, cooldown);
            }
        }
        
    },

    cloneSizeCheck : function(index) {
        if (virus.cloneSizes[index] <= 0){
            if (index == 0){
                virus.setVirusSize(1)
                this.inBattle = false
                this.displayMessages("The enemy has bested you. Grow and try again later.")    
            } else{
                virus.cloneSizes.pop()
                cell = htmlInteraction.getElement(`cell${index+1}`)
                cell.remove()
                this.displayMessages(`You have lost one of your replicants.`)
            }
            
            
        }
    },

    cast: function(index){
        if (this.inBattle){
            attack = this.attacks[index]
            console.log(this.current_enemy)
            if (this.cooldowns[index] == true){
                console.log(this.current_enemy)
                dmg = this.getRandomInt(attack.dmg[0], attack.dmg[1])
                this.current_enemy.health -= dmg
                this.cooldowns[index] = false
                this.displayMessages(`You cast ${attack.name} and do ${dmg} damage.`)
                window.setTimeout(function () {resetCooldown(index)}, attack.cooldown);
            } else{
                this.displayMessages("That ability is on cooldown.")
            }
            
        } else{
            this.displayMessages("You must be in combat to use your abilities.")
        }
    },

   

    addAttack: function(attack){
        size = this.attacks.length
        if (size <= 4) {
            this.attacks.push(attack)
            htmlInteraction.showButton(`attack${size}Button`)
            htmlInteraction.setInnerHtml(`attack${size}`, attack.name)
            button = htmlInteraction.getElement(`attack${size}Button`)
            button.setAttribute("data-sm-link-text", `${attack.uses} / ${attack.uses} casts`)
            
        }
    },

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomInt : function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },

    displayMessages : function(msg, attack, bold) {
        if (msg != htmlInteraction.getElement("message1").innerHTML || attack){
            htmlInteraction.setInnerHtml("message5", htmlInteraction.getElement("message4").innerHTML)
            htmlInteraction.setInnerHtml("message4", htmlInteraction.getElement("message3").innerHTML)
            htmlInteraction.setInnerHtml("message3", htmlInteraction.getElement("message2").innerHTML)
            htmlInteraction.setInnerHtml("message2", htmlInteraction.getElement("message1").innerHTML)
            htmlInteraction.setInnerHtml("message1", msg)
        }
        if (bold){
            htmlInteraction.getElement("message1").style.fontWeight = "bold"
        }
        
    },
    nextEnemy : function(){
        enemy = htmlInteraction.getElement(`enemy${this.enemyId}`)
        enemy.remove()
        this.enemyId += 1
        this.current_enemy = enemies[this.enemyId - 1]
        this.enemy_health = this.current_enemy.health
        this.displayMessages(`You have arrived at a ${this.current_enemy.name.toLowerCase()}.`)

        htmlInteraction.setInnerHtml("enemyName", this.current_enemy.name)
        htmlInteraction.setInnerHtml("enemyHP", "Health: " + `${this.current_enemy.health}/${this.enemy_health}`)
        htmlInteraction.setElementDisplay(this.current_enemy.id, "block")
        
    }


}


function resetCooldown(index){
    console.log(combat.cooldowns)
    combat.cooldowns[index] = true
    console.log(combat.cooldowns)
}

function enemyCooldowns(enemy){
    enemy.cooldown = true
}
// attack
//     name
//     damage
//     boost
