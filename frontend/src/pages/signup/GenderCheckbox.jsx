const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text  text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox border-accent"
            checked={selectedGender === "male" ? "selected" : ""}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox border-accent"
            checked={selectedGender === "female" ? "selected" : ""}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
