import "./style/dropdown.css";

const BasicDropdown = ({ showDropdown, setShowDropdown, items }) => {
  return (
    <div class="dropdown-wrapper">
      <button onClick={setShowDropdown} className="trigger-button">
        Items
      </button>
      <ul className={showDropdown ? "active" : ""}>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicDropdown;
