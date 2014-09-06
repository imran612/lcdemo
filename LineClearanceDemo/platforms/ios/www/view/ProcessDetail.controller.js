
sap.ui.controller("com.jbl.lnclr.tab.view.ProcessDetail", {
                  
            onInit: function () {
                  var oGroupingModel = new sap.ui.model.json.JSONModel({ hasGrouping: false});
                  sap.ui.getCore().byId("ProcessDetail").setModel(lcmod);
                   sap.ui.getCore().byId("ProcessDetail").setModel(oGroupingModel, 'Grouping');
                  
                  },
                  
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("Home");
                  
                  },
                  handleSettings: function () {
                  
                  },
                  handleProcDetail: function () {
                      sap.ui.getCore().byId("Home").getController().nav.to("DocumentProc");
 
                  },
                  handleProcTableSetting: function () {
                    alert("table settings");
                  },
                  handleQsNav : function() {
                  sap.ui.getCore().byId("Home").getController().nav.to("ProcessQs");

                  
                  }
});

