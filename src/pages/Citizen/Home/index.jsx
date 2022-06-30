import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../networks/apis";
import {Col, Row} from "antd";
import {CustomAlert, CustomButton, CustomInput} from "../../../components";
import Cookies from "js-cookie";
import axios from "axios";
import CitizenLayout from "../../../layouts/CitizenLayout";
import {isAuthenticated} from "../../../utils/helpers/Auth";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=vaksin%20covid&categories=health&sortBy=publishedAt&apiKey=68864b6a0889466db4e38b081263b981"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

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
    <CitizenLayout auth={isAuthenticated()}>
      <div>Home</div>
      <div className="getData">
        <h1>Axios Fetching</h1>
        {data.map((value, idx) => (
          <h3 key={idx}>{value.facility_name}</h3>
        ))}
      </div>
      {/* {description.slice(0, 200) + (description.length > 200 ? '...' : '')} */}
      <CustomButton variant="primary">Primary</CustomButton>
      <CustomButton variant="secondary">Secondary</CustomButton>
      <CustomInput placeholder="test" />
      <CustomAlert />
    </CitizenLayout>
  );
}
