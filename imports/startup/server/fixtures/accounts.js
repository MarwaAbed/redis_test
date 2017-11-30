import {Meteor} from 'meteor/meteor';
import fs from 'fs';
import {dumydata} from "../../../api/collections/dumydata";


import path from 'path';

Meteor.startup(() => {



    // PATIENTS
    if (dumydata.find().count() === 0) {
        for (i = 0; i < 100000; i++) {
          const dumydataname="dumydata"+i;
            //console.log("create data:", Patients.insert({name:dumydataname}));
            dumydata.insert({name:dumydataname});
        }
        console.log("created 100000 dumy data");
    }

});
