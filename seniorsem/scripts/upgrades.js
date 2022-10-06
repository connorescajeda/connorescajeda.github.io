var growthUpgrades = {
    
    name : "Increase size gain",
    cost : 1,


    // Functions


    purhcaseUpgrade: function(){
        if (virus.evoPoints > this.cost) {
            virus.useEvopoints(cost);
            this.applyUpgrade
        }
    },

    setUpgradeCost: function() {
        this.cost += 1
    },

    applyUpgrade: function() {
        virus.setGrowthRate(1)
    }







}