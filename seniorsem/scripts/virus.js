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
    mutateCount : 0,
    replication: false,
    replicateLimit: 0,



    // Functions

    onload : function() {
        virus.setVirusSize(850)
        virus.totalSize = 850
    },


    setVirusSize : function(value) {
        this.size = Math.round(value);
        
        //if (document.getElementById("cell1") != null) {
            //htmlInteraction.setInnerHtml("cell1", "Size: " + this.size)
        //}
        if (this.cloneSizes.length != 0 || this.cloneSizes.length != 0){
            count = 1
            this.cloneSizes.forEach(element => {
                if (document.getElementById(`cell${count}`) != null) {
                htmlInteraction.setInnerHtml(`cell${count}`, "Size: " + this.size)
                count++;
                }
            }); 
            var sum = this.cloneSizes.reduce(function(a, b){
                return a + b;
            }, 0);
            htmlInteraction.setInnerHtml("size", "You are a size of " + sum)
            console.log(this.cloneSizes)
            console.log(sum)
        }
        else{
            htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
            htmlInteraction.setInnerHtml(`cell1`, "Size: " + this.size)

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
            id = num + 2
            var cell = {
                id: `cell${id}`,
                description: virus.size / 2,
                element: null,
             }
             this.cloneSizes.push(virus.size / 2)
             this.createCell(cell)
        }
    },

    createCell: function(cell){
        cell.element = document.createElement("span")
        cell.element.setAttribute("id", cell.id)
        cell.element.setAttribute("class", "dot")
        if (cell.id != "cell1"){
            virus.setVirusSize(virus.size / 2)
        }
        var description = document.createTextNode("Size: " + cell.description);
        cell.element.appendChild(description);

        document.getElementById("replication").appendChild(cell.element)
    }
}