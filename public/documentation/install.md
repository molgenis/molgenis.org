**
You can download, install and use MOLGENIS for free under license [LGPLv3](). We here document three approaches: (1) install using apache-tomcat, (2) install using maven cargo or (3) install by compiling the code yourself
**

# Using apache-tomcat
The three components needed to run MOLGENIS locally or on a server are:

* [apache-tomcat](http://tomcat.apache.org/) 
* [MySQL](https://www.mysql.com/downloads/)
* The WAR for the [latest molgenis-app release](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.molgenis%22%20AND%20a%3A%22molgenis-app%22) from maven central.

Deploy apache-tomcat, and place the molgenis-app WAR as the ROOT.war in your apache-tomcat/webapps folder. If you are unfamiliar with apache-tomcat, follow one of their [apache-tomcat installation guides](https://tomcat.apache.org/tomcat-7.0-doc/deployer-howto.html).

Now that your apache-tomcat is running and MOLGENIS is deployed, you will notice it will not work yet. This is because your MySQL needs to be configured, and a single properties file needs to be set.

**Setting your molgenis-server.properties**   
MOLGENIS will try to find its property file at *<user_home>/.molgenis/omx/*. Create this folder, and create the molgenis-server.properties file. Open the file and write the following lines:

```
	db_user=molgenis  
	db_password=molgenis  
	db_uri=jdbc:mysql://localhost/omx  
	admin.password=admin  
	user.password=admin  
```

Remember the *omx* specified in your db_uri, because this will be the name of the database you will create later on in MySQL. This effectively means that whatever you call your database, your db_uri should point to it.

**Setting up your MySQL**  
If you are unfamiliar with MySQL, follow one of their [MySQL installation guides](http://dev.mysql.com/doc/refman/5.7/en/windows-installation.html). Once you have a MySQL server running, login as admin user and type the following commands:

```sql
	create database omx;  
	grant all privileges on omx.* to molgenis@localhost identified by 'molgenis';  
	flush privileges;  
```

Now that your MySQL server and properties file have been configured, restart the apache tomcat server.
If you open up a web browser and navigate to where your apache-tomcat applications are deployed (often this is localhost:8080) you should see the following:  

![](res/images/molgenis_home_logged_out.png?raw=true, "molgenis home page")  

Congratulations! You now have your MOLGENIS application up and running. Remember the admin.password you set in the molgenis-server.properties file? Use that password to login as the admin user. The next section will take you through the different modules MOLGENIS has to offer.

# Using maven cargo
The fastest and easiest way to get MOLGENIS running on a machine, is using our cargo project. This is collection of files that you can use to deploy MOLGENIS for you. There are three steps you need to do before this will work: 

**Download the cargo project**

[Download](https://github.com/molgenis/molgenis-cargo) the entire project from GitHub.

**Setting up your MySQL**  
If you are unfamiliar with MySQL, follow one of their [MySQL installation guides](http://dev.mysql.com/doc/refman/5.7/en/windows-installation.html). Once you have a MySQL server running, login as admin user and type the following commands:

```sql
	create database omx;
	grant all privileges on omx.* to molgenis@localhost identified by 'molgenis';
	flush privileges;
```

If your MySQL has been configured correctly, and your molgenis-server.properties set, then you have to navigate to the location of the cargo and start MOLGENIS with the following command:

```bash
mvn clean resources:resources org.codehaus.cargo:cargo-maven2-plugin:run
```

More details are included in the README of the cargo project.

# Compiling the code

You can also compile the code yourself. See the [Development guide](/develop).


