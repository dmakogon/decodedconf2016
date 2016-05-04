// redisdemo

var redis = require('redis'),
    sleep = require('sleep'),
   config = require('../config')
  , redisServer = config.redis.serverName
  , redisKey = config.redis.authKey;

var client = redis.createClient(6380,redisServer, {auth_pass: redisKey, tls: {servername: redisServer}});
// client.on("connect", function () {
//     client.set("foo_rand000000000000", "some fantastic value", redis.print);
//     client.get("foo_rand000000000000", redis.print);
//     client.set("string key", "string val", redis.print);
// });

client.on("connect", function () {

	// simple get/set
	client.del("eventname", redis.print);
	client.set("eventname","DECODED", function(err, reply) {
		console.log('set:'+reply);
	});
	// hash set

	client.hset("speaker", "firstname", "david", redis.print);
	client.hset(["speaker", "lastname", "makogon"], redis.print);
	client.hkeys("speaker", function (err, fields) {
	    console.log(fields.length + " fields:");
	    fields.forEach(function (reply, i) {

	        console.log("    " + i + ": " + reply);
	        client.hget("speaker",reply,redis.print);
	    });

	});
	// set 2-second expiration
	client.expire("eventname",2, function(err, reply) {
		console.log('expire:'+reply);
	});
	client.get("eventname", redis.print);
	setTimeout(function() {
		client.ttl("eventname", redis.print);
		client.get("eventname", redis.print);
		client.quit();
	}, 3000);
});



