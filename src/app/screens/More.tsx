import { User, FileText, Settings, HelpCircle, LogOut, Eye, Footprints, Calendar, Phone, Heart } from "lucide-react";
import { useNavigate } from "react-router";

export function More() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#6366F1] to-[#4F46E5] px-5 pt-8 pb-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-white text-xl font-extrabold">Ramesh Kumar</h1>
            <p className="text-white/70 text-xs mt-0.5">ramesh.kumar@email.com</p>
          </div>
        </div>
      </div>

      {/* Health Features */}
      <div className="px-4 -mt-5 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <h2 className="text-[#1A2138] text-sm font-bold mb-3 px-1">Health Features</h2>
          <div className="space-y-1">
            <FeatureItem
              icon={<Eye className="w-5 h-5" />}
              title="Eye Examination"
              subtitle="Schedule retinal screening"
              iconColor="bg-[#1D9BF0]"
            />
            <FeatureItem
              icon={<Footprints className="w-5 h-5" />}
              title="Foot Care"
              subtitle="Daily inspection & camera"
              iconColor="bg-[#EC4899]"
              onClick={() => navigate("/footcare")}
            />
            <FeatureItem
              icon={<Heart className="w-5 h-5" />}
              title="HbA1c Tracker"
              subtitle="3-month average glucose"
              iconColor="bg-[#EF4444]"
            />
            <FeatureItem
              icon={<Calendar className="w-5 h-5" />}
              title="Appointments"
              subtitle="Doctor visits & tests"
              iconColor="bg-[#22C55E]"
            />
          </div>
        </div>
      </div>

      {/* General */}
      <div className="px-4 mb-6">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">General</h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <MenuItem icon={<User className="w-5 h-5" />} title="My Profile" />
          <MenuItem icon={<FileText className="w-5 h-5" />} title="Medical Records" />
          <MenuItem icon={<Settings className="w-5 h-5" />} title="Settings" />
          <MenuItem icon={<HelpCircle className="w-5 h-5" />} title="Help & Support" />
          <MenuItem icon={<Phone className="w-5 h-5" />} title="Emergency Contacts" last />
        </div>
      </div>

      {/* Logout */}
      <div className="px-4">
        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:bg-[#FEE2E2] transition-colors">
          <div className="w-10 h-10 bg-[#FEE2E2] rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5 text-[#EF4444]" />
          </div>
          <span className="text-[#EF4444] text-sm font-semibold">Logout</span>
        </button>
      </div>

      {/* App Info */}
      <div className="px-4 mt-8 text-center">
        <p className="text-[#7B8EC8] text-xs">Diabetic Care App v1.0.0</p>
        <p className="text-[#7B8EC8] text-[10px] mt-1">© 2026 All rights reserved</p>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, subtitle, iconColor, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F5F8FF] transition-colors"
    >
      <div className={`${iconColor} w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-[#1A2138] text-sm font-semibold">{title}</h3>
        <p className="text-[#7B8EC8] text-xs">{subtitle}</p>
      </div>
    </button>
  );
}

function MenuItem({ icon, title, last }: any) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-[#F5F8FF] transition-colors ${!last ? "border-b border-[#DCE5FF]" : ""}`}>
      <div className="text-[#7B8EC8]">{icon}</div>
      <span className="text-[#1A2138] text-sm font-medium flex-1 text-left">{title}</span>
      <span className="text-[#7B8EC8]">›</span>
    </button>
  );
}
