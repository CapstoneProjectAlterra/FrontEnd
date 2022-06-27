import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "../../../networks/apis";
import {Col, Row} from "antd";
import {CustomButton, CustomInput, Navbar} from "../../../components";
import CitizenLayouts from "../../../layouts/CitizenLayout";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("fetching data test ");

    axiosInstance
      .get("/facility")
      .then((res) => {
        console.log("Then");
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log("Masuk ke Catch");
        console.log(error);
      });
  }, []);

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log(count);

  return (
    <CitizenLayouts type="home">
      <div>Home</div>
      <div className="getData">
        <h1>Axios Fetching</h1>``
        {data.map((value, idx) => (
          <h3 key={idx}>{value.facility_name}</h3>
        ))}
      </div>
      <CustomButton variant="primary">Primary</CustomButton>
      <CustomButton variant="secondary">Secondary</CustomButton>
      <CustomInput placeholder="test" />
    </CitizenLayouts>
  );
}
