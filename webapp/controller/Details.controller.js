sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("learning.controller.Details", {
            onInit: function () {
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oRouter.getRoute("Details").attachMatched(this.onRouteMatched, this); 
            //    const oRouter = this.getOwnerComponent().getRouter();
            //    oRouter.getRoute("details").attachPatternMatched(this.onObjectMatched, this);
            },

            onRouteMatched: function(oEvent){
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZWT_NAME_ODATA_SRV/");

                oModel.read("DetailsSet", {
                    success: function(oData) {
                         this.DetailsModel = new sap.ui.model.json.JSONModel(oData.results);
                         this.getView().setModel(this.DetailsModel, "DetailsModel");
                    }.bind(this),
                    error : function (oError){}
            })
            }

            // onObjectMatched(oEvent) {
              
                // this.byId("rating").reset();
                // this.getView().bindElement({
                //     path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                //     model: "invoice"
                // });
            // }

        });
    });
