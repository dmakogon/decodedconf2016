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
Ok, no, we didn't see a relational database demo. However, you should be aware that Azure provides SQL Server database, as a service.

**SQL Database.** SQL Database is based on SQL Server V12. Aside from various scale options, it also supports DTU pooling, allowing multiple databases to share DTU resources. More information is available [here](https://azure.microsoft.com/en-us/services/sql-database/).

### Key/value
**Redis.** Redis service has both non-persistent and persistent options. As my demo showed, programming against Redis service is the same as programming against Redis installed in your own VM. More information is available [here](https://azure.microsoft.com/en-us/services/cache/).

**Azure Table Storage.** Table storage is part of the broader Azure Storage service, providing tables, blobs, and queues. Each storage account provides up to 500TB of durable storage. Within Table Storage, you may create any number of tables, with any number of entities per table. More information is available [here](https://azure.microsoft.com/en-us/documentation/articles/storage-dotnet-how-to-use-tables/).

### Document
**DocumentDB.** DocumentDB manages JSON documents, complete with a SQL-based query language, REST API + language SDK's, and server-side JavaScript stored procedures. Capacity and compute strength are both independently scalable. More information is available [here](https://azure.microsoft.com/en-us/services/documentdb/).

## 3rd-party database providers
I showed a few databases that are available through hosting partners. These hosted databases are available in Azure.

### Document

[mLab](https://mlab.com) and [Compose](https://compose.io/) provide hosted MongoDB in Azure.

### Graph

[GrapheneDB](http://graphenedb.com) and [Graph Story](https://graphstory.com) provide hosted Neo4j in Azure.

## VM-based databases

Given that Azure runs both Linux and Windows virtual machines, you should be able to install and run any database engine you require, given that you have proper licensing (if required). I demo'd two databases running in VMs. I built these by simply creating a VM, ssh'ing to the VM, and following the vendor's installation instructions. For demo purposes, I stored database content on the OS disk. For learning/getting-started purposes, this is the easiest approach, and requires no additional Virtual Machine configuration. In a typical environment, you would attach additional disks to your database VMs for storage.

### Document

**MongoDB**. Installation instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Graph

**Neo4j**. Installation instructions [here](http://debian.neo4j.org/).

## Azure Marketplace

The Azure Marketplace contains several pre-built templates that are designed to spin up an entire database cluster. With these templates, databases are deployed to your Virtual Machines. Once a deployment is complete, you will be able to connect to, and start using, your new database. You'll also have full access to the VMs that have been created, including the ability to change VM size and quantity.
