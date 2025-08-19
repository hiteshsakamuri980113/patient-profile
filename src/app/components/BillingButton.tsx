export default function BillingButton() {
  return (
    <button
      className="
      w-[407px] h-[72px]
      flex-shrink-0
      opacity-100
      rounded-[10px]
      bg-[#2196F3]
      flex items-center
      border-0 outline-none appearance-none cursor-pointer
      hover:brightness-110 hover:scale-[1.02] hover:shadow-lg active:brightness-95 transition-all duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
      relative
    "
    >
      <img
        src="/src/assets/dollar-sign.png"
        alt="Dollar sign"
        className="h-[28px] w-auto"
        style={{ marginLeft: "5%" }}
      />
      <span
        className="text-[16px] font-medium leading-[18px] align-middle"
        style={{
          fontFamily: "Inter",
          fontWeight: 500,
          letterSpacing: "0%",
          color: "#FFFFFF",
          marginLeft: "30px",
        }}
      >
        View Billing Details
      </span>
    </button>
  );
}
