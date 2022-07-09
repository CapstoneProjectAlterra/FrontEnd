import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  DatePicker,
  Breadcrumb,
  Modal,
  Button,
  Form,
  Input,
} from "antd";
import {
  CardBooking,
  CustomButton,
  ListFamily,
  CustomInput,
  AddFamily,
} from "../../../components";
import moment from "moment";
import { imgCard } from "../../../assets";
import {
  AiFillDelete,
  AiOutlineClockCircle,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import style from "./VaccineDetails.module.css";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import { FaPersonBooth, FaSyringe, FaUser } from "react-icons/fa";
import { TbBox, TbBoxModel, TbVaccineBottle } from "react-icons/tb";
import { BiBox, BiDetail, BiUserPlus } from "react-icons/bi";
import axios from "axios";
import CONST from "../../../utils/constant";
import Cookies from "js-cookie";

export default function VaccineDetails() {
  // state init
  const [vaccinationDate, setVaccinationDate] = useState(
    moment().format("DD-MM-YYYY")
  );
  const [vaccinationSession, setVaccinationSession] = useState([]);
  const [listFamilies, setListFamilies] = useState([]);
  const [isFamilyModalVisible, setIsFamilyModalVisible] = useState(false);
  const [hospitalData, setHospitalData] = useState({
    name: "",
    address: "",
    image: undefined,
  });
  const [selectedSchedule, setSelectedSchedule] = useState();
  const [selectedFamilyMember, setSelectedFamilyMember] = useState([]);

  const { hospitalId } = useParams();
  const breadcrumbPaths = [
    { title: "Home", href: "", isActive: false },
    { title: "Vaksinasi", href: "", isActive: false },
    { title: "Fasilitas Kesehatan", href: "", isActive: false },
    { title: "Vaksinasi", href: "", isActive: true },
  ];

  // utils
  const handleFamilyMemberChange = (event) => {
    const currentList = selectedFamilyMember;

    const selectedMemberIndex = currentList.findIndex(
      (data) => data.user_id == event.target.value
    );
    currentList[selectedMemberIndex].selected = event.target.checked;
    console.log("eta", currentList[selectedMemberIndex], event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setSelectedSchedule(event.target.session.value);
    // setSelectedFamilyMember(event.target.family.value);
    // console.log("test");
    console.log(selectedSchedule, selectedFamilyMember);
  };

  // mutator
  useEffect(() => {
    document.body.style.backgroundColor = "#f5fdfe";
    const token = Cookies.get("token");
    console.log(token);

    axios
      .get(CONST.BASE_API + `/facility/${hospitalId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwMTIzNDU2IiwiaWF0IjoxNjU3Mzc0NzI3LCJleHAiOjE2NTc0NjExMjd9.94fj4X4eo-yl13AaTDCqtx8-VL007WsxfSI9kducKeQ",
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        const data = res.data.data;
        setHospitalData({
          name: data.facility_name,
          address: `${data.street_name}, ${data.village_name}, ${data.district}, ${data.city}, ${data.province}.\nKode Pos: ${data.postal_code} \nNo Telp. ${data.office_number}`,
          image: data.img_url ?? imgCard,
        });
      });

    axios
      .get(CONST.BASE_API + "/family", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwMTIzNDU2IiwiaWF0IjoxNjU3Mzc0NzI3LCJleHAiOjE2NTc0NjExMjd9.94fj4X4eo-yl13AaTDCqtx8-VL007WsxfSI9kducKeQ",
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        // console.log("data", res);
        // const familyDataById = res.data.data.filter(
        //   (memberFamily) => memberFamily.profile.id === 3
        // );
        setListFamilies(res.data.data);
      });

    axios
      .get(CONST.BASE_API + "/schedule", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwMTIzNDU2IiwiaWF0IjoxNjU3Mzc0NzI3LCJleHAiOjE2NTc0NjExMjd9.94fj4X4eo-yl13AaTDCqtx8-VL007WsxfSI9kducKeQ",
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => setVaccinationSession(res.data.data));
  }, []);

  useEffect(() => {
    const familyInit = () => {
      const listOfFamily = [];

      listFamilies.map((value) => {
        listOfFamily.push({ user_id: value.id, selected: false });
      });
      setSelectedFamilyMember(listOfFamily);
    };
    familyInit();
  }, [listFamilies]);

  const HospitalInformationComponent = ({ hospitalName, hospitalAddress }) => (
    <div>
      <div
        style={{
          fontSize: 24,
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        {hospitalName}
      </div>{" "}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 25,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HiLocationMarker style={{ width: "100%", height: "100%" }} />{" "}
        </div>
        <div>{hospitalAddress}</div>{" "}
      </div>{" "}
    </div>
  );

  const VaccinationScheduleOptionComponent = ({
    time,
    inputValue,
    inputName,
    vaccineName,
    vaccineDosage,
    vaccineQuota,
  }) => (
    <div className={style.schedule_item_container}>
      <label>
        <input type="radio" name={inputName} value={inputValue} />
        <div className={style.schedule_item_card}>
          <div className={style.schedule_item__vaccine_time}>
            <div className={style.schedule_item__vaccine_time__icon}>
              <AiOutlineClockCircle />
            </div>
            <div className={style.schedule_item__vaccine_time__description}>
              {time}
            </div>
          </div>

          <Col className={style.schedule_item__vaccine_data_container}>
            <div className={style.schedule_item__vaccine_data_item}>
              <div className={style.schedule_item__vaccine_data_item__icon}>
                <FaSyringe />
              </div>
              <div
                className={style.schedule_item__vaccine_data_item__description}
              >
                {vaccineName}
              </div>
            </div>

            <div className={style.schedule_item__vaccine_data_item}>
              <div className={style.schedule_item__vaccine_data_item__icon}>
                <TbVaccineBottle />
              </div>
              <div
                className={style.schedule_item__vaccine_data_item__description}
              >
                {vaccineDosage}
              </div>
            </div>

            <div className={style.schedule_item__vaccine_data_item}>
              <div className={style.schedule_item__vaccine_data_item__icon}>
                <BiBox />
              </div>
              <div
                className={style.schedule_item__vaccine_data_item__description}
              >
                {vaccineQuota}
              </div>
            </div>
          </Col>
        </div>
      </label>
    </div>
  );

  const FamilyMemberCheckboxComponent = ({
    inputName,
    inputValue,
    memberName,
    memberPositionInFamily,
    memberNIK,
    memberId,
  }) => (
    <div className={style.family_member__container}>
      <label>
        <input
          type="checkbox"
          name={inputName}
          value={inputValue}
          onChange={handleFamilyMemberChange}
        />
        <div className={style.family_member__data_container}>
          <div className={style.family_member__data__private_container}>
            <div className={style.family_member__data__private__name_container}>
              <div className={style.familyMemberDataPrivateNameFact}>
                {memberName}
              </div>
              <div
                className={style.familyMemberDataPrivateNamePositionInFamily}
              >
                {memberPositionInFamily}
              </div>
            </div>
            <div className={style.family_member__data__private__resident_id}>
              {memberNIK}
            </div>
          </div>
          <div className={style.family_member__data__action_container}>
            <button
              className={style.family_member__data__action__detail_button}
            >
              <BiDetail />
            </button>
          </div>
        </div>
      </label>
    </div>
  );

  return (
    <CitizenLayouts>
      <Row
        justify="start"
        style={{ paddingTop: 50, rowGap: 10, paddingBottom: 10 }}
      >
        {/* <Row style={{ width: "80%" }}> */}
        {/* breadcrumb */}
        <Breadcrumb>
          {breadcrumbPaths.map((path, index) => (
            <Breadcrumb.Item key={index}>
              {path.href === "" ? (
                <a href={path.href}>{path.title}</a>
              ) : (
                <div>{path.title}</div>
              )}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Row>

      {/* body card */}
      <Row justify="center">
        <Col className={style.bodyCard}>
          {/* dataset container */}
          <div className={style.dataset_detail}>
            {/* hospital logo */}
            <img
              src={hospitalData.image ?? imgCard}
              alt="hospital"
              style={{
                width: "100%",
                maxWidth: 300,
                borderRadius: 24,
                height: "100%",
              }}
            />

            {/* datasets */}
            {/* <Form> */}
            <div className={style.datasetDetailData}>
              <HospitalInformationComponent
                hospitalName={hospitalData.name}
                hospitalAddress={hospitalData.address}
              />

              <form onSubmit={handleFormSubmit}>
                {/* datepicker */}
                <div style={{ marginTop: 40 }}>
                  <div>Pilih Tanggal</div>
                  <DatePicker
                    className="input"
                    format="DD-MM-YYYY"
                    defaultValue={moment()}
                    placeholder="Pilih Tanggal"
                    style={{ width: "100%" }}
                    onChange={(_, datestr) => setVaccinationDate(datestr)}
                  />
                </div>

                {/* schedules */}
                {/* <Form.Item hasFeedback noStyle> */}
                <div className={style.schedule_list_container}>
                  {vaccinationSession.map((session, index) => (
                    <VaccinationScheduleOptionComponent
                      time={`${session.operational_hour_start} - ${session.operational_hour_end}`}
                      inputName="session"
                      key={index}
                      inputValue={session.vaccine.id}
                      vaccineName={session.vaccine.vaccine_name}
                      vaccineDosage={session.dose}
                      vaccineQuota={session.quota}
                    />
                  ))}
                </div>
                {/* </Form.Item> */}

                {/* list of family members */}
                <div className={style.family_member_list_container}>
                  {listFamilies.map((member, index) => (
                    <FamilyMemberCheckboxComponent
                      key={index}
                      inputName="family"
                      inputValue={member.id}
                      memberName={member.name}
                      memberNIK={member.nik}
                      memberId={member.id}
                      memberPositionInFamily={member.status_in_family}
                    />
                  ))}
                </div>

                {/* submit button */}
                <div className={style.formButtonContainer}>
                  <CustomButton
                    variant="secondary"
                    style={{ height: "56px" }}
                    onClick={() =>
                      setIsFamilyModalVisible(!isFamilyModalVisible)
                    }
                  >
                    <BiUserPlus
                      style={{
                        width: "24px",
                        height: "24px",
                        fontSize: "16px",
                      }}
                    />
                    Tambah Anggota Keluarga
                  </CustomButton>
                  {/* <button
                    className={style.addFamilyMemberButton}
                    
                  >
                  </button> */}
                  <CustomButton
                    variant="primary"
                    type="submit"
                    style={{ height: "56px" }}
                    htmlType="submit"
                  >
                    Pesan Vaksinasi
                  </CustomButton>
                  {/* <button type="submit" className={style.submitButton}>
                  </button> */}
                </div>
              </form>
            </div>
            {/* </Form> */}
          </div>
        </Col>
      </Row>
    </CitizenLayouts>

    //     <Row justify="center">
    //       {/* main content */}
    //       <Col span={20} className={style.body}>
    //         {/* vaccination setpoint place */}
    //         <Row justify="space-between" style={{ margin: "40px 20px" }}>
    //           {/* setpoint image */}
    //           <Col span={7}>
    //             <img src={imgCard} alt="Image" className={style.image} />
    //           </Col>
    //           {/* setpoint detail */}
    //           <Col span={16}>
    //             {/* summaries */}
    //             <div className={style.detail}>
    //               <h2>Rumah Sakit Umum Majalaya</h2>
    //               <span className={style.location}>
    //                 <HiLocationMarker className={style.icon} />
    //                 <p>
    //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    //                   sed do eiusmod tempor incididunt ut labore et dolore magna
    //                   aliqua.
    //                 </p>
    //               </span>
    //             </div>

    //             {/* datasets */}
    //             <div>
    //               {/* schedule picker */}
    //               <div>
    //                 <DatePicker
    //                   className="input"
    //                   defaultValue={moment()}
    //                   format="DD-MM-YYYY"
    //                   style={{ width: "638px" }}
    //                   onChange={onChangeDate}
    //                 />
    //               </div>

    //               {/* dataset picker */}
    //               <div className={style.cardVaccine}>
    //                 <Row gutter={[52, 30]}>
    //                   <Col span={23} className="gutter-row">
    //                     {/* books */}
    //                     {vaccinationScheduleData.map((v, i) => (
    //                       <div>
    //                         <p>
    //                           {v.id} - {v.doseVaksin}
    //                         </p>
    //                       </div>
    //                     ))}
    //                     <CardBooking book={session} setBook={setSession} />
    //                     <div className={style.family}>
    //                       <h4>Daftar Anggota Keluarga</h4>
    //                       <div>
    //                         <ListFamily
    //                           list={listFams}
    //                           setListFams={setListFams}
    //                         />
    //                       </div>
    //                     </div>

    //                     {/* kazoku */}
    //                     <div style={{ marginTop: "32px" }}>
    //                       <Button type="primary" onClick={showModal}>
    //                         Tambah Keluarga
    //                       </Button>
    //                       <Modal
    //                         visible={visible}
    //                         title="Tambahkan Anggota Keluarga"
    //                         onOk={handleOk}
    //                         onCancel={handleCancel}
    //                         footer={[
    //                           <Button
    //                             key="submit"
    //                             type="primary"
    //                             onClick={handleOk}
    //                           >
    //                             Tambahkan
    //                           </Button>,
    //                         ]}
    //                       >
    //                         <AddFamily />
    //                       </Modal>
    //                       <CustomButton variant="secondary" block>
    //                         <AiOutlineUserAdd
    //                           style={{
    //                             width: "24px",
    //                             height: "24px",
    //                           }}
    //                         />
    //                         <span
    //                           style={{
    //                             fontSize: "16px",
    //                             fontWeight: "600px",
    //                           }}
    //                         >
    //                           Tambah Anggota Keluarga
    //                         </span>
    //                       </CustomButton>
    //                       <CustomButton
    //                         variant="primary"
    //                         block
    //                         style={{ marginTop: "24px" }}
    //                         onClick={handleClickFams}
    //                       >
    //                         Pesan Vaksinasi
    //                       </CustomButton>
    //                     </div>
    //                   </Col>
    //                 </Row>
    //               </div>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Row>
    // </div>
  );
}
