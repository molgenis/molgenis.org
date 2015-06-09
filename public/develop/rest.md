The MOLGENIS REST API allows you to retrieve and modify your data model entities and entity collections. The API supports all CRUD (create, read, update and delete) methods as well as resource collections paging & filtering and resource field expansion. At the moment of writing JSON and form data are supported as request content types and JSON is the only supported response content type.

# Set operations

Your MOLGENIS data model defines the resources and resource collections that can be accessed and modified. Lets assume that your data model contains the entities DataSet, Protocol and Feature. The REST API will consist of the following endpoints:

*Endpoints*
* http://your.molgenis.url/api/v1/dataset
* http://your.molgenis.url/api/v1/protocol
* http://your.molgenis.url/api/v1/feature

## Retrieve set
*Request*
```
GET http://your.molgenis.url/api/v1/dataset 
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset",
    "start": 0,
    "num": 100,
    "total": 2,
    "items": [{
        "href": "/api/v1/dataset/1",
        "name": "my first data set",
        "protocol": {
            "href": "/api/v1/dataset/1/protocol"
        },{
        "href": "/api/v1/dataset/2",
        "name": "my second data set",
        "protocol": {
            "href": "/api/v1/dataset/2/protocol"
        }
    }]
}
```

## Search set

Parameters:

Key | Type | Description
--- | --- | ---
*start* | int | Offset in resource collection
*num* | int | Number of resources to retrieve starting at *start*
*q* | list of molgenis query rule objects | Query to filter the resource collection list

### start and num
*Request*
```
GET http://your.molgenis.url/api/v1/dataset?start=1&num=1
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset",
    "start": 1,
    "num": 1,
    "total": 3,
    "prevHref":"/api/v1/dataset?start=0&num=1"
    "nextHref":"/api/v1/dataset?start=2&num=1"
    "items": [{
        "href": "/api/v1/dataset/2",
        "name": "my second data set",
        "protocol": {
            "href": "/api/v1/dataset/2/protocol"
        }
    }]
}
```
*prevHref* is the location of the previous page of resources, *nextHref* is the location of the next page of resources.
### q
*Request*
```
POST http://your.molgenis.url/api/v1/dataset?_method=GET
Content-Type: application/json

{
    "q": [{
       "field": "name",
       "operator": "EQUALS",
       "value": "my first data set"
    }]
}
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset",
    "start": 0,
    "num": 100,
    "total": 1,
    "items": [{
        "href": "/api/v1/dataset/1",
        "name": "my first data set",
        "protocol": {
            "href": "/api/v1/dataset/1/protocol"
        }
    }]
}
```


## Delete set
*Request*
```
DELETE http://your.molgenis.url/api/v1/dataset 
```
*Response*
```javascript
204 No Content
```

#Instance operations


## Create instance
*Request*
```
POST http://your.molgenis.url/api/v1/dataset
Content-Type: application/json

{
    "name": "my third data set",
    "protocol": 10
}
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset/3",
    "name": "my third data set",
    "protocol": {
        "href": "/api/v1/dataset/3/protocol"
    }
}
```

## Retrieve instance
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/1
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset/1",
    "name": "my first data set",
    "protocol": {
        "href": "/api/v1/dataset/1/protocol"
    }
}
```
*href* is the location of this resource, *name* is a string value and *protocol* is the location of the entity that this dataset refers to.


## Update instance
*Request*
```
PUT http://your.molgenis.url/api/v1/dataset/3
Content-Type: application/json

{
    "name": "renamed data set"
}
```
*Response*
```
204 No Content
```
#### Update only one attribute value of entity instance
Context: if you only want to change one attribute without needing to provide all other attributes:

*Request*
```
PUT http://your.molgenis.url/api/v1/dataset/3/name
Content-Type: application/json

{
    "name": "renamed data set"
}
```
*Response*
```
204 No Content
```

## Delete instance
*Request*
```
DELETE http://your.molgenis.url/api/v1/dataset/3
```
*Response*
```
204 No Content
```

# Meta data
Assuming that you have entities 'datasets', 'protocol' and 'features' then you can retrieve the metadata as follows:

*Endpoints*
* http://your.molgenis.url/api/v1/dataset/meta
* http://your.molgenis.url/api/v1/protocol/meta
* http://your.molgenis.url/api/v1/feature/meta

## Create meta data

TODO

## Retrieve meta data
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/meta
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/DataSet/meta",
    "name": "DataSet",
    "label": "",
    "attributes": {
        "Identifier": {
            "href": "/api/v1/DataSet/meta/Identifier"
        },
        "Name": {
            "href": "/api/v1/DataSet/meta/Name"
        },
        "description": {
            "href": "/api/v1/DataSet/meta/description"
        },
        "ProtocolUsed": {
            "href": "/api/v1/DataSet/meta/ProtocolUsed"
        },
        "startTime": {
            "href": "/api/v1/DataSet/meta/startTime"
        },
        "endTime": {
            "href": "/api/v1/DataSet/meta/endTime"
        }
    },
    "labelAttribute": "Identifier"
}
```

## Update meta data

TODO

## Delete entity meta data
Deletes resource meta data and all data associated with this resource.

*Request*
```
DELETE http://your.molgenis.url/api/v1/dataset/meta
```
*Response*
```javascript
204 No Content
```

# Authentication

## Login
*Request*
```
POST http://your.molgenis.url/api/v1/login
Content-Type: application/json

{
    "username": "your username",
    "password": "your password"
}
```
*Response*
```
200 OK
{
    "token": "4296ef4fd9324360aa5c-bf8a849003da",
    "username": "admin",
    "firstname": "John",
    "lastname": "Doe"
}

OR
401 Unauthorized
```

## Token-based authentication

The token can be used as authentication token in subsequent api calls. The token must be added to the http header:
```
x-molgenis-token: 4296ef4fd9324360aa5c-bf8a849003da
```
## Logout
*Request*
```
GET http://your.molgenis.url/api/v1/logout

header:
x-molgenis-token: 4296ef4fd9324360aa5c-bf8a849003da
```
*Response*
```
200 OK
```

# Response codes
Code | Description
--- | ---
200 | Request ok, returned content in body
201 | Resource succesfully created
204 | Request ok
400 | Your request was not valid
401 | You are not authorized to perform this operation, did you authenticate?
404 | Resource does not exist
500 | Request ok but something went wrong on the server

# Advanced API usage

## Options
Key | Type | Description
--- | --- | ---
*attributes* | Comma-separated string | Defines which fields in the API response to select
*expand* | Comma-separated string | Defines which fields in the API response to (partially) expand
*_method* | HTTP method | Tunnel request through defined method over default API operation
*callback* | string | Callback function name used as JSON padding to allow cross domain requests

## attributes
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/1?attributes=identifier,name
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/DataSet/1",
    "Identifier": "celiacsprue",
    "Name": "Celiac Sprue"
}
```
## expand
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/1?expand=protocol
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset/1",
    "name": "my first data set",
    "protocol": {
        "href": "/api/v1/protocol/10",
        "name": "protocol for dataset #1",
        "features": {
            "href":"/api/v1/protocol/37265/features"
        }
    }
}
```
## partial expand
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/1?expand=protocol[name]
```
*Response*
```javascript
200 OK

{
    "href": "/api/v1/dataset/1",
    "name": "my first data set",
    "protocol": {
        "href": "/api/v1/protocol/10",
        "name": "protocol for dataset #1"
    }
}
```
## _method
Some browsers do not support operations such as PUT and DELETE. The *_method* parameter can be used to tunnel the request over a POST operation.

*Request*
```
POST http://your.molgenis.url/api/v1/dataset/3?_method=PUT
Content-Type: application/json

{
    "name": "renamed data set"
}
```
*Response*
```
204 No Content
```

## callback
*Request*
```
GET http://your.molgenis.url/api/v1/dataset/1?callback=myfunction
```
*Response*
```javascript
200 OK
myfunction(
{
    "href": "/api/v1/dataset/1",
    "name": "my first data set",
    "protocol": {
        "href": "/api/v1/dataset/1/protocol"
    }
}
)
```

## FAQ
> How to resolve a 400 Bad Request error?

Did you specify the Content-Type header if your body contains content?

> What options exist to define query rules for resource collection requests?

The query rules are serialized Java QueryRule objects, take a look at the source code of the QueryRule class to see what options are available.