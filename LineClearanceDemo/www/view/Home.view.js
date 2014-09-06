sap.ui.jsview("com.jbl.lnclr.tab.view.Home", {

	getControllerName: function () {
		return "com.jbl.lnclr.tab.view.Home";
	},
	
	createContent: function (oController) {
		
              //alert("1");
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: false,
                                        alignItems:"center",
                                        });
              
              page.setCustomHeader(new sap.m.Bar("pageHdr1",{contentLeft: new sap.m.Image({src:"img/jabil-logo.jpg",height:"30px"}).addStyleClass("nyLogo"),contentRight:[new sap.m.Text({text:"Welcome Morgan"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var mainPanel = new sap.m.Panel("mainPanel",{width:"95%"});
              mainPanel.addContent(new sap.m.Text({text:"Enter Data"}).addStyleClass("eDataLabel"));
             
              //2. display LC status bar
              var lcStatusBar = new sap.m.Bar({contentLeft: new sap.m.Text("lctypefld",{text:"Select Line Clearance Type"}).addStyleClass("lcTypeLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-down-arrow",press:oController.handleLCType}).addStyleClass("selArrow") }).addStyleClass("lcTypeBar");
                  mainPanel.addContent(lcStatusBar);
              
              //3. display barcode scanner section
              var scanBar = new sap.m.Bar({contentLeft: new sap.m.Text({text:"Barcode Scanner"}).addStyleClass("scanLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-right-arrow",press:oController.barcodescan}).addStyleClass("scanArrow") }).addStyleClass("scanbar");
                  mainPanel.addContent(scanBar);
              
              //add label to page
              page.addContent(mainPanel);
              
              // alert("2");
              return page;
              
              }
});