#!/usr/bin/env node
var argv = require('yargs').usage('Usage: $0 --name [string]').demand(['name']).argv;

require('dotenv').config();

var pageSize = 50;
var keys = {
  read: process.env.DO_KEY_READ,
  write: process.env.DO_KEY_WRITE
}
var ip = process.env.ROOT_IP;

var DigitalOcean = require('do-wrapper');

var api = new DigitalOcean(keys.read, pageSize);
var dangerousWriteApi = new DigitalOcean(keys.write, pageSize);

var rootDomainName = process.env.ROOT_DOMAINNAME;

var query = {
  "type": "A",
  "name": argv.name,
  "data": ip,
  "priority": null,
  "port": null,
  "weight": null
};

/*api.account((err, res, body) => {
  console.log(body);
});
*/
var command = 'new';

if (command === 'list') {
  api.domainRecordsGetAll(rootDomainName, {},(err, res, body) => {
    console.log('Current domain names are: ');
    console.log(res);
  });
}

if (command === 'new') {
  dangerousWriteApi.domainRecordsCreate(rootDomainName, query, (err, res, body) => {
    console.log(body);
  });
}
/*
api.domainsGetAll(domainName, {}, function(result){
  console.log(result);
});
*/
