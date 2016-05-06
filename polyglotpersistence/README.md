# Polyglot persistence: Choosing the right storage mix

The Golden Hammer anti-pattern is pretty simple:

> If all you have is a hammer, everything looks like a nail.

Sometimes, we tend to treat our data as a nail: We have one database, so we try making it all fit within a single database engine.

This talk introduces core database types not falling into the *Relational* category:

 - Key/value
 - Document
 - Graph
 - Column
 
Then, it introduces the notion of *Polyglot Persistence*: Combining more than one database within a single application.

## Azure database services

I demo'd several databases using Database-as-a-Service. With DBaaS, there's no need to administer any VM's or install database software. Everything is taken care of for you. Here's a quick rundown on DBaaS available to you within the various database categories.

### Relational
Ok, no, we didn't see a relational database demo. However, you should be aware that Azure provides a relational database service. as a service.

*SQL Database.* SQL Database is based on SQL Server V12. Aside from various scale options, it also supports DTU pooling, allowing multiple databases to share DTU resources.

## Key/value
*Redis.* Redis service has both non-persistent and persistent options. As my demo showed, programming against Redis service is the same as programming against Redis installed in your own VM.

*Azure Table Storage.*
