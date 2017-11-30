import { Meteor } from 'meteor/meteor';

import '../imports/startup/both/default';
import '../imports/api/collections/dumydata';
////////////////////////////////////////////////////////////////
//  FIXTURES
////////////////////////////////////////////////////////////////
import '../imports/startup/server/fixtures/accounts';
var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');
console.log(redis)
