import { useState } from "react";

const PHASES = [
  {
    id: "phase1",
    label: "PHASE 1",
    subtitle: "CARDIO BASE",
    duration: "Week 1–2",
    days: 10,
    color: "#FF6B35",
    description: "Build aerobic base & movement habits. No gym needed — jogging, walking, bodyweight.",
    workouts: [
      {
        day: "Day 1",
        title: "Brisk Walk + Light Jog",
        duration: "50 min",
        type: "CARDIO",
        exercises: [
          { name: "Brisk Walk", detail: "40 min" },
          { name: "Light Jog Intervals", detail: "5 min × 2" },
          { name: "Cooldown Walk", detail: "5 min" },
        ],
      },
      {
        day: "Day 2",
        title: "Walk / Jog Intervals",
        duration: "50 min",
        type: "HIIT",
        exercises: [
          { name: "Warm-up Walk", detail: "5 min" },
          { name: "Jog 2 min / Walk 3 min", detail: "× 6 rounds" },
          { name: "Cooldown Walk", detail: "5 min" },
          { name: "Push-ups", detail: "3 × 10" },
          { name: "Bodyweight Lunges", detail: "3 × 12 each" },
        ],
      },
      {
        day: "Day 3",
        title: "Active Recovery",
        duration: "45 min",
        type: "RECOVERY",
        exercises: [
          { name: "Easy Walk", detail: "30 min" },
          { name: "Bodyweight Stretching", detail: "15 min" },
        ],
      },
      {
        day: "Day 4",
        title: "Jog Progression",
        duration: "50 min",
        type: "CARDIO",
        exercises: [
          { name: "Warm-up Walk", detail: "5 min" },
          { name: "Jog 3 min / Walk 2 min", detail: "× 6 rounds" },
          { name: "Cooldown Walk", detail: "5 min" },
          { name: "Plank Hold", detail: "3 × 30s" },
        ],
      },
      {
        day: "Day 5",
        title: "Long Brisk Walk",
        duration: "60 min",
        type: "CARDIO",
        exercises: [
          { name: "Brisk Walk (conversation pace)", detail: "50-60 min" },
          { name: "Dynamic Stretching", detail: "10 min" },
        ],
      },
      {
        day: "Day 6",
        title: "Run / Walk Intervals",
        duration: "50 min",
        type: "HIIT",
        exercises: [
          { name: "Warm-up Walk", detail: "5 min" },
          { name: "Jog 4 min / Walk 2 min", detail: "× 5 rounds" },
          { name: "Cooldown Walk", detail: "5 min" },
          { name: "Bodyweight Squats", detail: "3 × 15" },
        ],
      },
      {
        day: "Day 7",
        title: "REST DAY",
        duration: "—",
        type: "REST",
        exercises: [
          { name: "Complete Rest or Light Walk", detail: "Optional 20 min" },
          { name: "Stretching / Mobility", detail: "15 min" },
        ],
      },
      {
        day: "Day 8",
        title: "Jog Progression",
        duration: "50 min",
        type: "CARDIO",
        exercises: [
          { name: "Warm-up Walk", detail: "5 min" },
          { name: "Jog 5 min / Walk 2 min", detail: "× 4 rounds" },
          { name: "Cooldown Walk", detail: "5 min" },
          { name: "Push-ups", detail: "3 × 12" },
        ],
      },
      {
        day: "Day 9",
        title: "Sprint Intervals (Light)",
        duration: "50 min",
        type: "HIIT",
        exercises: [
          { name: "Warm-up Jog", detail: "5 min" },
          { name: "Fast Run 30s / Walk 90s", detail: "× 8 rounds" },
          { name: "Cooldown Jog", detail: "10 min" },
          { name: "Bodyweight Squats", detail: "3 × 20" },
        ],
      },
      {
        day: "Day 10",
        title: "Recovery + Bodyweight",
        duration: "45 min",
        type: "RECOVERY",
        exercises: [
          { name: "Easy Walk", detail: "20 min" },
          { name: "Push-ups", detail: "3 × 10" },
          { name: "Bodyweight Squats", detail: "3 × 15" },
          { name: "Plank Hold", detail: "3 × 30s" },
          { name: "Full Body Stretch", detail: "10 min" },
        ],
      },
    ],
  },
  {
    id: "phase2",
    label: "PHASE 2",
    subtitle: "MUSCLE BUILD",
    duration: "Week 3–8",
    days: 45,
    color: "#00D4AA",
    description: "PPL split × 2/week. Build strength foundation while cutting fat.",
    workouts: [
      {
        day: "PUSH A",
        title: "Chest, Shoulders, Triceps",
        duration: "90 min",
        type: "PUSH",
        exercises: [
          { name: "Barbell Bench Press", detail: "4 × 8-10" },
          { name: "Incline Dumbbell Press", detail: "3 × 10-12" },
          { name: "Machine Chest Fly", detail: "3 × 12-15" },
          { name: "Overhead Press (DB or BB)", detail: "4 × 8-10" },
          { name: "Lateral Raises", detail: "3 × 15-20" },
          { name: "Tricep Pushdowns", detail: "3 × 12-15" },
          { name: "Overhead Tricep Extension", detail: "3 × 12-15" },
          { name: "Post: Incline Treadmill Walk", detail: "20 min" },
        ],
      },
      {
        day: "PULL A",
        title: "Back, Biceps, Forearms",
        duration: "90 min",
        type: "PULL",
        exercises: [
          { name: "Lat Pulldown", detail: "4 × 8-12" },
          { name: "Seated Cable Row", detail: "4 × 10-12" },
          { name: "Dumbbell Row", detail: "3 × 10-12/arm" },
          { name: "Face Pulls", detail: "3 × 15-20" },
          { name: "Barbell Curl", detail: "3 × 10-12" },
          { name: "Hammer Curls", detail: "3 × 12-15" },
          { name: "Reverse Curls", detail: "2 × 15-20" },
          { name: "Post: Incline Treadmill Walk", detail: "20 min" },
        ],
      },
      {
        day: "LEGS A",
        title: "Quads, Hams, Glutes, Core",
        duration: "100 min",
        type: "LEGS",
        exercises: [
          { name: "Barbell Squat", detail: "4 × 8-10" },
          { name: "Romanian Deadlift", detail: "4 × 10-12" },
          { name: "Leg Press", detail: "3 × 12-15" },
          { name: "Walking Lunges", detail: "3 × 12/leg" },
          { name: "Leg Curl (machine)", detail: "3 × 12-15" },
          { name: "Calf Raises (standing)", detail: "4 × 15-20" },
          { name: "Plank Hold", detail: "3 × 45-60s" },
          { name: "Post: Light Cardio", detail: "15 min" },
        ],
      },
      {
        day: "PUSH B",
        title: "Hypertrophy Push",
        duration: "90 min",
        type: "PUSH",
        exercises: [
          { name: "Dumbbell Bench Press", detail: "4 × 10-14" },
          { name: "Machine Chest Press", detail: "3 × 12-15" },
          { name: "Arnold Press", detail: "3 × 12-14" },
          { name: "Cable Flyes", detail: "3 × 15 + drop" },
          { name: "Lateral Raises (slow eccentric)", detail: "4 × 15-20" },
          { name: "Dips", detail: "3 × 8-12" },
          { name: "Skull Crushers", detail: "3 × 12-15" },
          { name: "Post: Incline Walk", detail: "20 min" },
        ],
      },
      {
        day: "PULL B",
        title: "Hypertrophy Pull",
        duration: "90 min",
        type: "PULL",
        exercises: [
          { name: "Pull-ups / Assisted", detail: "4 × 6-10" },
          { name: "Single-arm DB Row", detail: "3 × 12-14/arm" },
          { name: "Cable Pullover", detail: "3 × 12-15" },
          { name: "Rear Delt Flyes", detail: "3 × 15-20" },
          { name: "Preacher Curls", detail: "3 × 12-15" },
          { name: "Incline DB Curls (slow)", detail: "3 × 12" },
          { name: "Wrist Curls", detail: "2 × 15-20" },
          { name: "Post: Incline Walk", detail: "20 min" },
        ],
      },
      {
        day: "LEGS B",
        title: "Hamstring & Power Focus",
        duration: "100 min",
        type: "LEGS",
        exercises: [
          { name: "Front Squat", detail: "4 × 8-10" },
          { name: "Romanian Deadlift", detail: "4 × 10-12" },
          { name: "Bulgarian Split Squats", detail: "3 × 10/leg" },
          { name: "Leg Extension", detail: "3 × 15 + drop" },
          { name: "Leg Curl (lying)", detail: "4 × 10-12" },
          { name: "Calf Raises (seated)", detail: "4 × 15-20" },
          { name: "Hanging Leg Raises", detail: "3 × 12" },
          { name: "Post: HIIT Bike", detail: "15 min" },
        ],
      },
    ],
  },
  {
    id: "phase3",
    label: "PHASE 3",
    subtitle: "SHRED MODE",
    duration: "Week 9–14",
    days: 60,
    color: "#FF2D55",
    description: "Higher volume, more cardio, intensified training for final cut to target.",
    workouts: [
      {
        day: "PUSH",
        title: "Volume Push + HIIT",
        duration: "110 min",
        type: "PUSH",
        exercises: [
          { name: "Incline Barbell Bench", detail: "4 × 8-10" },
          { name: "Flat DB Press (pause reps)", detail: "4 × 10-12" },
          { name: "Standing OHP", detail: "4 × 8-10" },
          { name: "Cable Flyes (low-to-high)", detail: "3 × 12-15" },
          { name: "Lateral Raise (drop sets)", detail: "3 × 12+8+6" },
          { name: "Tricep Dips (weighted)", detail: "3 × 10-12" },
          { name: "Rope Pushdowns", detail: "3 × 15" },
          { name: "Superset: Front Raise + Rear Delt", detail: "3 × 12 each" },
          { name: "HIIT Cardio Finisher", detail: "20 min" },
        ],
      },
      {
        day: "PULL",
        title: "Volume Pull + HIIT",
        duration: "110 min",
        type: "PULL",
        exercises: [
          { name: "Weighted Pull-ups", detail: "4 × 6-8" },
          { name: "Pendlay Row", detail: "4 × 8-10" },
          { name: "Lat Pulldown (close grip)", detail: "3 × 10-12" },
          { name: "Cable Row (wide grip)", detail: "3 × 12" },
          { name: "Face Pulls (superset w/ band)", detail: "4 × 15" },
          { name: "Barbell Curl (21s method)", detail: "3 sets" },
          { name: "Concentration Curls", detail: "3 × 10 each" },
          { name: "Reverse Curls", detail: "3 × 12" },
          { name: "Stairmaster Finisher", detail: "20 min" },
        ],
      },
      {
        day: "LEGS",
        title: "Volume Legs + Cardio",
        duration: "120 min",
        type: "LEGS",
        exercises: [
          { name: "Barbell Squat", detail: "5 × 6-8 (heavy)" },
          { name: "Romanian Deadlift", detail: "4 × 8-10" },
          { name: "Hack Squat", detail: "3 × 10-12" },
          { name: "Leg Curl ↔ Extension superset", detail: "4 × 12 each" },
          { name: "Walking Lunges", detail: "3 × 15 each" },
          { name: "Hip Thrusts", detail: "3 × 12" },
          { name: "Calf Raises (standing + seated)", detail: "4 × 15 each" },
          { name: "Incline Walk", detail: "15 min" },
        ],
      },
      {
        day: "UPPER",
        title: "Upper Body Pump Day",
        duration: "90 min",
        type: "PUSH",
        exercises: [
          { name: "Superset: DB Press + DB Row", detail: "4 × 10 each" },
          { name: "Superset: Cable Fly + Face Pull", detail: "3 × 12 each" },
          { name: "Superset: Lat Raise + Curl", detail: "3 × 12 each" },
          { name: "Superset: Dips + Pull-ups", detail: "3 × max" },
          { name: "Giant Set: Tri / Bi / Shoulder", detail: "3 rounds" },
          { name: "Ab Circuit", detail: "15 min" },
          { name: "HIIT Bike", detail: "15 min" },
        ],
      },
      {
        day: "CARDIO",
        title: "Dedicated Cardio + Core",
        duration: "60 min",
        type: "HIIT",
        exercises: [
          { name: "Warm-up Jog", detail: "10 min" },
          { name: "Sprint 30s / Walk 60s", detail: "× 10 rounds" },
          { name: "Stairmaster (moderate)", detail: "15 min" },
          { name: "Core Circuit (plank, crunches, leg raises)", detail: "15 min" },
        ],
      },
      {
        day: "WEAK POINT",
        title: "Focus on Lagging Muscles",
        duration: "90 min",
        type: "PULL",
        exercises: [
          { name: "Pick 2 lagging body parts", detail: "4-5 exercises each" },
          { name: "Higher rep ranges", detail: "12-20 reps" },
          { name: "Mind-muscle connection focus", detail: "Controlled tempo" },
          { name: "Steady State Cardio", detail: "20 min" },
        ],
      },
    ],
  },
];

const TYPE_COLORS = {
  CARDIO: { bg: "#FF6B3515", border: "#FF6B35", text: "#FF6B35" },
  HIIT: { bg: "#FF2D5515", border: "#FF2D55", text: "#FF2D55" },
  RECOVERY: { bg: "#8E8E9315", border: "#8E8E93", text: "#8E8E93" },
  REST: { bg: "#48484A", border: "#636366", text: "#AEAEB2" },
  PUSH: { bg: "#5E5CE615", border: "#5E5CE6", text: "#5E5CE6" },
  PULL: { bg: "#00D4AA15", border: "#00D4AA", text: "#00D4AA" },
  LEGS: { bg: "#FF9F0A15", border: "#FF9F0A", text: "#FF9F0A" },
};

const NUTRITION = {
  calories: "1,900-2,100",
  protein: "160-180g",
  carbs: "150-180g",
  fats: "55-65g",
  water: "3.5-4L",
};

const WEEKLY_SCHEDULES = {
  phase2: [
    { day: "Mon", workout: "PUSH A", type: "PUSH" },
    { day: "Tue", workout: "PULL A", type: "PULL" },
    { day: "Wed", workout: "LEGS A", type: "LEGS" },
    { day: "Thu", workout: "PUSH B", type: "PUSH" },
    { day: "Fri", workout: "PULL B", type: "PULL" },
    { day: "Sat", workout: "LEGS B", type: "LEGS" },
    { day: "Sun", workout: "REST", type: "RECOVERY" },
  ],
  phase3: [
    { day: "Mon", workout: "PUSH", type: "PUSH" },
    { day: "Tue", workout: "PULL", type: "PULL" },
    { day: "Wed", workout: "LEGS", type: "LEGS" },
    { day: "Thu", workout: "UPPER", type: "PUSH" },
    { day: "Fri", workout: "CARDIO", type: "HIIT" },
    { day: "Sat", workout: "WEAK PT", type: "PULL" },
    { day: "Sun", workout: "REST", type: "RECOVERY" },
  ],
};

const SUPPLEMENTS = [
  { name: "Whey Protein", dose: "1-2 scoops/day", why: "Hit 160g+ protein" },
  { name: "Creatine", dose: "5g daily", why: "Strength & recovery" },
  { name: "Calcium Citrate", dose: "500-600mg", why: "Deficiency history" },
  { name: "Multivitamin", dose: "1 tab/morning", why: "Micronutrient base" },
  { name: "Fish Oil", dose: "1-2g daily", why: "Joint health" },
  { name: "Vitamin D3", dose: "2000-4000 IU", why: "Calcium absorption & T" },
  { name: "Electrolytes", dose: "During workouts", why: "Chennai heat" },
];

const MILESTONES = [
  { label: "START", weight: "100kg", date: "Week 1", color: "#FF6B35" },
  { label: "GYM START", weight: "~97kg", date: "Week 3", color: "#00D4AA" },
  { label: "HALFWAY", weight: "~92kg", date: "Week 8", color: "#5E5CE6" },
  { label: "TARGET", weight: "85kg", date: "Week 14", color: "#FF2D55" },
];

export default function WorkoutPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [activePanel, setActivePanel] = useState(null);

  const phase = PHASES[activePhase];
  const workout = phase.workouts[activeDay];
  const typeStyle = TYPE_COLORS[workout.type] || TYPE_COLORS.CARDIO;

  const togglePanel = (panel) => setActivePanel(activePanel === panel ? null : panel);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', -apple-system, sans-serif",
        background: "#08080C",
        color: "#F5F5F7",
        minHeight: "100vh",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* ═══ HEADER ═══ */}
      <div
        style={{
          padding: "24px 20px 18px",
          borderBottom: "1px solid #1A1A1F",
          background: "linear-gradient(180deg, #0D0D12 0%, #08080C 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)`,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              color: phase.color,
              fontWeight: 700,
            }}
          >
            RECOMP PROTOCOL
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#3A3A3F",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            ///
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#48484A",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            100→85kg
          </span>
        </div>

        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            margin: "2px 0 14px",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "#F5F5F7" }}>14-Week </span>
          <span style={{ color: phase.color }}>Transformation</span>
        </h1>

        {/* Stats Row */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {[
            { label: "DURATION", value: "14 Weeks" },
            { label: "GOAL", value: "−15 kg" },
            { label: "BMI", value: "32→27" },
            { label: "SPLIT", value: "PPL × 2" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#48484A",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#E5E5EA" }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ PHASE TABS ═══ */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #1A1A1F",
        }}
      >
        {PHASES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePhase(i);
              setActiveDay(0);
            }}
            style={{
              flex: 1,
              padding: "14px 6px 12px",
              background: activePhase === i ? `${p.color}08` : "transparent",
              border: "none",
              borderBottom: activePhase === i
                ? `2px solid ${p.color}`
                : "2px solid transparent",
              color: activePhase === i ? p.color : "#48484A",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2.5px",
                fontWeight: 700,
              }}
            >
              {p.label}
            </div>
            <div style={{ fontSize: "11px", marginTop: "3px", fontWeight: 600 }}>
              {p.subtitle}
            </div>
          </button>
        ))}
      </div>

      {/* ═══ PHASE INFO + TOGGLE BUTTONS ═══ */}
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid #1A1A1F",
        }}
      >
        <div style={{ fontSize: "13px", color: "#8E8E93", lineHeight: 1.5, marginBottom: "10px" }}>
          {phase.description}
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            { key: "macros", label: "MACROS", icon: "⚡" },
            { key: "supps", label: "SUPPLEMENTS", icon: "💊" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => togglePanel(btn.key)}
              style={{
                padding: "5px 12px",
                background: activePanel === btn.key ? `${phase.color}15` : "#141418",
                border: `1px solid ${activePanel === btn.key ? phase.color + "60" : "#1F1F24"}`,
                borderRadius: "20px",
                color: activePanel === btn.key ? phase.color : "#8E8E93",
                fontSize: "11px",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "1.5px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ MACROS PANEL ═══ */}
      {activePanel === "macros" && (
        <div
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid #1A1A1F",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: "8px",
          }}
        >
          {Object.entries(NUTRITION).map(([key, val]) => (
            <div
              key={key}
              style={{
                padding: "10px 12px",
                background: "#0F0F14",
                borderRadius: "10px",
                border: "1px solid #1A1A1F",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: phase.color,
                  textTransform: "uppercase",
                  marginBottom: "4px",
                  fontWeight: 700,
                }}
              >
                {key}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>{val}</div>
            </div>
          ))}
        </div>
      )}

      {/* ═══ SUPPLEMENTS PANEL ═══ */}
      {activePanel === "supps" && (
        <div
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid #1A1A1F",
          }}
        >
          {SUPPLEMENTS.map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: i < SUPPLEMENTS.length - 1 ? "1px solid #1A1A1F" : "none",
              }}
            >
              <div>
                <span style={{ fontSize: "14px", fontWeight: 600 }}>{s.name}</span>
                <span style={{ fontSize: "12px", color: "#636366", marginLeft: "8px" }}>
                  {s.why}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: phase.color,
                  fontWeight: 600,
                }}
              >
                {s.dose}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: "10px",
              padding: "10px 12px",
              background: "#0F0F14",
              borderRadius: "8px",
              border: "1px solid #1A1A1F",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#FF9F0A",
                marginBottom: "6px",
                fontWeight: 700,
              }}
            >
              TIMING
            </div>
            <div style={{ fontSize: "11px", color: "#8E8E93", lineHeight: 1.7 }}>
              <span style={{ color: "#E5E5EA", fontWeight: 600 }}>AM:</span> Multivitamin + Creatine + Fish Oil with breakfast
              <br />
              <span style={{ color: "#E5E5EA", fontWeight: 600 }}>PRE:</span> Whey + banana 30 min before workout
              <br />
              <span style={{ color: "#E5E5EA", fontWeight: 600 }}>PM:</span> Calcium + D3 with dinner (don't mix with multivitamin)
            </div>
          </div>
        </div>
      )}

      {/* ═══ WEEKLY ROTATION (Phase 2 & 3) ═══ */}
      {activePhase > 0 && (
        <div
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid #1A1A1F",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: "#48484A",
              marginBottom: "8px",
              fontWeight: 700,
            }}
          >
            WEEKLY ROTATION
          </div>
          <div style={{ display: "flex", gap: "5px", minWidth: "max-content" }}>
            {(activePhase === 1 ? WEEKLY_SCHEDULES.phase2 : WEEKLY_SCHEDULES.phase3).map((d) => {
              const tc = TYPE_COLORS[d.type];
              return (
                <div
                  key={d.day}
                  style={{
                    padding: "6px 10px",
                    background: tc.bg,
                    border: `1px solid ${tc.border}25`,
                    borderRadius: "8px",
                    minWidth: "76px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: tc.text,
                      marginBottom: "2px",
                    }}
                  >
                    {d.day}
                  </div>
                  <div style={{ fontSize: "9px", color: "#8E8E93", fontWeight: 500 }}>
                    {d.workout}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══ DAY SELECTOR ═══ */}
      <div
        style={{
          padding: "12px 20px",
          overflowX: "auto",
          borderBottom: "1px solid #1A1A1F",
        }}
      >
        <div style={{ display: "flex", gap: "6px", minWidth: "max-content" }}>
          {phase.workouts.map((w, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              style={{
                padding: "7px 14px",
                background: activeDay === i ? phase.color : "#111116",
                border: activeDay === i ? "none" : "1px solid #1F1F24",
                borderRadius: "8px",
                color: activeDay === i ? "#000" : "#8E8E93",
                fontSize: "12px",
                fontWeight: activeDay === i ? 700 : 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {w.day}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ WORKOUT CARD ═══ */}
      <div style={{ padding: "16px 20px" }}>
        <div
          style={{
            background: "#111116",
            borderRadius: "14px",
            border: `1px solid ${typeStyle.border}20`,
            overflow: "hidden",
          }}
        >
          {/* Card Header */}
          <div
            style={{
              padding: "18px 18px 14px",
              borderBottom: "1px solid #1A1A1F",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "2px 10px",
                  background: typeStyle.bg,
                  border: `1px solid ${typeStyle.border}35`,
                  borderRadius: "20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "2.5px",
                  color: typeStyle.text,
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {workout.type}
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  margin: "4px 0 0",
                  letterSpacing: "-0.3px",
                  lineHeight: 1.2,
                }}
              >
                {workout.title}
              </h2>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                  color: phase.color,
                  lineHeight: 1,
                }}
              >
                {workout.duration}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  color: "#48484A",
                  letterSpacing: "2px",
                  fontFamily: "'JetBrains Mono', monospace",
                  marginTop: "4px",
                }}
              >
                DURATION
              </div>
            </div>
          </div>

          {/* Exercise List */}
          <div style={{ padding: "4px 0" }}>
            {workout.exercises.map((ex, i) => (
              <div
                key={i}
                style={{
                  padding: "11px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom:
                    i < workout.exercises.length - 1 ? "1px solid #1A1A1F50" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#3A3A3F",
                      width: "18px",
                      fontWeight: 500,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "#E5E5EA" }}>
                    {ex.name}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: phase.color,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    marginLeft: "12px",
                  }}
                >
                  {ex.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ KEY NOTES ═══ */}
        <div
          style={{
            marginTop: "12px",
            padding: "14px 16px",
            background: "#111116",
            borderRadius: "12px",
            border: "1px solid #1A1A1F",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: phase.color,
              marginBottom: "10px",
              fontWeight: 700,
            }}
          >
            KEY NOTES
          </div>
          <div style={{ fontSize: "12px", color: "#8E8E93", lineHeight: 1.7 }}>
            {activePhase === 0 ? (
              <>
                <p style={{ margin: "0 0 5px" }}>
                  → Run early morning or evening to avoid Chennai heat. Hydrate 3.5L+ daily.
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → At 100kg, prioritize low-impact surfaces. Get proper running shoes (Asics/Nike).
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → If any jog segment is too hard, drop to brisk walk. Consistency over speed.
                </p>
                <p style={{ margin: "0" }}>
                  → Start the nutrition plan immediately. The deficit does 70% of the work.
                </p>
              </>
            ) : activePhase === 1 ? (
              <>
                <p style={{ margin: "0 0 5px" }}>
                  → Progressive overload: increase weight 2.5-5kg when you hit top of rep range for all sets.
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → Rest 90-120s for compounds, 45-60s for isolation.
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → Post-workout incline walk (10-12% grade, 5.5-6.5 km/h) is non-negotiable.
                </p>
                <p style={{ margin: "0" }}>
                  → Weigh daily (morning, fasted). Track the weekly average, not daily swings.
                </p>
              </>
            ) : (
              <>
                <p style={{ margin: "0 0 5px" }}>
                  → Drop sets and supersets increase intensity — keep rest periods tight (45-60s).
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → If weight loss stalls, add 10 min cardio OR reduce carbs 25g. Don't crash diet.
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  → This phase is high volume — sleep 7-8 hrs minimum. Injuries derail everything.
                </p>
                <p style={{ margin: "0" }}>
                  → Target ~0.75-1kg loss/week. Trust the mirror and measurements over the scale.
                </p>
              </>
            )}
          </div>
        </div>

        {/* ═══ WEIGHT MILESTONES ═══ */}
        <div
          style={{
            marginTop: "12px",
            padding: "14px 16px",
            background: "#111116",
            borderRadius: "12px",
            border: "1px solid #1A1A1F",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: "#48484A",
              marginBottom: "14px",
              fontWeight: 700,
            }}
          >
            WEIGHT MILESTONES
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {MILESTONES.map((m, i, arr) => (
              <div
                key={m.label}
                style={{
                  flex: 1,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: m.color,
                    margin: "0 auto 8px",
                    boxShadow: `0 0 10px ${m.color}50`,
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                {i < arr.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "4px",
                      left: "50%",
                      width: "100%",
                      height: "2px",
                      background: `linear-gradient(90deg, ${m.color}80, ${arr[i + 1].color}80)`,
                      opacity: 0.25,
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: m.color,
                  }}
                >
                  {m.weight}
                </div>
                <div style={{ fontSize: "11px", color: "#636366", marginTop: "2px" }}>
                  {m.date}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                    color: "#3A3A3F",
                    marginTop: "2px",
                    fontWeight: 700,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ PITFALLS ═══ */}
        <div
          style={{
            marginTop: "12px",
            padding: "14px 16px",
            background: "#111116",
            borderRadius: "12px",
            border: "1px solid #1A1A1F",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "2.5px",
              color: "#FF2D55",
              marginBottom: "10px",
              fontWeight: 700,
            }}
          >
            DON'T FUCK THIS UP
          </div>
          <div style={{ fontSize: "12px", color: "#8E8E93", lineHeight: 1.7 }}>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>01</span> &nbsp;Don't ego
              lift. You're 100kg and deconditioned. Start lighter than you think.
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>02</span> &nbsp;160g protein.
              Every. Single. Day. No excuses.
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>03</span> &nbsp;Don't obsess
              over the scale. During recomp, trust the mirror and tape measure.
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>04</span> &nbsp;Never skip
              leg day. Biggest muscle group = most calories burned.
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>05</span> &nbsp;One bad
              weekend can undo a week's deficit. Plan your social meals.
            </p>
            <p style={{ margin: "0 0 4px" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>06</span> &nbsp;4L water
              minimum. Chennai heat + training = dehydration kills performance.
            </p>
            <p style={{ margin: "0" }}>
              <span style={{ color: "#FF2D55", fontWeight: 700 }}>07</span> &nbsp;Don't
              compare Day 1 to someone else's Year 3. Show up. Do the work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
