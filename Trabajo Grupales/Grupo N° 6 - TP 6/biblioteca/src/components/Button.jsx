const Button = ({ children, onClick, type = "button", color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${colors[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
