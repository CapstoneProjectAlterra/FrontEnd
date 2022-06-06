import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../Networks/apis";

export default function Home() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("fetching data test ");

  //   axiosInstance.get("/facility")
  //   .then((res) => {
  //     console.log("Then")
  //     console.log(res.data.data)
  //     setData(res.data.data)
  //   })
  //   .catch((error) => {
  //     console.log("Masuk ke Catch");
  //     console.log(error);
  //   });
  // }, []);



  return (
    <div>
      <div>Home</div>
      {/* <div className="getData">
      <h1>Axios Fetching</h1>``
      {data.map((value, idx) => (
        <h3 key={idx}>{value.facility_name}</h3>
      )
      )}
    </div> */}
    </div>
  );
}
