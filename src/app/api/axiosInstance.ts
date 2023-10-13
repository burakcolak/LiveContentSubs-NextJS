// import axios from "axios";
// import { useSession } from "next-auth/react";

// const { data: session } = useSession();

// const axiosInstance = axios.create({
//     baseURL: process.env.API_URL,
//     timeout: 1000,
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: session ? `Bearer ${session?.user?.token}` : "",
//     },
// });

// export default axiosInstance;