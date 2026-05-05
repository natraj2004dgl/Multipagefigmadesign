import { Bell, TrendingDown, Heart, Activity, Eye, Footprints, Pill, Check } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-[#1D9BF0] px-5 pt-8 pb-10 rounded-b-3xl relative">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-white/75 text-xs">Good morning</p>
            <h1 className="text-white text-2xl font-extrabold tracking-tight">Ramesh Kumar</h1>
            <p className="text-white/60 text-[11px] mt-0.5">Patient ID: #DIA2024-1234</p>
          </div>
          <Link to="/notifications" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </Link>
        </div>
        <div className="bg-white/20 rounded-xl px-3 py-1.5 inline-block">
          <p className="text-white text-[10px] font-semibold">Type 2 Diabetes</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <StatCard
            icon={<TrendingDown className="w-4 h-4" />}
            value="124"
            unit="mg/dL"
            label="Glucose"
            bgColor="bg-[#FEF3C7]"
            iconColor="bg-[#F59E0B]"
            textColor="text-[#F59E0B]"
          />
          <StatCard
            icon={<Heart className="w-4 h-4" />}
            value="72"
            unit="bpm"
            label="Heart Rate"
            bgColor="bg-[#DCFCE7]"
            iconColor="bg-[#22C55E]"
            textColor="text-[#22C55E]"
          />
          <StatCard
            icon={<Activity className="w-4 h-4" />}
            value="120/80"
            unit=""
            label="BP"
            bgColor="bg-[#DBEAFE]"
            iconColor="bg-[#1D9BF0]"
            textColor="text-[#1D9BF0]"
          />
        </div>
      </div>

      {/* Daily Health Checks */}
      <div className="px-4">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Daily Health Checks</h2>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <CheckItem icon="💊" label="Morning Medication" status="Done" statusColor="text-[#22C55E]" checked />
          <CheckItem icon="🍽️" label="Log Breakfast" status="Pending" statusColor="text-[#F59E0B]" />
          <CheckItem icon="🩸" label="Glucose Reading" status="Done" statusColor="text-[#22C55E]" checked />
          <CheckItem icon="🚶" label="30min Walk" status="Pending" statusColor="text-[#7B8EC8]" />
          <CheckItem icon="👣" label="Foot Inspection" status="Pending" statusColor="text-[#7B8EC8]" last />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickActionCard
            icon={<Activity className="w-5 h-5" />}
            title="Log Glucose"
            subtitle="Track levels"
            bgColor="bg-[#EDE9FE]"
            iconColor="bg-[#6366F1]"
            to="/glucose"
          />
          <QuickActionCard
            icon={<Pill className="w-5 h-5" />}
            title="Medications"
            subtitle="View schedule"
            bgColor="bg-[#DCFCE7]"
            iconColor="bg-[#22C55E]"
            to="/medications"
          />
          <QuickActionCard
            icon={<Eye className="w-5 h-5" />}
            title="Eye Check"
            subtitle="Book exam"
            bgColor="bg-[#DBEAFE]"
            iconColor="bg-[#1D9BF0]"
            to="/more"
          />
          <QuickActionCard
            icon={<Footprints className="w-5 h-5" />}
            title="Foot Care"
            subtitle="Daily scan"
            bgColor="bg-[#FCE7F3]"
            iconColor="bg-[#EC4899]"
            to="/footcare"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, unit, label, bgColor, iconColor, textColor }: any) {
  return (
    <div className="bg-white rounded-xl p-3 shadow-sm">
      <div className={`w-7 h-7 ${iconColor} rounded-lg flex items-center justify-center text-white mb-2`}>
        {icon}
      </div>
      <div className={`text-xl font-extrabold ${textColor}`}>
        {value}
        <span className="text-[10px] text-[#7B8EC8] ml-0.5">{unit}</span>
      </div>
      <p className="text-[10px] text-[#7B8EC8] mt-0.5">{label}</p>
    </div>
  );
}

function CheckItem({ icon, label, status, statusColor, checked, last }: any) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${!last ? "border-b border-[#DCE5FF]" : ""}`}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${checked ? "bg-[#22C55E] text-white" : "bg-[#F0F4FF] text-[#7B8EC8]"}`}>
        {checked ? <Check className="w-4 h-4" /> : icon}
      </div>
      <div className="flex-1">
        <p className="text-[#1A2138] text-xs font-medium">{label}</p>
      </div>
      <span className={`text-[10px] font-bold ${statusColor}`}>{status}</span>
    </div>
  );
}

function QuickActionCard({ icon, title, subtitle, bgColor, iconColor, to }: any) {
  return (
    <Link to={to} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 ${iconColor} rounded-xl flex items-center justify-center text-white mb-3`}>
        {icon}
      </div>
      <h3 className="text-[#1A2138] text-sm font-bold">{title}</h3>
      <p className="text-[#7B8EC8] text-[11px]">{subtitle}</p>
    </Link>
  );
}
