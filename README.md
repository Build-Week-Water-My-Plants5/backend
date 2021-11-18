# backend


* URL
- https://water-the-plants-api.herokuapp.com

# Users

[GET] /api/users/

collection of all users

```JSON
[
    {
        "user_id": 1,
        "username": "abraham",
        "phone_number": null,
        "password": "$2a$08$0FsvdkDvW/bt2JD26mgFcuxgZDuEbR/6hrVjdno4Js10If/dXVaM."
    },
    {
        "user_id": 2,
        "username": "foo",
        "phone_number": null,
        "password": "$2a$08$ldowmNFoSQZ6Sj7ee6llre6.OTMDagAqGdofXNBTruY7q0GY8.p4q"
    },
    {
        "user_id": 3,
        "username": "bar",
        "phone_number": null,
        "password": "$2a$08$sVnIBnYcUU./261H3GWteepyDZt818YHMJq8nJGbSSjTpEa57aesy"
    },
    {
        "user_id": 4,
        "username": "maksimum",
        "phone_number": null,
        "password": "$2a$08$4QMuUPl.6p/LeqQ.yKAcLuzjypxUAP4fpaUkRA3q277Kj3.WmlQYS"
    },
    {
        "user_id": 5,
        "username": "nnjn",
        "phone_number": null,
        "password": "$2a$08$GWbMLymfTh7z/qP7KevzdOL3pvabK39AHHWfuG.A1OrqxVfV0mdIu"
    }
]
```
[GET] /api/users/:id

specific user

```JSON
{
    "user_id": 1,
    "username": "abraham",
    "phone_number": null,
    "password": "$2a$08$0FsvdkDvW/bt2JD26mgFcuxgZDuEbR/6hrVjdno4Js10If/dXVaM."
}
```
[GET] /api/users/:id/plants

gets plants of the specific user

```JSON
[
    {
        "h2o_frequency": null,
        "image_url": null,
        "nickname": null,
        "plant_id": null,
        "species": null,
        "phone_number": null
    }
]
```
[PUT] /api/users/:id

changes specific user info

```JSON
{
    "message": "User info updated"
}
```
# Auth

[POST] /api/auth/register

adds new user to database

```JSON
{
    "user_id": 6,
    "username": "doomguy",
    "phone_number": null
}
```
[POST] /api/auth/login

logs in user and gives token

```JSON
{
    "message": "Welcome doomguy!",
    "user_id": 6,
    "token": "{token text here}"
}
```
# Plants

[GET] /api/plants/

get's **ALL** plants in database 

```JSON
[
    {
        "plant_id": 1,
        "nickname": "pee-shooter",
        "species": "gattling",
        "h2o_frequency": "once a week",
        "image_url": null,
        "user_id": 6
    },
    {
        "plant_id": 2,
        "nickname": "foo-tree",
        "species": "foo",
        "h2o_frequency": "once a week",
        "image_url": null,
        "user_id": 2
    }
]
```
[GET] /api/plants/:id

get's plants by **plant_id**

```JSON
{
    "plant_id": 1,
    "nickname": "pee-shooter",
    "species": "gattling",
    "h2o_frequency": "once a week",
    "image_url": null,
    "user_id": 6
}
```
[PUT] /api/plants/:id

changes plant info

```JSON
{
    "plant_id": 2,
    "nickname": "bar-tree",
    "species": "bar",
    "h2o_frequency": "once a week",
    "image_url": null,
    "user_id": 2
}
```
[DELETE] /api/plants/:id

removes plant form database

```JSON
{
    "message": "Plant was killed by magic"
}
```
[POST] /api/plants/

adds new plant to database

```JSON
{
    "plant_id": 1,
    "nickname": "pee-shooter",
    "species": "gattling",
    "h2o_frequency": "once a week",
    "image_url": null,
    "user_id": 6
}
```