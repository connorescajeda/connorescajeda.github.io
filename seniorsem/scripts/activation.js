var activate = {


    enableButton : function(name){
        // If the home buttons are enabled or our button isn't a home button
        if(this.homeButtonsDisabled == false || htmlInteraction.getElement(name).className != "home_button"){
            htmlInteraction.enableButton(name);
        }
    },

    checkGrowthButtons: function(){
        // Show evolve button
        if (virus.size >= 20){
            htmlInteraction.showButton("evoPoints");
            this.enableButton("evoPoints")
        }
        if (virus.replication){
            htmlInteraction.showButton("replicate")
            this.enableButton("replicate")
        }
    },


    checkTabPanel : function(){
        // If we have a evo points
        if(virus.evoPoints >= 1){
            // We enable the tab bar
            htmlInteraction.setElementDisplay("tabBar", "");
            // And we enable some tabs
	        tabs.enable(0);
            tabs.enable(1);
            // And we show the switch tabs button
            htmlInteraction.showButtonClass("toggle");
        }
    },
}