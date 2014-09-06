sap.ui.jsview("com.jbl.lnclr.tab.view.ProcessDetail", {

	getControllerName: function () {
		return "com.jbl.lnclr.tab.view.ProcessDetail";
	},
	
	createContent: function (oController) {
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        });

              
              page.setCustomHeader(new sap.m.Bar("pageHdr2",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/jabil-logo.jpg",height:"30px"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text({text:"Welcome Morgan"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poDetailPanel = new sap.m.Panel("poDetailPanel",{width:"95%"});
              poDetailPanel.addContent(new sap.m.Text({text:"Process Details"}).addStyleClass("eDataLabel"));
              
              page.addContent(poDetailPanel);
              
              //page.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.DocumentTable",oController));
              
              //page.addContent(docTablePanel);
              return page;
              
              }
});