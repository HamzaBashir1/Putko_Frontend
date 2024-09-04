"use client"
import { useState, useContext } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { Base_URL, token } from "../config"; // Adjust the path as needed
// import { toast } from "react-toastify";
// import { AuthContext } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  // const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await fetch(`${Base_URL}/auth/login`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!res.ok) {
  //       throw new Error(res.statusText);
  //     }
  //     const result = await res.json();
  //     dispatch({
  //       type: "LOGIN_SUCCESS",
  //       payload: {
  //         user: result.data,
  //         token: result.token,
  //         role: result.role,
  //       },
  //     });

  //     setLoading(false);
  //     toast.success(result.message);
  //     router.push("/home");
  //   } catch (err) {
  //     toast.error(err.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="px-5 lg:px-[700px] w">
      <div className="w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>

        <form className="py-4 md:py-0" 
        // onSubmit={submitHandler}
        >
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-[#4FBE9F] text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
            </button>
          </div>
          <div className="mt-5 flex flex-row item-center justify-center">
            <p>Don&apos;t have an account?</p>
            <Link href="/Signup">
              <p className="text-black font-bold"> Register</p>
            </Link>
          </div>
          <p className="mt-5 text-textColor text-center">
            

          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
