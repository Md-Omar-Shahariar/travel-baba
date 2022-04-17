import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>

      <div>
        <button className="my-2 btn bg-black text-white w-50 d-block mx-auto">
          <img style={{ width: "30px", height: "30px" }} src="" alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="my-2 btn bg-black text-white w-50 d-block mx-auto">
          <img style={{ width: "30px", height: "30px" }} src="" alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="my-2 btn bg-black text-white w-50 d-block mx-auto">
          <img style={{ width: "30px", height: "30px" }} src="" alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
