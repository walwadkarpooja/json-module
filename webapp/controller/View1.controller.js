sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("modules.controller.View1", {
        onInit() {
            let teamSize = {
                allTeams: [
                    {value:'dev', type:'Developer'},
                    {value:'test', type:'Tester'},
                    {value:'cons', type:'Consultant'},
                    {value:'lead', type:'Team lead'}
                ]
            }

            let teamModel = new sap.ui.model.json.JSONModel(teamSize);
            this.getView().setModel(teamModel,"teamModel");
        },
        onSubmit:function(){
            let employee = {
                "name":'puja',
                "id": '001',
                "age":30,
                "gender":"female",
                "designation":"developer"

            };

            var jModel = new sap.ui.model.json.JSONModel();
            jModel.setData(employee);
            this.getView().setModel(jModel,'emModel')
            // let eName = this.getView().getModel('emModel').getProperty('/name');
            // this.getView().byId('name').setValue(eName)
        },
        onInfo: function(){
            let student = {
                "name": "Raju",
                "roll_no": 1,
                "gender": "Male",
                "class": "8th",
                "subject": "Math"
            }

            

            let cName = this.getView().byId('sName').getValue()
            let sId = this.getView().byId('sId').getValue()
 
            if(cName == ""){
                this.getView().byId('sName').setValueState("Error");
                this.getView().byId('sName').setValueStateText("Error");
            }else{
                this.getView().byId('sName').setValueState(null);
            }
            if(sId == ""){
                this.getView().byId('sId').setValueState("Error");
                // this.getView().byId('sName').setValueStateText("Error");
            }else{
                this.getView().byId('sId').setValueState(null);
            }

            // let sModel = new sap.ui.model.json.JSONModel();

            // sModel.setData(student);

            // this.getView().setModel(sModel,'sModel');
        }
    });
});