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

              
              page.setCustomHeader(new sap.m.Bar("pageHdr2",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/nypro-ls-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text({text:"Welcome Morgan"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poDetailPanel = new sap.m.Panel("poDetailPanel",{width:"95%"});
              poDetailPanel.addContent(new sap.m.Text({text:"Process Details",width:"100%"}).addStyleClass("eDataLabel"));
              //display sequence
              poDetailPanel.addContent(new sap.m.Text({text:"3"}).addStyleClass("seqNo"));
              poDetailPanel.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.DocumentTable",oController));
              
              var toolPD = new sap.m.Toolbar("procDetTB",{content:[new sap.m.Label({text:"Process Order:"}), new sap.m.Text({text:"0810001987"}), new sap.m.ToolbarSpacer(), new sap.m.Label({text:"Plant:"}),new sap.m.Text({text:"IL01"}),new sap.m.ToolbarSpacer(), new sap.m.Label({text:"LC Status:"}),new sap.m.Text({text:"New"})   ]  });
                  poDetailPanel.addContent(toolPD);
              
              //display sequence
              poDetailPanel.addContent(new sap.m.Text({text:"4"}).addStyleClass("seqNo seqNo4"));
              //display process questionair section
              var quesBar = new sap.m.Bar({contentLeft: new sap.m.Text({text:"Process Questionnaires"}).addStyleClass("lcTypeLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-right-arrow",press:oController.handleQsNav}).addStyleClass("selArrow")}).addStyleClass("quesBar");
                  poDetailPanel.addContent(quesBar);
              
              //display cancel button
              poDetailPanel.addContent(new sap.m.Button({text:"Cancel",press:oController.handleNavBack}).addStyleClass("canbtn"));
             
              
                page.addContent(poDetailPanel);
              return page;
              
              }
});