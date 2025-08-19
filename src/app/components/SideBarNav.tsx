import appLogo from "../../assets/app-logo.png";
import backButton from "../../assets/back-button.png";
import homeIcon from "../../assets/home.png";
import dashBoard from "../../assets/dashboard.png";
import logoutIcon from "../../assets/logout.png";
import rectangle7108 from "../../assets/Rectangle 7108.png";

export default function SidebarNav() {
  return (
    <aside
      className="shrink-0 bg-[#845CC0] relative"
      style={{
        width: "70px",
        height: "768px",
        opacity: 1,
      }}
      role="navigation"
      aria-label="Primary"
    >
      {/* 1. Logo */}
      <img
        src={appLogo}
        alt="App Logo"
        className="absolute cursor-pointer hover:opacity-80 transition-opacity"
        style={{
          top: "27px",
          left: "17px",
          opacity: 1,
        }}
      />

      {/* 2. Home */}
      <img
        src={homeIcon}
        alt="Home"
        onClick={() => {
          console.log("Home clicked!");
        }}
        className="absolute cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
        style={{
          top: "105px",
          left: "20px",
          opacity: 1,
        }}
      />

      {/* 3. BackButton */}
      <img
        src={backButton}
        alt="Back"
        onClick={() => {
          console.log("Back clicked!");
        }}
        className="absolute cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
        style={{
          top: "160px",
          left: "30px",
          opacity: 1,
          transform: "rotate(180deg)",
          filter: "brightness(0) invert(1)",
        }}
      />

      {/* 4. ClipBoard */}
      <img
        src={dashBoard}
        alt="Dashboard"
        onClick={() => {
          console.log("Clipboard clicked!");
        }}
        className="absolute cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
        style={{
          top: "209px",
          left: "24px",
          opacity: 1,
        }}
      />

      {/* Rectangle - Below Clipboard */}
      <div
        className="absolute"
        style={{
          width: "26px",
          height: "3px",
          top: "236px",
          left: "23px",
          opacity: 1,
          borderRadius: "3px",
          backgroundImage: `url(${rectangle7108})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 5. Logout */}
      <img
        src={logoutIcon}
        alt="Logout"
        onClick={() => {
          console.log("Logout clicked!");
        }}
        className="absolute cursor-pointer hover:opacity-80 transition-opacity hover:scale-105"
        style={{
          top: "702px",
          left: "24px",
          opacity: 1,
        }}
      />
    </aside>
  );
}
