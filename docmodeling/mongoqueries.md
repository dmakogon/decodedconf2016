## MongoDB queries

var session = db.conf.find( {type:"abstract", id:26}).next()
db.conf.find({title: { $regex: /^The shape/ }}).pretty()
db.conf.find({type:"speaker",name: {$in: session.speakers}}, {name:1, sessions:1, _id:0})

db.conf.find( {type:"abstract", id: {$gte:1}},{id:1,title:1,speakers:1})
db.conf.find({roomId:3},{abstract:0,time:0,day:0,id:0,track:0,imageURI:0,_id:0}).pretty()

## DocumentDB queries

### Hierarchy

    SELECT VALUE org.name
    FROM org
    WHERE org.manager = "Jill"

    SELECT VALUE org.name FROM org
    WHERE ARRAY_CONTAINS(org.directs,"Ben")

### Keywords

    SELECT c.id, c.title
    FROM c
    WHERE CONTAINS(LOWER(c.title),"design")

    SELECT c.id, c.title
    FROM c
    WHERE ARRAY_CONTAINS(c.keywords,"design")