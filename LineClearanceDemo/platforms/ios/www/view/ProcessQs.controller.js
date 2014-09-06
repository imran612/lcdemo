
sap.ui.controller("com.jbl.lnclr.tab.view.ProcessQs", {
                  
            onInit: function () {
                  },
                  
                  handleNavBack: function () {
                  var nav = sap.ui.getCore().byId("Home").getController().nav;
                  nav.back("DocumentList");
                  
                  },
                  handleSettings: function () {
                  
                  },
                  handleESignDialog: function () {
                 // alert("f");
                  var oModel1 = new sap.ui.model.json.JSONModel();
                  this._eSignD = sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.ESignDialog",
                                                     sap.ui.getCore().byId("DocumentProc").getController()
                                                    );
                  // this.getView().addDependent(this._valueHelpDialog);
                  //}
                  //this._valueHelpDialog.setModel(oModel);
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
                  }
});

