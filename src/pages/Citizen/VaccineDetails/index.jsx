import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, DatePicker, Breadcrumb } from "antd";
import {
  CustomButton,
  AddFamily,
  EditFamily,
  SubmitFormButton,
} from "../../../components";
import moment from "moment";
import { imgCard } from "../../../assets";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import style from "./VaccineDetails.module.css";
import CitizenLayouts from "../../../layouts/CitizenLayout";
import { FaSyringe } from "react-icons/fa";
import { TbVaccineBottle } from "react-icons/tb";
import { BiBox } from "react-icons/bi";
import axiosInstance from "../../../networks/apis";
import { getUserId, isAuthenticatedUser } from "../../../utils/helpers/Auth";

export default function VaccineDetails() {
  // state init
  const [vaccinationDate, setVaccinationDate] = useState(
    moment().format("DD-MM-YYYY")
  );
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [vaccinationSession, setVaccinationSession] = useState([]);
  const [listFamilies, setListFamilies] = useState([]);
  const [hospitalData, setHospitalData] = useState({
    name: "",
    address: "",
    image: undefined,
  });
  const [selectedSchedule, setSelectedSchedule] = useState();
  const [selectedFamilyMember, setSelectedFamilyMember] = useState([]);
  const [bookingDetail, setBookingDetail] = useState([]);
  const [error, setError] = useState({ schedule: true, families: true });

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
    setError({ ...error, families: false });
    console.log("eta", currentList[selectedMemberIndex], event.target.value);
  };

  const checkFamilyAvailability = () => {
    const familyIds = selectedFamilyMember
      .filter((family) => family.selected === true)
      .map((item) => item.user_id);

    const familyList = [];

    familyIds.forEach((familyId) => {
      const bookingMember = bookingDetail.filter(
        (item) =>
          item.family_id === familyId &&
          item.booking.schedule.id === selectedSchedule
      );

      if (bookingMember.length > 0) {
        familyList.push(bookingMember[0].family.name);
      }
    });

    return familyList;
  };

  const bookingVaccination = async (scheduleId, familyId) => {
    const bookingInput = {
      booking_date: moment().format("DD-MM-YYYY hh:mm:ss"),
      user: {
        id: getUserId(),
      },
      schedule: {
        id: scheduleId,
      },
    };
    console.log(bookingInput);
    const bookingId = await axiosInstance
      .post("/booking", bookingInput)
      .then((res) => res.data.data.id);

    axiosInstance
      .post("/detail", {
        booking_id: bookingId,
        family_id: familyId,
        booking_status: "COMPLETED",
      })
      .then((res) => {
        console.log("success");
        console.log(res.data.data);
      });
  };

  const handleFormSubmit = () => {
    const scheduleId = selectedSchedule;
    const familyMember = selectedFamilyMember
      .filter((family) => family.selected === true)
      .map((item) => item.user_id);

    familyMember.forEach((familyId) => {
      bookingVaccination(scheduleId, familyId);
    });
  };

  // mutator
  useEffect(() => {
    axiosInstance
      .get(`/facility/${hospitalId}`, {
        data: {},
      })
      .then((res) => {
        const data = res.data.data;
        setHospitalData({
          name: data.facility_name,
          address: `${data.street_name}, ${data.village_name}, ${data.district}, ${data.city}, ${data.province}.\nKode Pos: ${data.postal_code} \nNo Telp. ${data.office_number}`,
          image: `data:${data.image.content_type};base64,${data.image.base64}`,
        });
      });

    axiosInstance
      .get("/family", {
        data: {},
      })
      .then((res) => {
        console.log("data", res);
        const familyDataById = res.data.data.filter(
          (memberFamily) => memberFamily.profile.user_id === getUserId()
        );
        setListFamilies(familyDataById);
      });

    axiosInstance
      .get("/schedule", {
        data: {},
      })
      .then((res) => {
        const sessionByHospitalId = res.data.data.filter(
          (session) => session.facility.id == hospitalId
        );
        console.log(sessionByHospitalId);
        setVaccinationSession(sessionByHospitalId);
      });

    axiosInstance
      .get("/detail", {
        data: "",
      })
      .then((res) => setBookingDetail(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [hospitalId]);

  useEffect(() => {
    axiosInstance
      .get("/family", {
        data: {},
      })
      .then((res) => {
        console.log("data", res);
        const familyDataById = res.data.data.filter(
          (memberFamily) => memberFamily.profile.user_id === getUserId()
        );
        setListFamilies(familyDataById);
      });
  }, [refetchToggle]);

  useEffect(() => {
    const familyInit = () => {
      const listOfFamily = [];

      listFamilies.forEach((value) => {
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
      </div>
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
          <HiLocationMarker style={{ width: "100%", height: "100%" }} />
        </div>
        <div>{hospitalAddress}</div>
      </div>
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
        <input
          type="radio"
          name={inputName}
          value={inputValue}
          onClick={() => {
            setSelectedSchedule(inputValue);
            setError({ ...error, schedule: false });
          }}
        />
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
    member,
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
            <EditFamily
              refetchToggle={refetchToggle}
              setRefetchToggle={setRefetchToggle}
              member={member}
            />
          </div>
        </div>
      </label>
    </div>
  );

  return (
    <CitizenLayouts auth={isAuthenticatedUser()}>
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
              src={hospitalData.image}
              alt="hospital"
              style={{
                width: "400px",
                borderRadius: 24,
                height: "400px",
                objectFit: "cover",
              }}
            />

            {/* datasets */}
            {/* <Form> */}
            <div className={style.datasetDetailData}>
              <HospitalInformationComponent
                hospitalName={hospitalData.name}
                hospitalAddress={hospitalData.address}
              />

              <form>
                {/* datepicker */}
                <div style={{ marginTop: 40 }}>
                  <h4>Pilih Tanggal</h4>
                  <DatePicker
                    className="input"
                    format="DD-MM-YYYY"
                    defaultValue={moment()}
                    placeholder="Pilih Tanggal"
                    style={{ width: "100%" }}
                    onChange={(_, datestr) => setVaccinationDate(datestr)}
                  />
                  {vaccinationSession.filter(
                    (item) => item.vaccination_date === vaccinationDate
                  ).length === 0 && (
                    <h5
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "16px",
                      }}
                    >
                      Tidak ada jadwal untuk hari ini
                    </h5>
                  )}
                </div>

                {/* schedules */}
                {/* <Form.Item hasFeedback noStyle> */}
                <div className={style.schedule_list_container}>
                  {vaccinationSession
                    .filter((item) => item.vaccination_date === vaccinationDate)
                    .map((session, index) => (
                      <VaccinationScheduleOptionComponent
                        time={`${session.operational_hour_start} - ${session.operational_hour_end}`}
                        inputName="session"
                        key={index}
                        inputValue={session.id}
                        vaccineName={session.vaccine.vaccine_name}
                        vaccineDosage={session.dose}
                        vaccineQuota={session.quota}
                      />
                    ))}
                </div>
                {/* </Form.Item> */}

                {/* list of family members */}
                <div className={style.family_member_list_container}>
                  <h4>Daftar Anggota Keluarga</h4>
                  {listFamilies.map((member, index) => (
                    <FamilyMemberCheckboxComponent
                      key={index}
                      inputName="family"
                      inputValue={member.id}
                      member={member}
                      memberName={member.name}
                      memberNIK={member.nik}
                      memberId={member.id}
                      memberPositionInFamily={member.status_in_family}
                    />
                  ))}
                </div>

                {/* submit button */}
                <div className={style.formButtonContainer}>
                  <AddFamily
                    setRefetchToggle={setRefetchToggle}
                    refetchToggle={refetchToggle}
                  />
                  <SubmitFormButton
                    submit={handleFormSubmit}
                    error={error}
                    checkFamilyAvailability={checkFamilyAvailability}
                  />
                </div>
              </form>
            </div>
            {/* </Form> */}
          </div>
        </Col>
      </Row>
    </CitizenLayouts>
  );
}
