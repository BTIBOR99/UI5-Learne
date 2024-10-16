sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("learning.controller.View", {
            onInit: function () {
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZWT_NAME_ODATA_SRV/");

                 oModel.read("DataSet", {
                     success: function(oData) {
                          this.DataModel = new sap.ui.model.json.JSONModel(oData.results);
                          this.getView().setModel(this.DataModel, "DataModel");
                     }.bind(this),
                     error : function (oError){}
                })
            },
            onPress: function(oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Details");
                // const oItem = oEvent.getSource();
                // const oRouter = this.getOwnerComponent().getRouter();
                // oRouter.navTo("details", {
                //     invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
                // });
               }          
        });
    });
