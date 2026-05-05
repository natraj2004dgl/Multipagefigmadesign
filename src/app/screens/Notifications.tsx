import { ArrowLeft, Pill, Activity, Calendar, Bell, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-[#6366F1] px-5 pt-8 pb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl font-extrabold flex-1">Notifications</h1>
          <button className="text-white text-xs font-semibold">Mark all read</button>
        </div>
      </div>

      {/* Today */}
      <div className="px-4 pt-6">
        <h2 className="text-[#7B8EC8] text-xs font-bold uppercase tracking-wider mb-3">Today</h2>
        <div className="space-y-2">
          <NotificationCard
            icon={<Pill className="w-5 h-5" />}
            iconBg="bg-[#22C55E]"
            title="Medication Reminder"
            message="Time to take Metformin 500mg"
            time="15 minutes ago"
            unread
          />
          <NotificationCard
            icon={<Activity className="w-5 h-5" />}
            iconBg="bg-[#F59E0B]"
            title="Glucose Alert"
            message="Your glucose level is in pre-diabetic range (124 mg/dL)"
            time="2 hours ago"
            unread
          />
          <NotificationCard
            icon={<CheckCircle className="w-5 h-5" />}
            iconBg="bg-[#1D9BF0]"
            title="Daily Goal Achieved"
            message="You completed 4 out of 5 health checks today!"
            time="3 hours ago"
          />
        </div>
      </div>

      {/* Yesterday */}
      <div className="px-4 pt-6">
        <h2 className="text-[#7B8EC8] text-xs font-bold uppercase tracking-wider mb-3">Yesterday</h2>
        <div className="space-y-2">
          <NotificationCard
            icon={<Calendar className="w-5 h-5" />}
            iconBg="bg-[#6366F1]"
            title="Appointment Reminder"
            message="Doctor visit scheduled for May 10, 2026 at 10:00 AM"
            time="Yesterday, 6:00 PM"
          />
          <NotificationCard
            icon={<Pill className="w-5 h-5" />}
            iconBg="bg-[#22C55E]"
            title="Medication Taken"
            message="Glipizide 5mg logged successfully"
            time="Yesterday, 8:00 PM"
          />
          <NotificationCard
            icon={<Bell className="w-5 h-5" />}
            iconBg="bg-[#EC4899]"
            title="Foot Care Reminder"
            message="Don't forget your daily foot inspection"
            time="Yesterday, 9:00 AM"
          />
        </div>
      </div>

      {/* Earlier */}
      <div className="px-4 pt-6 pb-6">
        <h2 className="text-[#7B8EC8] text-xs font-bold uppercase tracking-wider mb-3">Earlier</h2>
        <div className="space-y-2">
          <NotificationCard
            icon={<Activity className="w-5 h-5" />}
            iconBg="bg-[#1D9BF0]"
            title="Weekly Report"
            message="Your average glucose level was 108 mg/dL this week"
            time="May 2, 2026"
          />
          <NotificationCard
            icon={<CheckCircle className="w-5 h-5" />}
            iconBg="bg-[#22C55E]"
            title="Milestone Achieved"
            message="7-day medication streak! Keep it up!"
            time="May 1, 2026"
          />
        </div>
      </div>
    </div>
  );
}

function NotificationCard({ icon, iconBg, title, message, time, unread }: any) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${unread ? "border-l-4 border-[#1D9BF0]" : ""}`}>
      <div className="flex items-start gap-3">
        <div className={`${iconBg} w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-[#1A2138] text-sm font-bold">{title}</h3>
            {unread && <div className="w-2 h-2 bg-[#1D9BF0] rounded-full flex-shrink-0 mt-1" />}
          </div>
          <p className="text-[#7B8EC8] text-xs leading-relaxed mb-2">{message}</p>
          <p className="text-[#7B8EC8] text-[10px]">{time}</p>
        </div>
      </div>
    </div>
  );
}
