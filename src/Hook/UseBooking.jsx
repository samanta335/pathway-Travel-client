
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Page/Authentication/Providers/AuthProvider";
import UseAxios from "./UseAxios";

const UseBooking= () => {
  const [axiosSecure] = UseAxios();
  const { user } = useContext(AuthContext);
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking/${user?.email}`);
      return res.data;
    },
  });
      return [booking, refetch];
};

export default UseBooking;
