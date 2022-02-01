import Cookies from "js-cookie";
import { getData, postData } from "./axios";

export const handleSignIn = async (
  url,
  formdata,
  setLoading,
  login,
  location,
  history
  // setRedirectToReferrer
) => {
  const cred = {
    email: formdata.email,
    password: formdata.password,
  };
  setLoading(true);
  const data = await postData(url, cred);
  //   console.log(data);
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
    // setRedirectToReferrer(true);
    // const { from } = location.state || { from: { pathname: "/dashboard" } };
    // history.replace(from);

    // console.log(history);
    login().then(() => {
      const { from } = location.state || { from: { pathname: "/dashboard" } };
      history.replace(from);
    });
  }
};
