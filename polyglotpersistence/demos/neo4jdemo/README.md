# Neo4j demo

This demo is based off of the Cineast movie database (which, in turn, is built from
the moviedb.org content).

## Setup
The Cineast database may be found [here](http://neo4j.com/developer/example-data/).

Simply `ssh` into your neo4j instance and take care of the following:

 - TBD

Once data is loaded, visit your neo4j browser. Now we have a few enhancements to make
to the data model.

## Add additional labels

    match (a:Person)-[:ACTED_IN]->()
    set a :Actor

    match (p:Person)-[:DIRECTED]->()
    set p :Director