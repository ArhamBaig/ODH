import Select from "react-select";
const SelectField = ({ options, onChange, width}) => {
  return (
    <Select
      unstyled
      placeholder="Click Here"
      className={`bg-white border border-primary rounded-xl w-[${width}] z-30`}
      options={options}
      classNames={{
        control: () => "px-2 p-3",
        menuList: () => "bg-white mt-1 py-3 rounded-xl ",
        option: () => "hover:bg-primary hover:text-white py-2 px-2 rounded-sm transition-all",
        dropdownIndicator: () => "text-[#114d59]",
        placeholder: () => "text-gray-400 select-none"
      }}
      onChange={onChange}
    />
  );
};

export default SelectField;
