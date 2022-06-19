import { Row, Col } from "antd";
import { TicketModal } from "..";

const data = [
  {
    // Booking Table
    id: 1,
    booking_date: "2020-11-29",
    booking_pass: 1,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "John Doe",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2022-06-18",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
  {
    // Booking Table
    id: 2,
    booking_date: "2020-11-29",
    booking_pass: 2,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "Rober Davis",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2020-06-28",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
  {
    // Booking Table
    id: 3,
    booking_date: "2020-11-29",
    booking_pass: 3,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "Jonathan",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2020-06-28",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
  {
    // Booking Table
    id: 4,
    booking_date: "2020-11-29",
    booking_pass: 4,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "Rober Davis Chaniago",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2020-06-28",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
  {
    // Booking Table
    id: 5,
    booking_date: "2020-11-29",
    booking_pass: 5,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "Rober Davis Chaniago",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2020-06-28",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
  {
    // Booking Table
    id: 6,
    booking_date: "2020-11-29",
    booking_pass: 6,

    // Booking Detail Table
    family_id: 1,

    // Family Table
    date_of_birth: "1995-06-28",
    email: "test@gmail.com",
    full_name: "Rober Davis Chaniago",
    gender: "Laki-laki",
    id_card_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",
    nik: "3171011708450001",
    phone_number: "081234567890",
    residence_address: "Jalan Patipatipat no. 199 RT 08 RW 08 Bandung",

    // Health Facility Table
    facility_name: "Rumah Sakit Borromeus",

    // Schedule Table
    dose: "1",
    facility_id: 1,
    vaccine_id: 1,
    operational_hour_start: "09:00",
    operational_hour_end: "10:00",
    vaccination_date: "2020-06-28",

    // VaccineType Table
    vaccine_name: "Astra Zeneca",
  },
];

export default function TicketList() {
  return (
    <Row gutter={[76, 48]} justify="space-between">
      {data.map((item) => (
        <Col xs={24} md={12} lg={8} key={item.id}>
          <TicketModal data={item} key={item.id} />
        </Col>
      ))}
    </Row>
  );
}
