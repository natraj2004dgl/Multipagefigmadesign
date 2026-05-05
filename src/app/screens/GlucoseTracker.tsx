import { ArrowLeft, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const chartData = [
  { time: "Mon", value: 110 },
  { time: "Tue", value: 98 },
  { time: "Wed", value: 124 },
  { time: "Thu", value: 105 },
  { time: "Fri", value: 118 },
  { time: "Sat", value: 95 },
  { time: "Sun", value: 102 },
];

export function GlucoseTracker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-[#1D9BF0] px-5 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl font-extrabold flex-1">Glucose Tracker</h1>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-5 h-5 text-[#1D9BF0]" />
          </button>
        </div>
      </div>

      {/* Current Reading */}
      <div className="px-4 -mt-3 mb-6">
        <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-2xl p-5 shadow-lg">
          <p className="text-[#F59E0B] text-xs font-semibold mb-1">Current Reading</p>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-extrabold text-[#F59E0B]">124</span>
            <span className="text-[#F59E0B]/60 text-sm font-semibold mb-1">mg/dL</span>
          </div>
          <div className="flex items-center gap-1 text-[#F59E0B]">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-semibold">Pre-diabetic range</span>
          </div>
          <p className="text-[#F59E0B]/70 text-[10px] mt-2">Measured 2 hours ago • Fasting</p>
        </div>
      </div>

      {/* 7-Day Trend */}
      <div className="px-4 mb-6">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">7-Day Trend</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DCE5FF" />
              <XAxis dataKey="time" tick={{ fill: "#7B8EC8", fontSize: 11 }} />
              <YAxis tick={{ fill: "#7B8EC8", fontSize: 11 }} domain={[70, 140]} />
              <Line type="monotone" dataKey="value" stroke="#1D9BF0" strokeWidth={3} dot={{ fill: "#1D9BF0", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Readings */}
      <div className="px-4">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Recent Readings</h2>
        <div className="space-y-2">
          <ReadingCard time="Today, 08:00 AM" value={124} status="Pre-diabetic" statusColor="text-[#F59E0B]" bgColor="bg-[#FEF3C7]" />
          <ReadingCard time="Yesterday, 08:15 AM" value={105} status="Normal" statusColor="text-[#22C55E]" bgColor="bg-[#DCFCE7]" />
          <ReadingCard time="May 3, 07:45 AM" value={118} status="Pre-diabetic" statusColor="text-[#F59E0B]" bgColor="bg-[#FEF3C7]" />
          <ReadingCard time="May 2, 08:00 AM" value={95} status="Normal" statusColor="text-[#22C55E]" bgColor="bg-[#DCFCE7]" />
        </div>
      </div>
    </div>
  );
}

function ReadingCard({ time, value, status, statusColor, bgColor }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
      <div className={`${bgColor} w-14 h-14 rounded-xl flex flex-col items-center justify-center`}>
        <span className={`text-lg font-extrabold ${statusColor}`}>{value}</span>
        <span className="text-[9px] text-[#7B8EC8] font-medium">mg/dL</span>
      </div>
      <div className="flex-1">
        <p className="text-[#1A2138] text-sm font-semibold">{time}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <div className={`w-1.5 h-1.5 rounded-full ${statusColor === "text-[#22C55E]" ? "bg-[#22C55E]" : "bg-[#F59E0B]"}`} />
          <span className={`text-[11px] font-semibold ${statusColor}`}>{status}</span>
        </div>
      </div>
    </div>
  );
}
