# APIs for NHTSA
## Version: 1.0.0

### /makes

#### GET
##### Summary

Retrieve a list of all makes

##### Description

Retrieve a list  of all makes

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | A list of makes. |

### /models

#### GET
##### Summary

Retrieve a list of models

##### Description

Retrieve a list of all models by year and make

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| year | query | Year | Yes | string |
| make | query | Name of a maker | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | A list of models |

### /vin

#### GET
##### Summary

Retrieve a detail of car

##### Description

Retrieve make, model and model year

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| vin | query | VIN Number | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Retrieve make, model and model year |
