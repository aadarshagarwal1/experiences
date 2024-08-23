import { createSlice } from "@reduxjs/toolkit";
const collegeDetails = createSlice({
  name: "collegeDetails",
  initialState: {
    shortName: "BIT",
    fullName: "Birsa Institute of Technology",
    pinCode: "828123",
    address: "Sindri, Dhanbad",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.596162965923!2d86.47110607511203!3d23.654629278735847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696e95958a6d5%3A0x7c14e668e6f2feea!2sBIT%20Sindri!5e0!3m2!1sen!2sin!4v1724266192270!5m2!1sen!2sin",
  },
});
export default collegeDetails;
