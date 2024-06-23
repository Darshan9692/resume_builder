import React from 'react';

const Combo = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props?.name} className="text-sm font-medium text-gray-700">
        {props?.name === "city" ? props.name : ""}
      </label>
      <select name={props?.name} id={props?.name} className="p-2 border-b-2 border-black rounded-lg outline-none">
        <option value="">Select {props?.name}</option>
        {props.data.map((d, index) => (
          <option key={index} value={d?.value}>{d?.value}</option>
        ))}
      </select>
    </div>
  );
}

export default Combo;
