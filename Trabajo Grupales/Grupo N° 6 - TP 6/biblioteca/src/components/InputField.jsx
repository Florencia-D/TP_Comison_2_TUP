// src/components/InputField.jsx
const InputField = ({ label, value, onChange, type = "text", placeholder }) => (
  <div className="flex flex-col mb-4">
    {label && <label className="mb-1 font-semibold">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default InputField;
