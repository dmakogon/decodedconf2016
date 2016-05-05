# The Shape of JSON: Document modeling 101

This talk was created from many project experiences where customers were first starting to work with
document databases, such as MongoDB and Azure DocumentDB.

The content in the presentation covers common challenges with JSON document modeling, and some general
guidelines when making modeling decisions.

Note: There's really no single right answer to
many modeling questions. So much of it is app/use-case specific. And what works for
one app might not work for another. However, it's worth thinking these issues through,
to make the best decision for your specific case.

## Demo details

During the talk, I showed some document queries, using two different document databases:

 - Azure DocumentDB. This is a Document Database-as-a-Service. It's completely managed by Azure, providing
 native JSON document database support.
 - MongoDB. This is a very popular open source document database engine. For the purposes
 of the demo, MongoDB was running in an Azure Linux Virtual Machine.

## MongoDB queries

### Query a session and all of its speakers
    var session = db.conf.find( {type:"abstract", id:26}).next()
    db.conf.find({type:"speaker",name: {$in: session.speakers}}, {name:1, sessions:1, _id:0})

### Query a session based on its name
    db.conf.find({title: { $regex: /^The shape/ }}).pretty()

### Query all session abstracts, just displaying id, title, and speakers
    db.conf.find( {type:"abstract", id: {$gte:1}},{id:1,title:1,speakers:1})

### Query all content related to roomID 3. This returns multiple document types
(two abstract documents and a room document), as they all have a `roomId` property
with `value=3`.
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
