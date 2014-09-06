var inputId;
var _valueHelpDialog;
sap.ui.controller("com.jbl.lnclr.tab.view.Home", {
                  
            onInit: function () {
                 },
                handleLCType: function (oController) {
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
                                       /* alert("We got a barcode\n" +
                                              "Result: " + result.text + "\n" +
                                              "Format: " + result.format + "\n");*/
                                       // var oModel1 = sap.ui.getCore().getModel("listModel");
                                        var productInput = sap.ui.getCore().byId("__input4");
                                        //alert(productInput);
                                        productInput.setValue(result.text);
                                        sap.ui.getCore().byId("__input5").setValue(result.text);
                                         sap.ui.getCore().byId("__input6").setValue(result.text);
                                         sap.ui.getCore().byId("__input7").setValue(result.text);
                                         sap.ui.getCore().byId("__input8").setValue(result.text);
                                        
                                        sap.m.MessageToast.show("Barcode scanned successfully.");
                                        
                                        },
                                        function (error) {
                                        alert("Scanning failed: " + error);
                                        }
                                        );
    

}