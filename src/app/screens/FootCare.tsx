import { ArrowLeft, Camera, AlertCircle, CheckCircle, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function FootCare() {
  const navigate = useNavigate();
  const [photoTaken, setPhotoTaken] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#EC4899] to-[#DB2777] px-5 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl font-extrabold flex-1">Foot Care</h1>
        </div>
      </div>

      {/* Camera Section */}
      <div className="px-4 -mt-3 mb-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Camera Viewfinder */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/3] flex items-center justify-center relative">
            {!photoTaken ? (
              <>
                <div className="absolute inset-8 border-2 border-dashed border-white/40 rounded-2xl" />
                <Camera className="w-16 h-16 text-white/60" />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-[#22C55E] mx-auto mb-2" />
                  <p className="text-[#1A2138] font-semibold">Photo captured</p>
                </div>
              </div>
            )}
          </div>

          {/* Camera Controls */}
          <div className="p-4">
            <button
              onClick={() => setPhotoTaken(!photoTaken)}
              className="w-full bg-[#EC4899] text-white rounded-xl py-3 text-sm font-semibold shadow-lg flex items-center justify-center gap-2 hover:bg-[#DB2777] transition-colors"
            >
              <Camera className="w-5 h-5" />
              {photoTaken ? "Retake Photo" : "Capture Photo"}
            </button>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="px-4 mb-6">
        <div className="bg-[#DBEAFE] border border-[#93C5FD] rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1D9BF0] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#1D9BF0] text-sm font-bold mb-2">Daily Inspection Guide</h3>
              <ul className="space-y-1 text-[#1D9BF0]/80 text-xs">
                <li>• Check both feet for cuts, blisters, or wounds</li>
                <li>• Look for redness, swelling, or color changes</li>
                <li>• Inspect between toes for moisture or cracks</li>
                <li>• Use a mirror for the bottom of your feet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="px-4 mb-6">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Warning Signs</h2>
        <div className="space-y-2">
          <WarningCard
            title="Open Wounds"
            description="Any cuts, blisters, or sores that don't heal"
            severity="high"
          />
          <WarningCard
            title="Color Changes"
            description="Bluish, pale, or very red skin"
            severity="medium"
          />
          <WarningCard
            title="Loss of Sensation"
            description="Numbness or tingling in feet"
            severity="medium"
          />
        </div>
      </div>

      {/* Care Tips */}
      <div className="px-4">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Daily Care Tips</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
          <TipItem icon="🧼" text="Wash feet daily with lukewarm water" />
          <TipItem icon="💧" text="Apply moisturizer (avoid between toes)" />
          <TipItem icon="✂️" text="Trim nails straight across" />
          <TipItem icon="🧦" text="Wear clean, dry socks daily" />
        </div>
      </div>
    </div>
  );
}

function WarningCard({ title, description, severity }: any) {
  const colors = {
    high: { bg: "bg-[#FEE2E2]", border: "border-[#FCA5A5]", text: "text-[#EF4444]" },
    medium: { bg: "bg-[#FEF3C7]", border: "border-[#FCD34D]", text: "text-[#F59E0B]" },
  };
  const color = colors[severity as keyof typeof colors];

  return (
    <div className={`${color.bg} border ${color.border} rounded-xl p-3 flex items-start gap-3`}>
      <AlertCircle className={`w-5 h-5 ${color.text} flex-shrink-0 mt-0.5`} />
      <div className="flex-1">
        <h3 className={`${color.text} text-sm font-bold mb-0.5`}>{title}</h3>
        <p className={`${color.text}/70 text-xs`}>{description}</p>
      </div>
    </div>
  );
}

function TipItem({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <p className="text-[#1A2138] text-sm flex-1">{text}</p>
    </div>
  );
}
