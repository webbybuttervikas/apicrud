import React, { useEffect, useState } from "react";

import axios from "axios";

const First = () => {
  const data = "https://dummyapi.io/data/v1/user?limit=10";

  const [list, setList] = useState([]);

  useEffect(async () => {
      const response = await axios
        .get(data, {
          headers: {
          "app-id": "62bd70b0f59e70cafdec8ad0",
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
      
      console.log(response.data.data[2].title)
    //   setList(response.data.data[0].firstName)
      console.log(list)

  }, [list]);

  return (
    <div className="text-center mt-5">
      <button type="button" className="btn btn-primary">
        {list}
      </button>
      {
        list.map((ele) =>{
            return <div>
                <span>{ele.firstName}</span>
            </div>
        })
    }
    </div>
  );
};

export default First;


