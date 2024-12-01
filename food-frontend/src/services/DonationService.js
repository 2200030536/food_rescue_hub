import axios from "axios";

const REST_API_BASE_URl = 'http://localhost:8080/donations';

export const listDonations=()=>axios.get(REST_API_BASE_URl);
