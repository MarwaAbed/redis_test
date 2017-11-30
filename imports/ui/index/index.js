import {Template} from 'meteor/templating';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Mongo} from 'meteor/mongo';
import {dumydata} from '../../api/collections/dumydata.js'

import './index.html';


Template.index.onCreated(function () {

});

Template.index.helpers({
  dumyData(){
    return dumydata.find({}, {sort: {name: 1}});
  },
  filterData(){
    return dumydata.find({name:"dumydata1"},{sort: {name:1}}).limit(4);
  }

});
