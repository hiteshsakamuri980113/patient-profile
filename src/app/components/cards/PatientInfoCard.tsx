import EditButton from "../../../assets/edit-button.png";

interface InfoCardProps {
  phone: string;
  email: string;
  injuryLocation: string;
  diagnosis: string;
  onEdit?: () => void;
  showEditButton?: boolean;
  className?: string;
}

export default function PatientInfoCard({
  phone,
  email,
  injuryLocation,
  diagnosis,
  onEdit,
  showEditButton = true,
  className = "",
}: InfoCardProps) {
  //consistent styles for typography
  const headerStyle = { fontFamily: "Inter, sans-serif" };
  const valueStyle = { fontFamily: "Inter, sans-serif", marginTop: "4px" };

  return (
    <div
      className={`flex items-center gap-3 opacity-100 pr-5 pl-2.5 w-[741px] h-[121px] ${className}`}
    >
      {/* Outer container */}
      <div className="w-[654px] h-[121px] border border-[#DEE2E6] rounded-[10px]">
        {/* Inner card content */}
        <div
          className="
            bg-white
            shadow-[0_2px_6px_rgba(16,24,40,0.06)]
            w-full h-full
          "
        >
          {/* 2x2 Grid Layout: 2 rows, 2 columns with custom widths */}
          <div
            className="grid h-full"
            style={{ gridTemplateColumns: "33% 67%" }}
          >
            {/* Row 1, Column 1: Phone */}
            <div
              className="flex flex-col justify-start"
              style={{
                paddingTop: "16px",
                paddingLeft: "16px",
                paddingBottom: "8px",
              }}
            >
              <div
                className="font-normal text-[14px] leading-6 text-[#6C757D]"
                style={headerStyle}
              >
                Phone:
              </div>
              <div
                className="font-medium text-[14px] leading-none text-black"
                style={valueStyle}
              >
                {phone}
              </div>
            </div>

            {/* Row 1, Column 2: Email */}
            <div
              className="flex flex-col justify-start"
              style={{
                paddingTop: "16px",
                paddingRight: "16px",
                paddingBottom: "8px",
              }}
            >
              <div
                className="font-normal text-[14px] leading-6 text-[#6C757D]"
                style={headerStyle}
              >
                Email:
              </div>
              <div
                className="font-medium text-[14px] leading-none text-black break-all"
                style={valueStyle}
              >
                {email}
              </div>
            </div>

            {/* Row 2, Column 1: Injury Location */}
            <div
              className="flex flex-col justify-start"
              style={{
                paddingTop: "8px",
                paddingLeft: "16px",
                paddingBottom: "16px",
              }}
            >
              <div
                className="font-normal text-[14px] leading-6 text-[#6C757D]"
                style={headerStyle}
              >
                Injury Location:
              </div>
              <div
                className="font-medium text-[14px] leading-none text-black"
                style={valueStyle}
              >
                {injuryLocation}
              </div>
            </div>

            {/* Row 2, Column 2: Diagnosis */}
            <div
              className="flex flex-col justify-start"
              style={{
                paddingTop: "8px",
                paddingRight: "16px",
                paddingBottom: "16px",
              }}
            >
              <div
                className="font-normal text-[14px] leading-6 text-[#6C757D]"
                style={headerStyle}
              >
                Diagnosis:
              </div>
              <div
                className="font-medium text-[14px] leading-none text-black"
                style={valueStyle}
              >
                {diagnosis}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* edit button */}
      {showEditButton && (
        <button
          aria-label="Edit"
          onClick={onEdit}
          className="ml-8 border-0 bg-transparent p-0 m-0 cursor-pointer outline-none appearance-none"
        >
          <img src={EditButton} alt="Edit" className="block" />
        </button>
      )}
    </div>
  );
}
