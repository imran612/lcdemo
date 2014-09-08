sap.ui.jsview("com.jbl.lnclr.tab.view.ProcessQs", {

	getControllerName: function () {
		return "com.jbl.lnclr.tab.view.ProcessQs";
	},
	
	createContent: function (oController) {
		
              // alert("22");
              var page = new sap.m.Page({showHeader: true,
                                        showNavButton: true,
                                        alignItems:"center",
                                        navButtonPress:oController.handleNavBack
                                        });
              
              
              page.setCustomHeader(new sap.m.Bar("pageHdr3",{contentLeft: [new sap.m.Button({icon:"sap-icon://nav-back",press:oController.handleNavBack}),new sap.m.Image({src:"img/nypro-ls-logo.png"}).addStyleClass("nyLogo")],contentRight:[new sap.m.Text({text:"Welcome Guest"}).addStyleClass("welHdr"),new sap.m.Button({icon:"sap-icon://log"}) ]}));
              
              //display jbl logo
              page.addContent(new sap.m.Bar({contentLeft:new sap.m.Image({src:"img/jabil-logo.jpg",height:"20px"}).addStyleClass("jblLogo")}).addStyleClass("subHdrBar"));
              
              //1. initialize panel to hold main page content
              var poQslPanel = new sap.m.Panel("poQslPanel",{width:"95%"});
              poQslPanel.addContent(new sap.m.Text({text:"Process Questionnaires",width:"100%"}).addStyleClass("eDataLabel"));
              
              //display sequence
              poQslPanel.addContent(new sap.m.Text({text:"5"}).addStyleClass("seqNo seqNo5"));
              //Question#1
              var q1Selbx = new sap.m.Toolbar({content:[new sap.m.Text({text:"Confirm ALL these items from the previous order have been removed"})]  });
              
                           /* var q1Selbx = new sap.m.Toolbar({content:[new sap.m.Text({text:"Confirm ALL these items from the previous order have been removed"}),new sap.m.ToolbarSpacer(),new sap.m.Text("q1selbx",{text:"11"}).addStyleClass("notsel"),new sap.m.Text("q2selbx",{text:"11"}).addStyleClass("notsel"),new sap.m.Text("q3selbx",{text:"11"}).addStyleClass("notsel")]  });*/
              
              var q1 = new sap.m.Panel("q1panel",{headerToolbar: q1Selbx,expandable:true,expanded:true}).addStyleClass("procQsPanel");
              /*var q1 = new sap.m.Panel("q1panel",{headerText:"Confirm ALL these items from the previous order have been removed",headerToolbar: q1Selbx,expandable:true,expanded:true}).addStyleClass("procQsPanel");*/
              q1.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions",oController));
              poQslPanel.addContent(q1);
              
              //Question#2
              var q2 = new sap.m.Panel("q2panel",{headerText:"Confirm retain samples have been collected",expandable:true,expanded:true}).addStyleClass("procQsPanelList");
              q2.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions2",oController));
              poQslPanel.addContent(q2);
              
              //Question#3
              var q3 = new sap.m.Panel("q3panel",{headerText:"Confirm the following cleaning activities have been carried out",expandable:true,expanded:true}).addStyleClass("procQsPanelList");
              q3.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions3",oController));
              poQslPanel.addContent(q3);
              
              //Question#4
              var q4 = new sap.m.Panel("q4panel",{headerText:"Ensure compliance to the following",expandable:true,expanded:true}).addStyleClass("procQsPanelListFinal");
              q4.addContent(sap.ui.xmlfragment("com.jbl.lnclr.tab.view.fragment.Questions4",oController));
              poQslPanel.addContent(q4);
              page.addContent(poQslPanel);
              
              //esign section
              var eSignPanelTxt = new sap.m.Panel("eSignPanelTxt",{width:"95%"});
              eSignPanelTxt.addContent(new sap.m.Text({text:"e-Sign Operation and Quality",width:"100%"}).addStyleClass("eDataLabel"));
              
              eSignPanelTxt.addContent(new sap.m.Text({text:"6"}).addStyleClass("seqNo seqNo6"));
              
              page.addContent(eSignPanelTxt);
              
              var eSignPanel = new sap.m.Panel("eSignPanel",{width:"90%"});
              eSignPanel.addContent(new sap.m.Text({text:"E-Sign has to be executed by Operation first and then Quality"}).addStyleClass("eSignTxt1"));
              eSignPanel.addContent(new sap.m.Text({text:"OPERATION REP", width:"100%"}).addStyleClass("eSignTxt2"));
              eSignPanel.addContent(new sap.m.Text({text:"I have carried out line clearence activity correctly"}).addStyleClass("eSignTxt3"));
               eSignPanel.addContent(new sap.m.Text({text:"QUALITY REP", width:"100%"}).addStyleClass("eSignTxt2"));
              eSignPanel.addContent(new sap.m.Text({text:"I have carried out line clearance actvity correctly"}).addStyleClass("eSignTxt3"));
              eSignPanel.addContent(new sap.m.Input({placeholder:"E-Sign Operation and Quality",type:sap.m.InputType.Text,valueHelpRequest:oController.handleESignDialog,showValueHelp:true,showSuggestion:true,width:"90%"}).addStyleClass("eSignFld"));
              page.addContent(eSignPanel);
              
              //display cancel button
              var cancelPanel = new sap.m.Panel("cancelPanel",{width:"95%"});
              cancelPanel.addContent(new sap.m.Button({text:"Cancel",press:oController.handleCancel}).addStyleClass("canbtn"));
               page.addContent(cancelPanel);
              return page;
              
              }
});