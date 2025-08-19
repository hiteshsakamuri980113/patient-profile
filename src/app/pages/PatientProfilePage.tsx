import AppLayout from "../layout/AppLayout";
import PatientInfoCard from "../components/cards/PatientInfoCard";
import HEPSummaryCard from "../components/cards/HEPSummaryCard";
import PatientEducationCard from "../components/cards/PatientEducationCard";
import StatsCard from "../components/cards/StatsCard";
import BillingButton from "../components/BillingButton";
import ChecklistButton from "../components/ChecklistButton";

export default function PatientProfilePage() {
  return (
    <AppLayout>
      {/* Container for the entire patient profile section */}
      <div className="w-[1300px] h-[175px] bg-white border border-[#E4E4E4] shadow-[0px_1px_4px_0px_#00000040] px-[31px] py-[12px]">
        {/* 1. Breadcrumb Element - Separate top element */}
        <div
          className="flex items-center gap-1.5 text-xs font-semibold"
          style={{
            height: "15px",
            fontFamily: "Inter",
            lineHeight: "100%",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          <span
            className="cursor-pointer font-semibold"
            style={{ color: "#4D4482" }}
          >
            Dashboard
          </span>
          <span className="font-medium" style={{ color: "#4D4482" }}>
            &nbsp;/&nbsp;Wimtach Client
          </span>
        </div>

        {/* 2. Main Content Container with two sections */}
        <div
          className="grid items-start"
          style={{
            gridTemplateColumns: "minmax(0,1fr) 720px",
            gap: "14.5px",
            height: "calc(100% - 27px)", // Remaining height after breadcrumb
          }}
        >
          {/* Left Section: Group 1 image + Content */}
          <div className="flex items-start">
            {/* Group 1 Image */}
            <div style={{ marginRight: "16px" }}>
              <img
                src="/Group 1.png"
                alt="Patient Avatar"
                className="w-auto h-auto"
              />
            </div>

            {/* Content: h1, Last Active, Button --- Using inline styles for better accuracy */}
            <div>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "28px",
                  letterSpacing: "0.4px",
                  color: "#000000",
                  margin: "0",
                  padding: "0",
                }}
              >
                Wimtach Client
              </h1>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  color: "#6C757D",
                  textAlign: "center",
                  margin: "0",
                  padding: "0",
                }}
              >
                Last Active: Aug 19, 2025 17:30
              </p>
              <button
                className="hover:scale-105 hover:shadow-lg hover:bg-[#7a4fb8] transition-all duration-200 ease-out"
                style={{
                  width: "143px",
                  height: "36px",
                  borderRadius: "10px",
                  padding: "6px 12px",
                  background: "#845EC0",
                  fontSize: "14px",
                  color: "white",
                  border: "none",
                  fontWeight: 500,
                  fontFamily: "Inter",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
              >
                Discharge Patient
              </button>
            </div>
          </div>

          {/* Right Section: PatientInfoCard */}
          <div className="hover:scale-[1.005] hover:shadow-md transition-all duration-300 ease-out">
            <PatientInfoCard
              phone="(555) 555-5555"
              email="wimtachclient@hotmail.com"
              injuryLocation="Right"
              diagnosis="Other specified malignant neoplasm of skin, unspecified - C4499"
              onEdit={() => {}}
            />
          </div>
        </div>
      </div>
      {/* Two-column layout: Left (HEP + Education cards) | Right (Stats + other cards) */}
      <div
        style={{
          margin: "20px 25px",
          display: "grid",
          gridTemplateColumns: "750px 1fr",
          gap: "120px",
        }}
      >
        {/* Left Column: HEP and Education cards stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="hover:scale-[1.005] hover:shadow-md transition-all duration-300 ease-out">
            <HEPSummaryCard
              title="New HEP for Wimtach Client"
              editedAgo="16 hours ago"
              sessionsPerDay={5}
              totalReps={254}
              onEdit={() => console.log("Edit HEP")}
            />
          </div>
          <div className="hover:scale-[1.005] hover:shadow-md transition-all duration-300 ease-out">
            <PatientEducationCard />
          </div>
        </div>

        {/* Right Column: Stats and other items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="hover:scale-[1.005] hover:shadow-md transition-all duration-300 ease-out">
            <StatsCard
              periodLabel="for Period 3"
              streakCount={1}
              weeksEnrolled={9}
              compliance="16/30"
              activeDayIndex={3}
              onViewStats={() => console.log("View Stats")}
            />
          </div>
          <BillingButton />
          <ChecklistButton />
        </div>
      </div>

      {/* Background Vector Images */}
      <img
        src="/Vector1.png"
        alt=""
        className="absolute opacity-20 pointer-events-none"
        style={{
          top: "655px",
          left: "104px",
          zIndex: -1,
        }}
      />
      <img
        src="/Vector2.png"
        alt=""
        className="absolute opacity-5 pointer-events-none"
        style={{
          top: "473px",
          left: "-23px",
          zIndex: -1002,
        }}
      />

      <img
        src="/Vector3.png"
        alt=""
        className="absolute opacity-30 pointer-events-none"
        style={{
          top: "533px",
          left: "106px",
          zIndex: -1,
        }}
      />
      <img
        src="/Vector4.png"
        alt=""
        className="absolute opacity-20 pointer-events-none"
        style={{
          top: "465px",
          left: "250px",
          zIndex: -1,
        }}
      />
    </AppLayout>
  );
}
