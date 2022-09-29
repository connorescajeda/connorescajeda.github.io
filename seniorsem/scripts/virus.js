var virus = {

    // Variables
    size : 0,
    growthRate : 1,
    threshold : 100,
    evoPoints : 0,
    evoLimit : 15,


    // Functions

    onload : function() {
        virus.setVirusSize(14)
    },


    setVirusSize : function(value) {
        this.size = Math.round(value);
        htmlInteraction.setInnerHtml("size", "You are a size of " + this.size)
        activate.checkGrowthButtons();
    },

    setEvoPoints : function(){
        if (this.size >= this.evoLimit){
            this.evoPoints += 1;
            virus.setVirusSize(this.size - this.evoLimit)
            htmlInteraction.setInnerHtml("evo", "You have" + this.evoPoints + "evolution points.")
            this.evoLimit *= 1.43
            activate.checkTabPanel();
        }
        
    }



}