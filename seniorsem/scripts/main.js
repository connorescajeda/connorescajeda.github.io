var main = {

    onload : function() {
        window.setInterval(this.secInterval.bind(this), 1000);
        window.setInterval(this.tenthInterval.bind(this), 70);
        virus.onload();
        tabs.onload();
    },

    secInterval : function(){
        if (combat.inBattle) {
            combat.fight()
        } else{
            virus.setVirusSize(virus.size + virus.growthRate);
            virus.totalSize += virus.growthRate;
            virus.checkEvoLevel()
        }
        
        virus.mutationCheck();
        virus.replicateCheck();
    },

    tenthInterval: function(){
        manageUpgrades(growUpgrades, activeGrow)
        manageUpgrades(evolveUpgrades, activeEvo)
    }
    
}
window.onload = main.onload.bind(main);