import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Session} from 'meteor/session';

////////////////////////////////////////////////////////////////
//  API
////////////////////////////////////////////////////////////////
import '../imports/startup/both/default';
import '../imports/api/collections/dumydata';


////////////////////////////////////////////////////////////////
//  UI COMPONENTS
////////////////////////////////////////////////////////////////
import '../imports/startup/client/routs';
import '../imports/ui/index/index.js';

////////////////////////////////////////////////////////////////
//  MAIN
////////////////////////////////////////////////////////////////
import './main.html';


var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');
console.log(redis)

Template.body.onCreated(function () {

});

Template.body.helpers({

});

Template.container.helpers({});
