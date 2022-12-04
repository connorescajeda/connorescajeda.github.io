var main = {

    onload : function() {
        window.setInterval(this.secInterval.bind(this), 1000);
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
        manageUpgrades(growUpgrades, activeGrow)
        manageUpgrades(evolveUpgrades, activeEvo)
        virus.mutationCheck();
        virus.replicateCheck();
    }
    
}
window.onload = main.onload.bind(main);