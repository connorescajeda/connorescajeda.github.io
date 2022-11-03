var virus = {

    // Variables
    size : 0,
    totalSize: 0,
    growthRate : 1,
    threshold : 100,
    evoPoints : 0,
    evoLimit : 15,
    power : 0,
    speed : 0,
    mutation : false,
    mutateCount : 0,
    replication: true,



    // Functions

    onload : function() {
        virus.setVirusSize(850)
        virus.totalSize = 850
    },


    setVirusSize : function(value) {
        this.size = Math.round(value);
        htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
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
            var cell1 = {
                id : "cell1",
                description: "hello",
                element: null,
            }
            if (document.getElementById("cell1") == null){
                this.createCell(cell1)
            }
            
            //this.replicate()
        }
    },

    replicate: function() {

    },

    createCell: function(cell){
        cell.element = document.createElement("span")
        cell.element.setAttribute("id", cell.id)
        cell.element.setAttribute("class", "dot")
        var description = document.createTextNode("hello");
        cell.element.appendChild(description);

        document.getElementById("replication").appendChild(cell.element)
    }
}