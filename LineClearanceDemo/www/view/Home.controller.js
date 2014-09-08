var inputId;
var _valueHelpDialog;
sap.ui.controller("com.jbl.lnclr.tab.view.Home", {
                  
            onInit: function () {
                 // alert("11");
                 },
                  onAfterRendering: function() {
                  //alert("after");
                  },
                handleLCType: function (oController) {
                  //alert("in handle");
                  this._valueHelpDialog = sap.ui.xmlfragment(
                                                             "com.jbl.lnclr.tab.view.fragment.Dialog",
                                                              sap.ui.getCore().byId("Home").getController()
                                                             );
                   this._valueHelpDialog.setModel(lcmod);
                  // open value help dialog
                  this._valueHelpDialog.open();
                  },
                  
            _handleValueHelpSearch : function (evt) {
                  var sValue = evt.getParameter("value");
                  var oFilter = new sap.ui.model.Filter(
                                                        "Name",
                                                        sap.ui.model.FilterOperator.Contains, sValue
                                                        );
                  evt.getSource().getBinding("items").filter([oFilter]);
                  },
                  
            _handleValueHelpClose : function (evt) {
                  var oSelectedItem = evt.getParameter("selectedItem");
                  var productInput = sap.ui.getCore().byId("lctypefld");
                  productInput.setText(oSelectedItem.getTitle());
                  evt.getSource().getBinding("items").filter([]);
                  },
                  
            barcodescan: function(evt) {
                  scan();
                  },
                  
                 detailList : function(evt) {
                    sap.ui.getCore().byId("Home").getController().nav.to("DocumentList");
                  }
});

function navigateToDetails(pageId, targetPage) {
    var page = sap.ui.getCore().byId(pageId);
    page.getController().nav.to(targetPage);
}
function scan() {
    
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        jQuery.sap.require("sap.m.MessageToast");
                                        var barmodel = new sap.ui.model.json.JSONModel();
                                        barmodel.barcode=result.text;
                                        sap.ui.getCore().setModel(barmodel,"barmod");
                                        barvalue=result.text;
                                        //alert(result.text);
                                        //alert(lcmod.getData().barcode);
                                        sap.ui.getCore().byId("Home").getController().nav.to("ProcessDetail");

                                        
                                        },
                                        function (error) {
                                        alert("Scanning failed: " + error);
                                        var barmodel = new sap.ui.model.json.JSONModel();
                                        barmodel.barcode="123456";
                                        sap.ui.getCore().setModel(barmodel,"barmod");
                                        sap.ui.getCore().byId("Home").getController().nav.to("ProcessDetail");
                                        }
                                        );
    

}
/*function handleLCTypeSel() {
    this._valueHelpDialog = sap.ui.xmlfragment(
                                               "com.jbl.lnclr.tab.view.fragment.Dialog",
                                               sap.ui.getCore().byId("Home").getController()
                                               );
    this._valueHelpDialog.setModel(lcmod);
    // open value help dialog
    this._valueHelpDialog.open();
}*/