import { ArrowLeft, Plus, Pill, Clock, Check } from "lucide-react";
import { useNavigate } from "react-router";

export function Medications() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-[#22C55E] px-5 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl font-extrabold flex-1">Medications</h1>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-5 h-5 text-[#22C55E]" />
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="px-4 -mt-3 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#1A2138] text-base font-bold">Today's Schedule</h2>
            <span className="text-[#22C55E] text-xs font-semibold">2 of 4 taken</span>
          </div>
          <div className="space-y-3">
            <MedItem name="Metformin 500mg" time="08:00 AM" taken />
            <MedItem name="Glipizide 5mg" time="12:00 PM" />
            <MedItem name="Metformin 500mg" time="08:00 PM" />
            <MedItem name="Glipizide 5mg" time="10:00 PM" />
          </div>
        </div>
      </div>

      {/* Active Medications */}
      <div className="px-4">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Active Medications</h2>
        <div className="space-y-3">
          <MedCard
            name="Metformin"
            dosage="500mg"
            frequency="Twice daily"
            color="bg-[#DBEAFE]"
            iconColor="bg-[#1D9BF0]"
          />
          <MedCard
            name="Glipizide"
            dosage="5mg"
            frequency="Twice daily"
            color="bg-[#DCFCE7]"
            iconColor="bg-[#22C55E]"
          />
          <MedCard
            name="Atorvastatin"
            dosage="20mg"
            frequency="Once daily (night)"
            color="bg-[#FCE7F3]"
            iconColor="bg-[#EC4899]"
          />
        </div>
      </div>

      {/* Reminders */}
      <div className="px-4 mt-6">
        <div className="bg-[#EDE9FE] border border-[#C4B5FD] rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#6366F1] text-sm font-bold mb-1">Reminder Active</h3>
            <p className="text-[#6366F1]/70 text-xs leading-relaxed">
              You'll receive notifications 15 minutes before each medication time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MedItem({ name, time, taken }: { name: string; time: string; taken?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${taken ? "bg-[#22C55E]" : "bg-[#F0F4FF]"}`}>
        {taken ? <Check className="w-5 h-5 text-white" /> : <Pill className="w-5 h-5 text-[#7B8EC8]" />}
      </div>
      <div className="flex-1">
        <p className={`text-sm font-semibold ${taken ? "text-[#7B8EC8] line-through" : "text-[#1A2138]"}`}>{name}</p>
        <p className="text-[#7B8EC8] text-xs">{time}</p>
      </div>
      {!taken && (
        <button className="px-4 py-1.5 bg-[#1D9BF0] text-white text-xs font-semibold rounded-lg">
          Take
        </button>
      )}
    </div>
  );
}

function MedCard({ name, dosage, frequency, color, iconColor }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
      <div className={`${iconColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
        <Pill className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-[#1A2138] text-sm font-bold">{name}</h3>
        <p className="text-[#7B8EC8] text-xs">{dosage} • {frequency}</p>
      </div>
    </div>
  );
}
