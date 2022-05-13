import Cookies from "js-cookie";
import { getData, postData } from "./axios";
import { toast } from "react-toastify";

export const handleSignIn = async (
  url,
  formdata,
  setLoading,
  login,
  location,
  history
  // setRedirectToReferrer
) => {
  try {
    const cred = {
      email: formdata.email,
      password: formdata.password,
    };
    // console.log(props.history);
    setLoading(true);
    const data = await postData(url, cred);
    console.log( typeof data, JSON.stringify(data));
    if (!data.token) {
      toast.error("Login Failed");
      // console.log(data.status)
    }

    setLoading(false);

    // save cookie
    Cookies.set("login-token", data.token, { expires: 1 });

    // redirect private route
    if (data.token) {
      const { profile } = await getData("/profile");
      const profileData = {
        name: profile?.full_name,
        id: profile?.id,
        role: profile?.roles[0].name,
      };
      Cookies.set("user-profile", JSON.stringify(profileData), { expires: 1 });

      // history?.push("/dashboard");
      window.location.href = "/dashboard";
    }
  } catch (err) {
    console.log(err);
    toast.error(err);
  }
};
