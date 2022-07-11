import axios from "axios";
import React, { useEffect, useState } from "react";
const Api = "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109cc";


const Update = () => {

const [bio, setBio] = useState([])


  useEffect(async () => {
    await axios.put(Api,  {
        "firstName":"vikas",
        "lastName":"patel",
        "gender" : "male"
      }, {
      headers: {
        "app-id": "62bd70b0f59e70cafdec8ad0",
      },
    }) .then((res) => {
        setBio(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    console.log(bio)
  }, [])


  return <div>{bio.lastName}</div>;
};

export default Update;
