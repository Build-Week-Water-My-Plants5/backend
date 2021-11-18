# backend


* URL
- https://water-the-plants-api.herokuapp.com

# Users

[GET] /api/users/

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

[GET] /api/users/:id

{
    "user_id": 1,
    "username": "abraham",
    "phone_number": null,
    "password": "$2a$08$0FsvdkDvW/bt2JD26mgFcuxgZDuEbR/6hrVjdno4Js10If/dXVaM."
}

[GET] /api/users/:id/plants

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

[PUT] /api/users/:id



# Auth

[POST] /api/auth/register

[POST] /api/auth/login

# Plants

[GET] /api/plants/

[GET] /api/plants/:id

[PUT] /api/plants/:id

[DELETE] /api/plants/:id

[POST] /api/plants/
