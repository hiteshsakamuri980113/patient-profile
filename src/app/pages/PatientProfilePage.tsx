import AppLayout from "../layout/AppLayout";
import PatientInfoCard from "../components/cards/PatientInfoCard";
import HEPSummaryCard from "../components/cards/HEPSummaryCard";
import PatientEducationCard from "../components/cards/PatientEducationCard";
import StatsCard from "../components/cards/StatsCard";

export default function PatientProfilePage() {
  return (
    <AppLayout>
      {/* Container for the entire patient profile section */}
      <div
        style={{
          width: "1300px",
          height: "175px",
          background: "#FFFFFF",
          border: "1px solid #E4E4E4",
          boxShadow: "0px 1px 4px 0px #00000040",
          padding: "12px 31px",
        }}
      >
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
                src="/src/assets/Group 1.png"
                alt="Patient Avatar"
                className="w-auto h-auto"
              />
            </div>

            {/* Content: h1, Last Active, Button */}
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
                Last Active: Mar 20, 2019 23:14
              </p>
              <button
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
          <PatientInfoCard
            phone="(555) 555-5555"
            email="wimtachclient@hotmail.com"
            injuryLocation="Right"
            diagnosis="Other specified malignant neoplasm of skin, unspecified - C4499"
            onEdit={() => {}}
          />
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
          <HEPSummaryCard
            title="New HEP for Wimtach Client"
            editedAgo="16 hours ago"
            sessionsPerDay={5}
            totalReps={254}
            onEdit={() => console.log("Edit HEP")}
          />
          <PatientEducationCard />
        </div>

        {/* Right Column: Stats and other items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <StatsCard
            periodLabel="for Period 3"
            streakCount={1}
            weeksEnrolled={9}
            compliance="16/30"
            activeDayIndex={3}
            onViewStats={() => console.log("View Stats")}
          />
        </div>
      </div>
    </AppLayout>
  );
}
