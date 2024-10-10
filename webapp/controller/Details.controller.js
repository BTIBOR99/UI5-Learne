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
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZWT_NAME_ODATA_SRV/");
   
                 oModel.read("DetailsSet", {
                     success: function(oData) {
                          this.DataModel = new sap.ui.model.json.JSONModel(oData.results);
                          this.getView().setModel(this.DataModel, "DetailsModel");
                     }.bind(this),
                     error : function (oError){}
             },
                             
               )
            }
        });
    });
