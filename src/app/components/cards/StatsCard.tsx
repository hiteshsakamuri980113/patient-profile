type StatsCardProps = {
  title?: string;
  periodLabel?: string;
  streakCount?: number;
  weeksEnrolled?: number | string;
  compliance?: string;
  activeDayIndex?: number;
  onViewStats?: () => void;
  className?: string;
};

const DAY_LABELS = ["Wed", "Thru", "Fri", "Sat", "Sun", "Mon", "Today"];

export default function StatsCard({
  periodLabel = "for Period 3",
  streakCount = 1,
  weeksEnrolled = 9,
  compliance = "16/30",
  onViewStats,
  className = "",
}: StatsCardProps) {
  const interFontStyle = { fontFamily: "Inter" };

  return (
    <div
      className={[
        "w-[407px] h-[198px]",
        "bg-white rounded-[12px] border border-[#E5E7EB] overflow-hidden",
        "shadow-[0_1px_2px_rgba(16,24,40,0.04)]",
        "flex",
        className,
      ].join(" ")}
      aria-label="Period stats card"
      role="region"
    >
      {/* LEFT pane */}
      <div className="flex-1 h-full p-6 flex items-center">
        <div
          className="w-full flex flex-col justify-between max-w-[215px] mx-auto"
          style={{ height: "calc(100% - 32px)" }}
        >
          {/* Row 1: Stats title (left) + Streaks (right) */}
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <div
                className="text-[18px] leading-[28px] font-normal text-black"
                style={interFontStyle}
              >
                Stats
              </div>
              <div
                className="mt-0.5 text-[12px] leading-[24px] font-normal text-[#6C757D]"
                style={interFontStyle}
              >
                {periodLabel}
              </div>
            </div>
            <div className="text-right select-none">
              <div
                className="text-[18px] leading-[28px] font-normal text-black"
                style={interFontStyle}
              >
                Streaks
              </div>
              <div className="flex items-center justify-center">
                <span
                  className="text-[12px] leading-[24px] font-normal text-[#6C757D]"
                  style={interFontStyle}
                >
                  {streakCount}
                </span>
                <img
                  src="/src/assets/fire-icon.png"
                  alt="Fire icon"
                  className="w-3 h-3"
                  style={{ marginLeft: "8px" }}
                />
              </div>
            </div>
          </div>

          {/* Row 2: 7-day grid with icons and day labels - spread across width */}
          <div className="flex flex-col items-center justify-center">
            {/* Day columns with images and borders */}
            <div className="grid grid-cols-7 w-full mb-2">
              {DAY_LABELS.map((day, i) => {
                const isSaturday = day === "Sat";
                const imageSrc = isSaturday
                  ? "/src/assets/task_alt.png"
                  : "/src/assets/motion_photos_on.png";
                const isLastColumn = i === DAY_LABELS.length - 1;

                return (
                  <div
                    key={i}
                    className={[
                      "flex flex-col items-center justify-center py-3 px-2",
                      !isLastColumn ? "border-r border-[#F8F9FA]" : "",
                    ].join(" ")}
                  >
                    <img
                      src={imageSrc}
                      alt={isSaturday ? "Task completed" : "Motion photo"}
                      className="w-5 h-5 mb-2"
                    />
                    <div
                      className="text-[10px] leading-[18px] font-normal text-center text-[#6C757D]"
                      style={interFontStyle}
                    >
                      {day}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3: Weeks Enrolled (left) + Compliance (right) */}
          <div className="flex items-center justify-between">
            <div className="text-center flex-1 border-r border-[#DEE2E6] pr-3">
              <div
                className="text-[12px] leading-[24px] font-normal text-[#6C757D]"
                style={interFontStyle}
              >
                Weeks Enrolled
              </div>
              <div
                className="mt-1 text-[18px] leading-[28px] font-normal text-black"
                style={interFontStyle}
              >
                {weeksEnrolled}
              </div>
            </div>

            <div className="text-center flex-1 pl-3">
              <div
                className="text-[12px] leading-[24px] font-normal text-[#6C757D]"
                style={interFontStyle}
              >
                Compliance
              </div>
              <div
                className="mt-1 text-[18px] leading-[28px] font-normal text-black"
                style={interFontStyle}
              >
                {compliance}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT action pane */}
      <button
        type="button"
        onClick={onViewStats}
        className="
          w-[168px] h-full
          bg-[#EEA63A] text-white
          text-[16px] font-medium leading-[30px]
          flex items-center justify-center text-center
          border-0 outline-none appearance-none cursor-pointer
          hover:brightness-110 hover:scale-105 hover:shadow-lg active:brightness-95 transition-all duration-200 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
        "
        style={{ ...interFontStyle, fontWeight: 500, color: "#FFFFFF" }}
        aria-label="View Stats"
      >
        View Stats
      </button>
    </div>
  );
}
