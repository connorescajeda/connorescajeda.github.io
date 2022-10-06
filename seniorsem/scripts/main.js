var main = {

    onload : function() {
        window.setInterval(this.secInterval.bind(this), 1000);
        virus.onload();
        tabs.onload();
    },

    secInterval : function(){
        virus.setVirusSize(virus.size + virus.growthRate);
        manageUpgrades(growUpgrades, activeGrow)
        manageUpgrades(evolveUpgrades, activeEvo)
    }
    
}
window.onload = main.onload.bind(main);