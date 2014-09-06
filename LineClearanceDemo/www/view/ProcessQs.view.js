sap.ui.jsview("com.jbl.lnclr.tab.view.ProcessQs", {

	getControllerName: function () {
		return "com.jbl.lnclr.tab.view.ProcessQs";
	},
	
	createContent: function (oController) {
		
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        });
              
              
              page.setCustomHeader(new sap.m.Bar("pageHdr3",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/jabil-logo.jpg",height:"30px"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text({text:"Welcome Morgan"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poQslPanel = new sap.m.Panel("poQslPanel",{width:"95%"});
              poQslPanel.addContent(new sap.m.Text({text:"Process Questionnaires"}).addStyleClass("eDataLabel"));
              
              
              var q1 = new sap.m.Panel({headerText:"Confirm ALL these items from the previous order have been removed and stored propery",expandable:true,expanded:false}).addStyleClass("procQsPanel");;
              
              q1.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions",oController));
              
              poQslPanel.addContent(q1);
              
             /* lcDocProcPanel.addContent(new sap.m.Text("remark",{text:"Remark"}));
              lcDocProcPanel.addContent(new sap.m.TextArea("remTxtArea"));
              lcDocProcPanel.addContent(new sap.m.Text("esignlabel",{text:"e-Sign Operation and Quality"}));
              
               var eSignPanel = new sap.m.Panel("eSignPanel");
              eSignPanel.addContent(new sap.m.Text("eSignTxt1",{text:"E-Sign has to be executed by Operation first and then Quality"}));
              eSignPanel.addContent(new sap.m.Text("eSignTxt2",{text:"OPERATION REP: I have carried out line clearence activity correctly"}));
              eSignPanel.addContent(new sap.m.Text("eSignTxt3",{text:"QUALITY REP: I have carried out line clearance actvity correctly"}));
              
              var hrLyt=new sap.ui.layout.HorizontalLayout("hLyt");
              hrLyt.addContent(new sap.m.Label({text:"e-Sign Operation & Quality:"}));
              hrLyt.addContent(new sap.m.Input({type:sap.m.InputType.Text,valueHelpRequest:oController.handleESignDialog,showValueHelp:true,showSuggestion:true,}));
              
             eSignPanel.addContent(hrLyt);
              
              
              
              lcDocProcPanel.addContent(eSignPanel);*/
              
              page.addContent(poQslPanel);
              
              
              return page;
              
              }
});