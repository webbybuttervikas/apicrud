import axios from "axios";
import React, { useEffect, useState } from "react";

const Third = () => {
  const [list, setList] = useState([]);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [update, setUpdate] = useState("");
  const [respons, setResponse] = useState([]);
  const [api, setApi] = useState([]);

  const postdata = "https://dummyapi.io/data/v1/user/create";
  const fetchdata = "https://dummyapi.io/data/v1/user?limit=10";

  // const saveUser = async (e) => {
  //   e.preventDefault();

  //   await axios
  //     .post(
  //       postdata,
  //       {
  //         firstName,
  //         lastName,
  //         email,
  //       },
  //       {
  //         headers: {
  //           "app-id": "62bd70b0f59e70cafdec8ad0",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       console.log(res.data);
  //       setResponse(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const resetInputField = () => {
    setFirstname("");
    setLastname("");
  };

  const fetchUser = async () => {
    await axios
      .get(fetchdata, {
        headers: {
          "app-id": "62cc0d0e9b95625b1399b5ce",
        },
      })
      .then((res) => {
        setList(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteUser = async (id) => {
    console.log(id);
    await axios
      .delete(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "62cc0d0e9b95625b1399b5ce",
        },
      })
      .then((res) => {
        setUpdate(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const selectUser = async (id) => {
    await axios
      .put(
        `https://dummyapi.io/data/v1/user/${id}`,
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            "app-id": "62cc0d0e9b95625b1399b5ce",
          },
        }
      )
      .then((res) => {
        setApi("fasdf");
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, [update, api]);

  useEffect(() => {
    console.log(respons);
  }, [respons]);

  useEffect(() => {
    localStorage.setItem("response", JSON.stringify([respons]));
  }, [respons]);

  useEffect(() => {
    console.log(firstName);
    console.log(lastName);
  }, [firstName, lastName]);

  return (
    <div className="container">
      <form onSubmit={() => selectUser()}>
        <div>
          <h5>firstName</h5>
          <input
            type="text"
            name="name"
            value={firstName}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <br />
        </div>
        <div>
          <h5>lastName</h5>
          <input
            type="text"
            lastname="lastname"
            value={lastName}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          ></input>
          <h5>Image</h5>
          <input
            type="text"
            lastname="lastname"
            value={lastName}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          ></input>
          <br />
        </div>
        {/* <h5>Email</h5> */}
        {/* <input
          type="text"
          email="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input> */}
        <button type="submit">Save</button>
      </form>
      {/* 
      <div>
        <h1>{respons.id}</h1>
        <h1>{respons.firstName}</h1>
        <h1>{respons.lastName}</h1>
        <h1>{respons.email}</h1>
      </div> */}

      <button onClick={fetchUser}>fetchdata</button>

      <div>
        <div className="row">
          {list.map((ele) => (
            <div className="col col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
              <div class="card" style={{ width: "18rem" }}>
                <img src={ele.picture} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    {ele.title} <br />
                    {ele.firstName}
                    <br />
                    {ele.lastName}
                    <br />
                    {ele.id}
                  </h5>
                  <p class="card-text"></p>
                  <button
                    onClick={() => {
                      deleteUser(ele.id);
                      resetInputField();
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      selectUser(ele.id);
                      resetInputField();
                    }}
                  >
                    update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Third;
