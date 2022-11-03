var main = {

    onload : function() {
        window.setInterval(this.secInterval.bind(this), 1000);
        virus.onload();
        tabs.onload();
    },

    secInterval : function(){
        virus.setVirusSize(virus.size + virus.growthRate);
        virus.totalSize += virus.growthRate;
        manageUpgrades(growUpgrades, activeGrow)
        manageUpgrades(evolveUpgrades, activeEvo)
        virus.mutationCheck();
        virus.replicateCheck();
    }
    
}
window.onload = main.onload.bind(main);