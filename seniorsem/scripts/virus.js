var virus = {

    // Variables
    size : 0,
    cloneSizes: [],
    totalSize: 0,
    growthRate : 1,
    threshold : 100,
    evoPoints : 0,
    evoLimit : 15,
    power : 0,
    speed : 0,
    mutation : false,
    mutateCount : 1,
    replication: false,
    replicateLimit: 0,




    // Functions

    onload : function() {
        virus.setVirusSize(850)
        virus.totalSize = 850
        //combat.initCombat()
    },

    
    setVirusSize : function(value) {
        this.size = Math.round(value);

        if (this.cloneSizes.length != 0){

            this.cloneSizes.forEach((element, index) => {
                if (index == 0){
                    this.cloneSizes[index] = Math.round(value)
                }
                if (document.getElementById(`cell${index + 1}`) != null) {
                    this.cloneSizes[index] = this.cloneSizes[index] + virus.growthRate
                    htmlInteraction.setInnerHtml(`cell${index + 1}`, "Size: " + this.cloneSizes[index])
                    
                }
            });

            var sum = this.cloneSizes.reduce(function(a, b){
                return a + b;
            }, 0); 
            this.size = sum
            virus.totalSize += (this.cloneSizes.length - 1 * virus.growthRate)
            if (this.cloneSizes.length > 1){
                htmlInteraction.setInnerHtml("size", "You have a total size of " + sum)
            } else{
                htmlInteraction.setInnerHtml("size", "You are a size of " + sum)
            }
            
        }
        
        else{
            htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
            
        }
        
        activate.checkGrowthButtons();
    },

    setEvoPoints : function(){
        if (this.size >= this.evoLimit){
            this.evoPoints += 300;
            virus.setVirusSize(this.size - this.evoLimit)
            htmlInteraction.setInnerHtml("evo", "You have " + this.evoPoints + " evolution points.")
            this.evoLimit *= 1.43
            activate.checkTabPanel();
        }
        
    },

    useEvoPoints : function(value) {
        if (this.evoPoints >= value){
            this.evoPoints -= value;
            htmlInteraction.setInnerHtml("evo", "You have " + this.evoPoints + " evolution points.")
        }
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
            if (num > .75){
                num = Math.random();
                if (.33 >= num){
                    console.log("GROWTH")
                    this.setGrowthRate(Math.round(this.growthRate / 2))
                }else if (.66 >= num){
                    console.log("POWER")
                    this.setPower(Math.round(this.power / 2))
                } else{
                    console.log("SPEED")
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
             this.cloneSizes.push(Math.round(this.cloneSizes[0] / 2 + virus.growthRate))
             this.createCell(cell)
        }
    },

    createCell: function(cell){
        
        cell.element = document.createElement("span")
        cell.element.setAttribute("id", cell.id)
        cell.element.setAttribute("class", "dot")

        if (cell.id != "cell1"){
            virus.setVirusSize(Math.round(this.cloneSizes[0] / 2))
        }
        
        var description = document.createTextNode("Size: " + Math.round(cell.description));
        cell.element.appendChild(description);

        document.getElementById("replication").appendChild(cell.element)
       
    },

   
}