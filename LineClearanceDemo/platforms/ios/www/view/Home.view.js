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
              
              page.setCustomHeader(new sap.m.Bar("pageHdr1",{contentMiddle: new sap.m.Image({src:"img/nypro-ls-logo.png"}).addStyleClass("nyLogo"),contentRight:[new sap.m.Text({text:"Welcome Guest"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var mainPanel = new sap.m.Panel("mainPanel",{width:"95%"});
              mainPanel.addContent(new sap.m.Text({text:"Enter Data",width:"100%"}).addStyleClass("eDataLabel"));
             
              //display sequence
              mainPanel.addContent(new sap.m.Text({text:"1"}).addStyleClass("seqNo"));
              //2. display LC status bar
              var scanBar = new sap.m.Bar({contentLeft: new sap.m.Text({text:"Barcode Scanner"}).addStyleClass("scanLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-right-arrow"}).addStyleClass("scanArrow") }).addStyleClass("scanbar");
              
              var lcScanTile = new sap.m.CustomTile({content:scanBar,press:oController.barcodescan}).addStyleClass("lcmaintile");
              mainPanel.addContent(lcScanTile);

              //display sequence
              mainPanel.addContent(new sap.m.Text({text:"2"}).addStyleClass("seqNo seqNo2"));
              var lcStatusBar = new sap.m.Bar({contentLeft: new sap.m.Text("lctypefld",{text:"Select Line Clearance Type"}).addStyleClass("lcTypeLabel"),contentRight:new sap.m.Button({icon:"sap-icon://navigation-down-arrow"}).addStyleClass("selArrow") }).addStyleClass("lcTypeBar");
              
              var lcStatusTile = new sap.m.CustomTile({content:lcStatusBar,press:oController.handleLCType}).addStyleClass("lcmaintile");
              mainPanel.addContent(lcStatusTile);

              
              //add label to page
              page.addContent(mainPanel);
              
              // alert("2");
              return page;
              
              }
});