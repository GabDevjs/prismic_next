import { ClipLoader } from "react-spinners";

export const Button = (props) => {
  const {
    name,
    type,
    Icon,
    text,
    onClick,
    className,
    isLoading,
    butonColor,
    IconPosition,
  } = props;

  function setButtonColor(option) {
    switch (option) {
      case "gold":
        return " border-p-gold hover:bg-p-gold hover:text-p-azul focus:ring-p-gold";
      case "blue":
        return " border-p-azul hover:text-white hover:bg-p-azul focus:ring-p-azul-200";
      default:
        return " border-transparent dark:text-gray-100 bg-transparent";
    }
  }

  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 border-[1px] px-6 py-3 text-base rounded-3xl  font-semibold transition-all ease-in-out focus:outline-none whitespace-nowrap focus:ring-2  ${setButtonColor(
        butonColor
      )} ${className?.button}`}
      arial-label={name}
      title={name}
    >
      {isLoading == true ? (
        <ClipLoader color="#193355" size={24} />
      ) : IconPosition == "r" ? (
        <>
          {text}
          {Icon ? (
            <Icon className={`-mr-1 ml-2 inline text-base ${className?.icon}`} aria-hidden="true" />
          ) : null}
        </>
      ) : (
        <>
          {Icon ? (
            <Icon className={`-mr-1 ml-2 inline text-base ${className.icon}`} aria-hidden="true" />
          ) : null}
          {text}
        </>
      )}
    </button>
  );
};
