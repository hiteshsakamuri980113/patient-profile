import edImage from "../../../assets/ed-image.png";

type PatientEducationCardProps = {
  className?: string;
  imageSrc?: string;
};

export default function PatientEducationCard({
  className = "",
}: PatientEducationCardProps) {
  const interFontStyle = { fontFamily: "Inter, sans-serif" };

  return (
    <div
      className={`w-[750px] h-[245px] rounded-[10px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] ${className}`}
      style={{
        padding: "14px 19px",
        opacity: 1,
      }}
    >
      <div className="h-full" style={{ margin: "10px" }}>
        <div>
          <div
            className="font-normal text-[18px] leading-none text-black m-0"
            style={{ ...interFontStyle, margin: 0, fontWeight: 400 }}
          >
            Patient Education
          </div>
          <hr className="border-t border-[#DEE2E6] w-full mt-1" />
        </div>

        <div className="mb-6">
          <p
            className="font-normal text-[16px] leading-none text-[#6C757D] mt-1"
            style={interFontStyle}
          >
            Coming soon
          </p>
        </div>

        {/*image */}
        <div className="flex justify-center items-center flex-1">
          <img
            src={edImage}
            alt="Patient Education"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
