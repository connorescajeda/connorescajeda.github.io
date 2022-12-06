var virus = {

    // Variables
    size : 0,
    tSize : 0,
    cloneSizes: [],
    totalSize: 0,
    growthRate : 1,
    threshold : 100,
    evoPoints : 0,
    evoLimit : 20,
    evoLevel: 0,
    evoAmount: 1,
    power : 0,
    speed : 0,
    mutation : false,
    mutateCount : 1,
    replication: false,
    replicateLimit: 0,
    mutateFloor: 0.75,
    values : [100, 200, 500],
  // 750, 1000, 1500, 2000, 2500

    // Functions

    onload : function() {
        virus.setVirusSize(1)
        virus.totalSize = 1
        //combat.initCombat()
    },

    
    setVirusSize : function(value) {
        this.size = Math.round(value);

        if (this.cloneSizes.length != 0){

            this.cloneSizes.forEach((element, index) => {
                if (index == 0){
                    this.cloneSizes[index] = this.size
                }
                if (document.getElementById(`cell${index + 1}`) != null) {
                    if (index > 0){
                        this.cloneSizes[index] = this.cloneSizes[index]  + virus.growthRate
                    }
                    htmlInteraction.setInnerHtml(`cell${index + 1}`, "Size: " + this.cloneSizes[index])
                    
                }
            });

            var sum = this.cloneSizes.reduce(function(a, b){
                return a + b;
            }, 0); 
            virus.totalSize += (this.cloneSizes.length - 1 * virus.growthRate)
            if (this.cloneSizes.length > 1){
                htmlInteraction.setInnerHtml("size", "You have a total size of " + sum)
            } else{
                htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
            }
            this.tSize = sum
        }
        
        else{
            htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
            this.tSize = this.size
        }
        
        activate.checkGrowthButtons();
    },

    removeSize : function(value) {
        if (this.cloneSizes.length != 0){
            var split = Math.round(value / this.cloneSizes.length)
            var extra = 0
            this.cloneSizes.forEach((element, index) => {
                if (document.getElementById(`cell${index + 1}`) != null) {
                    if (this.cloneSizes[index] - split > 0){
                        this.cloneSizes[index] -= split
                        htmlInteraction.setInnerHtml(`cell${index + 1}`, "Size: " + this.cloneSizes[index])
                    } else {
                        extra += Math.round(split - this.cloneSizes[index])
                        this.cloneSizes[index] = 1
                        htmlInteraction.setInnerHtml(`cell${index + 1}`, "Size: " + this.cloneSizes[index])
                    }
                    
                    
                    
                }
            });
            this.cloneSizes.forEach((element, index) => {
                if (this.cloneSizes[index] > 1 && extra != 0) {
                    if (this.cloneSizes[index] - extra > 0) {
                        this.cloneSizes[index] -= extra
                    } else{
                        extra -= (this.cloneSizes[index]) 
                        this.cloneSizes[index] = 1
                    }   
                }
                virus.tSize += this.cloneSizes[index]
            })


         virus.size = this.cloneSizes[0] 
        } else{
            this.size -= value
            this.tSize -= value
            htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
        }
    },

    virusCombat : function(){
        
        this.cloneSizes.forEach((element, index)=>  {
            htmlInteraction.setInnerHtml(`cell${index+1}`, "Size: " + this.cloneSizes[index])
        });
        var sum = this.cloneSizes.reduce(function(a, b){
            return a + b;
        }, 0); 
        htmlInteraction.setInnerHtml("size", "You have a total size of " + sum)
        
    },


    setEvoPoints : function(){
        if (this.tSize >= this.evoLimit){
            //this.evoPoints += 100000;
            this.evoPoints += this.evoAmount;
            virus.removeSize(this.evoLimit)
            //virus.setVirusSize(this.size - this.evoLimit)
            htmlInteraction.setInnerHtml("evo", "You have " + this.evoPoints + " evolution points.")
            //this.evoLimit *= this.evoFactor
            activate.checkTabPanel();
        } else{
            this.displayVirusMessages(`You need ${this.evoLimit - this.size} more size to do that!`)
        }
        
    },

    useEvoPoints : function(value) {
        if (this.evoPoints >= value){
            this.evoPoints -= value;
            htmlInteraction.setInnerHtml("evo", "You have " + this.evoPoints + " evolution points.")
        }
    },
    checkEvoLevel : function(){ 
        var sum = this.cloneSizes.reduce(function(a, b){
            return a + b;
        }, 0); 
        checkSize = 0
        if (virus.cloneSizes.length <= 0){
            checkSize = virus.size
        } else{
            checkSize = sum
        }
        if (checkSize > 1000 && this.values.length == 3){
            this.evoSet()
        } else if (checkSize > 5000 && this.values.length == 2) {
            this.evoSet()        
        } else if (checkSize > 10000 && this.values.length >= 1){
            this.evoSet()
        }
    },

    evoSet : function(number) {
        var valueUpgrades = [.8, .7, .6, .5]
        if (number != undefined) {
            this.evoLimit *= valueUpgrades[this.evoLevel - 1]
        } else{
            if (this.evoLevel != 0) {
                this.evoLimit = this.values[0] * valueUpgrades[this.evoLevel - 1]
            } else{
                this.evoLimit = this.values[0]
            } 
            this.values = this.values.slice(1) 
        }
        this.displayVirusMessages(`Evolution points now cost ${this.evoLimit} size!`) 
        },
        


    setGrowthRate : function(value){
        this.growthRate += value;
    },

    setPower : function(value){
        this.power += value;
        htmlInteraction.setInnerHtml("power", "You have " + this.power + " power.")
    },

    setSpeed : function(value){
        this.speed += value;
        htmlInteraction.setInnerHtml("speed", "You have " + this.speed + " speed")
    },
    
    mutationCheck: function(level){
        // have if statements for what level the ability is
        if (this.mutation && this.totalSize / 1000 > this.mutateCount){
            this.mutateCount += 1
            num = Math.random();
            if (num > this.mutateFloor){
                num = Math.random();
                if (.33 >= num){
                    virus.displayVirusMessages("You now gain size quicker due to a mutation!")
                    this.setGrowthRate(Math.round(this.growthRate / 2))
                }else if (.66 >= num){
                    virus.displayVirusMessages("You have gained more power due to a mutation!")
                    this.setPower(Math.round(this.power / 2))
                } else{
                    virus.displayVirusMessages("You have gained more speed due to a mutation!")
                    this.setSpeed(Math.round(this.speed / 2))
                }
            }
        }
    },

    replicateCheck: function(){
        if (this.replication){
            htmlInteraction.showButton("replication")
            var cell = {
                id : "cell1",
                description: virus.size,
                element: null,
            }
            if (document.getElementById("cell1") == null){
                this.cloneSizes.push(virus.size)
                this.createCell(cell)
            }
            
            //this.replicate()
        }
    },

    replicate: function() {
        num = this.cloneSizes.length 
        if (this.replicateLimit > num){
            id = num + 1
            var cell = {
                id: `cell${id}`,
                description: this.cloneSizes[0] / 2,
                element: null,
             }
             this.cloneSizes.push(Math.round(this.cloneSizes[0] / 2))
             this.createCell(cell)
        } else {
            virus.displayVirusMessages("You are at your replication max.")
        }
    },

    createCell: function(cell){
        
        cell.element = document.createElement("span")
        cell.element.setAttribute("id", cell.id)
        cell.element.setAttribute("class", "dot")


        if (this.cloneSizes.length > 1){
            virus.setVirusSize(Math.round(this.cloneSizes[0] / 2))
        }
        
        var description = document.createTextNode("Size: " + Math.round(cell.description));
        cell.element.appendChild(description);

        document.getElementById("replication").appendChild(cell.element)
       
    },
    displayVirusMessages: function(msg) {
        if (msg != htmlInteraction.getElement("message1").innerHTML){
            htmlInteraction.setInnerHtml("message5", htmlInteraction.getElement("message4").innerHTML)
            htmlInteraction.setInnerHtml("message4", htmlInteraction.getElement("message3").innerHTML)
            htmlInteraction.setInnerHtml("message3", htmlInteraction.getElement("message2").innerHTML)
            htmlInteraction.setInnerHtml("message2", htmlInteraction.getElement("message1").innerHTML)
            htmlInteraction.setInnerHtml("message1", msg)
        }
    }

   
}