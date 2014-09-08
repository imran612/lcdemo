
sap.ui.controller("com.jbl.lnclr.tab.view.ProcessQs", {
                  
            onInit: function () {
                  //alert("in init");
                  sap.ui.getCore().byId("ProcessQs").setModel(lcmod);
                  },
                  
                  handleCancel: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("Home");
                  
                  },
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("ProcessDetail").getController().nav;
                  nav.back("ProcessDetail");
                  
                  },
                  handleESignDialog: function () {
                  var oModel1 = new sap.ui.model.json.JSONModel();
                  this._eSignD = sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.ESignDialog",
                                                     sap.ui.getCore().byId("ProcessQs").getController()
                                                    );
                  // open value help dialog
                  oModel1.eSign= this._eSignD;
                  sap.ui.getCore().setModel(oModel1,"eSignModel");
                  this._eSignD.open();

                  
                  },
                  onDialogCloseButton: function (oEvent) {
                 // alert("in close");
                  console.log(oEvent);
                 // var sType = oEvent.getSource().data("dialogType");
                  var oModel1 = sap.ui.getCore().getModel("eSignModel");
                  
                   oModel1.eSign.close();
                  },
                  handleQCheck: function(oEvt)
                  {
                 // alert("1");
                  // alert();
                 // console.log(lcmod.getData());
                  var toggle=true;
                  $.each(lcmod.getData().ques1, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  sap.ui.getCore().setModel(lcmod);
                  if(toggle)
                  {
                  sap.ui.getCore().byId("q1panel").setExpanded(false);
                  
                  }
                  },
                  handleQ2Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques2, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  sap.ui.getCore().setModel(lcmod);
                  if(toggle)
                  {
                  sap.ui.getCore().byId("q2panel").setExpanded(false);
                  
                  }
                  },
                  handleQ3Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques3, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  sap.ui.getCore().setModel(lcmod);
                  if(toggle)
                  {
                  sap.ui.getCore().byId("q3panel").setExpanded(false);
                  
                  }
                  },
                  handleQ4Check: function(oe)
                  {
                  var toggle=true;
                  $.each(lcmod.getData().ques4, function( key, value ) {
                         if(!value.sel)
                         {
                         toggle=false;
                         }
                         
                         
                         });
                  lcmod.setData(lcmod.getData());
                  sap.ui.getCore().setModel(lcmod);
                  if(toggle)
                  {
                  sap.ui.getCore().byId("q4panel").setExpanded(false);
                  
                  }
                  }
});

