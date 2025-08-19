type HEPSummaryCardProps = {
  title: string;
  editedAgo: string;
  sessionsPerDay: number | string;
  totalReps: number | string;
  onEdit?: () => void;
  className?: string;
};

export default function HEPSummaryCard({
  title,
  editedAgo,
  sessionsPerDay,
  totalReps,
  onEdit,
  className = "",
}: HEPSummaryCardProps) {
  const interFontStyle = { fontFamily: "Inter, sans-serif" };

  return (
    <div
      className={`flex w-[790px] h-[135px] rounded-[10px] opacity-100 bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}
    >
      {/* Left content (title + stats) */}
      <div className="flex-1 flex flex-col py-4">
        {/* Row 1: Title (left) + Edited info (right) */}
        <div
          className="flex justify-between items-center mb-4"
          style={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <h3
            className="font-normal text-[18px] leading-[28px] tracking-[0px] text-black truncate"
            style={{ ...interFontStyle, fontWeight: 400 }}
          >
            {title}
          </h3>
          <div
            className="font-normal text-[12px] leading-[100%] tracking-[0%] text-center text-gray-500"
            style={interFontStyle}
          >
            Edited <span className="font-medium">{editedAgo}</span>
          </div>
        </div>

        {/* Row 2: Two-column layout with center-justified content */}
        <div
          className="flex-1 flex items-center"
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            marginBottom: "15px",
          }}
        >
          {/* Column 1: Sessions per Day - center justified */}
          <div className="flex-1 flex justify-center border-r border-[#DEE2E6]">
            <div className="text-center">
              <div
                className="font-normal text-[14px] leading-[200%] tracking-[0%] text-center text-[#6C757D]"
                style={interFontStyle}
              >
                Sessions per Day
              </div>
              <div
                className="font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-black"
                style={interFontStyle}
              >
                {sessionsPerDay}
              </div>
            </div>
          </div>

          {/* Column 2: Total Reps - center justified */}
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <div
                className="font-normal text-[14px] leading-[200%] tracking-[0%] text-center text-[#6C757D]"
                style={interFontStyle}
              >
                Total Reps
              </div>
              <div
                className="font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-black"
                style={interFontStyle}
              >
                {totalReps}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right action button */}
      <button
        onClick={onEdit}
        className="w-[150px] h-full flex items-center justify-center bg-[#E791D9] text-[16px] font-inter font-medium leading-[30px] tracking-[0%] text-center border-0 outline-none appearance-none cursor-pointer hover:brightness-110 hover:scale-105 hover:shadow-lg active:brightness-95 transition-all duration-200 ease-out"
        style={{ fontFamily: "Inter, sans-serif", color: "#FFFFFF" }}
      >
        Edit HEP
      </button>
    </div>
  );
}
