import axios from "axios";

import { JSON_API_URL } from "@/constant";

export const axiosClient = axios.create({ baseURL: JSON_API_URL });
