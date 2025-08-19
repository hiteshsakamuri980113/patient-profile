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
      <button
        className="absolute rounded-lg hover:bg-white/10 transition-all duration-200 ease-in-out cursor-pointer border-none bg-transparent p-[5px]"
        style={{ top: "22px", left: "12px" }}
        aria-label="App Logo"
      >
        <img
          src={appLogo}
          alt="App Logo"
          className="hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out hover:drop-shadow-lg"
          style={{
            opacity: 1,
          }}
        />
      </button>

      {/* 2. Home */}
      <button
        className="absolute rounded-lg hover:bg-white/15 transition-all duration-200 ease-in-out cursor-pointer border-none bg-transparent p-[5px]"
        style={{ top: "100px", left: "15px" }}
        onClick={() => {
          console.log("Home clicked!");
        }}
        aria-label="Home"
      >
        <img
          src={homeIcon}
          alt="Home"
          className="hover:opacity-90 hover:scale-110 transition-all duration-200 ease-in-out hover:drop-shadow-lg hover:brightness-110"
          style={{
            opacity: 1,
          }}
        />
      </button>

      {/* 3. BackButton */}
      <button
        className="absolute rounded-lg hover:bg-white/15 transition-all duration-200 ease-in-out cursor-pointer border-none bg-transparent p-[5px]"
        style={{ top: "155px", left: "25px" }}
        onClick={() => {
          console.log("Back clicked!");
        }}
        aria-label="Back"
      >
        <img
          src={backButton}
          alt="Back"
          className="hover:opacity-90 hover:scale-110 transition-all duration-200 ease-in-out hover:drop-shadow-lg hover:brightness-110"
          style={{
            opacity: 1,
            transform: "rotate(180deg)",
            filter: "brightness(0) invert(1)",
          }}
        />
      </button>

      {/* 4. Dashboard */}
      <button
        className="absolute rounded-lg hover:bg-white/15 transition-all duration-200 ease-in-out cursor-pointer border-none bg-transparent p-[5px]"
        style={{ top: "204px", left: "19px" }}
        onClick={() => {
          console.log("Dashboard clicked!");
        }}
        aria-label="Dashboard"
      >
        <img
          src={dashBoard}
          alt="Dashboard"
          className="hover:opacity-90 hover:scale-110 transition-all duration-200 ease-in-out hover:drop-shadow-lg hover:brightness-110"
          style={{
            opacity: 1,
          }}
        />
      </button>

      {/* Active tab indicator */}
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
      <button
        className="absolute rounded-lg hover:bg-white/15 transition-all duration-200 ease-in-out cursor-pointer border-none bg-transparent p-[5px]"
        style={{ top: "697px", left: "19px" }}
        onClick={() => {
          console.log("Logout clicked!");
        }}
        aria-label="Logout"
      >
        <img
          src={logoutIcon}
          alt="Logout"
          className="hover:opacity-90 hover:scale-110 transition-all duration-200 ease-in-out hover:drop-shadow-lg hover:brightness-110"
          style={{
            opacity: 1,
          }}
        />
      </button>
    </aside>
  );
}
