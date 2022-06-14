import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../../Networks/apis";
import { Col, Row } from "antd";
import { CustomButton, CustomInput } from "../../../components";

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("fetching data test ");

  //   axiosInstance
  //     .get("/facility")
  //     .then((res) => {
  //       console.log("Then");
  //       console.log(res.data.data);
  //       setData(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log("Masuk ke Catch");
  //       console.log(error);
  //     });
  // }, []);

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log(count);

  return (
    <div>
      <div>Home</div>
      {/* <div className="getData">
        <h1>Axios Fetching</h1>``
        {data.map((value, idx) => (
          <h3 key={idx}>{value.facility_name}</h3>
        ))}
      </div> */}
    </div>
  );
}
