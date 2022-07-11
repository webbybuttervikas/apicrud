import axios from "axios";
import React, { useEffect, useState } from "react";

const Second = () => {
  const [list, setList] = useState([]);
  const data = "https://dummyapi.io/data/v1/user?limit=10";

  useEffect(async () => {
    await axios
      .get(data, {
        headers: {
          "app-id": "62bd70b0f59e70cafdec8ad0",
        },
      })
      .then((res) => {
        setList(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   console.log(list);
  // }, [list]);

  return (
    <div>
      <div className="row">
        {list.map((ele) => (
          <div className="col col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div class="card" style={{ width: "18rem" }}>
              <img src={ele.picture} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  {ele.title}
                  {ele.firstName}
                  {ele.lastName}
                </h5>
                <p class="card-text">fgsdgsdfgd</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;
