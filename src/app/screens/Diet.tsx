import { ArrowLeft, Plus, Apple, Flame, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";

export function Diet() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F8FF] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#F59E0B] to-[#EA580C] px-5 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl font-extrabold flex-1">Diet & Nutrition</h1>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-5 h-5 text-[#F59E0B]" />
          </button>
        </div>
      </div>

      {/* Daily Stats */}
      <div className="px-4 -mt-3 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <StatBox label="Calories" value="1,240" max="1,800" color="text-[#F59E0B]" />
            <StatBox label="Carbs" value="142g" max="200g" color="text-[#6366F1]" />
            <StatBox label="Protein" value="58g" max="80g" color="text-[#22C55E]" />
          </div>
          <div className="h-2 bg-[#F0F4FF] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#F59E0B] to-[#22C55E] rounded-full" style={{ width: "69%" }} />
          </div>
          <p className="text-[#7B8EC8] text-xs mt-2 text-center">560 calories remaining today</p>
        </div>
      </div>

      {/* Today's Meals */}
      <div className="px-4 mb-6">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Today's Meals</h2>
        <div className="space-y-3">
          <MealCard
            meal="Breakfast"
            time="08:30 AM"
            items="Oatmeal, Banana, Almonds"
            calories={380}
            logged
            color="bg-[#FEF3C7]"
            iconColor="bg-[#F59E0B]"
            icon="🍳"
          />
          <MealCard
            meal="Mid-Morning Snack"
            time="11:00 AM"
            items="Apple, Walnuts"
            calories={150}
            logged
            color="bg-[#DCFCE7]"
            iconColor="bg-[#22C55E]"
            icon="🍎"
          />
          <MealCard
            meal="Lunch"
            time="01:00 PM"
            items="Not logged yet"
            calories={0}
            color="bg-[#F0F4FF]"
            iconColor="bg-[#7B8EC8]"
            icon="🍽️"
          />
          <MealCard
            meal="Dinner"
            time="07:30 PM"
            items="Not logged yet"
            calories={0}
            color="bg-[#F0F4FF]"
            iconColor="bg-[#7B8EC8]"
            icon="🌙"
          />
        </div>
      </div>

      {/* Recommended Foods */}
      <div className="px-4">
        <h2 className="text-[#1A2138] text-sm font-bold mb-3">Recommended for Diabetics</h2>
        <div className="grid grid-cols-2 gap-3">
          <FoodCard emoji="🥗" name="Leafy Greens" benefit="Low GI" />
          <FoodCard emoji="🥜" name="Nuts & Seeds" benefit="Healthy fats" />
          <FoodCard emoji="🐟" name="Fish" benefit="Omega-3" />
          <FoodCard emoji="🫐" name="Berries" benefit="Antioxidants" />
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, max, color }: any) {
  return (
    <div>
      <p className="text-[#7B8EC8] text-[10px] mb-1">{label}</p>
      <p className={`${color} text-lg font-extrabold`}>{value}</p>
      <p className="text-[#7B8EC8] text-[9px]">of {max}</p>
    </div>
  );
}

function MealCard({ meal, time, items, calories, logged, color, iconColor, icon }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className={`${iconColor} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-[#1A2138] text-sm font-bold">{meal}</h3>
            <span className="text-[#7B8EC8] text-xs">{time}</span>
          </div>
          <p className={`text-xs ${logged ? "text-[#1A2138]" : "text-[#7B8EC8]"}`}>{items}</p>
          {logged && (
            <div className="flex items-center gap-1 mt-2">
              <Flame className="w-3 h-3 text-[#F59E0B]" />
              <span className="text-[#F59E0B] text-xs font-semibold">{calories} cal</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FoodCard({ emoji, name, benefit }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-center">
      <div className="text-3xl mb-2">{emoji}</div>
      <h3 className="text-[#1A2138] text-xs font-bold mb-0.5">{name}</h3>
      <p className="text-[#22C55E] text-[10px] font-semibold">{benefit}</p>
    </div>
  );
}
