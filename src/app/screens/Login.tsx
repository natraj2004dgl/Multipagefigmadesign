import { useState } from "react";
import { useNavigate } from "react-router";
import { Phone, Lock } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#F5F8FF]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1D9BF0] to-[#0e6db8] px-6 pt-12 pb-16 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl">
          💊
        </div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Diabetic Care</h1>
        <p className="text-white/70 text-sm mt-1">Your health companion</p>
      </div>

      {/* Form Card */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="mb-5">
            <label className="text-[10px] font-bold text-[#7B8EC8] uppercase tracking-wider mb-2 block">
              Mobile Number
            </label>
            <div className="bg-[#F0F4FF] border-[1.5px] border-[#DCE5FF] rounded-xl px-4 py-3 flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#7B8EC8]" />
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent flex-1 text-sm text-[#1A2138] outline-none placeholder:text-[#7B8EC8]"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="text-[10px] font-bold text-[#7B8EC8] uppercase tracking-wider mb-2 block">
              OTP Code
            </label>
            <div className="bg-[#F0F4FF] border-[1.5px] border-[#DCE5FF] rounded-xl px-4 py-3 flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#7B8EC8]" />
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-transparent flex-1 text-sm text-[#1A2138] outline-none placeholder:text-[#7B8EC8]"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#1D9BF0] text-white rounded-xl py-3 text-sm font-semibold shadow-lg shadow-[#1D9BF0]/25 hover:bg-[#1579c0] transition-colors"
          >
            Login
          </button>

          <p className="text-center text-xs text-[#7B8EC8] mt-4">
            New user? <span className="text-[#1D9BF0] font-semibold cursor-pointer">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
