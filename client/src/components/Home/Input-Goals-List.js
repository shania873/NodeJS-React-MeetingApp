import React, { useState, useEffect } from "react";
import nextId from "react-id-generator";
// custom data matching??

export default function InputTypeList({
  data,
  id,
  label,
  placeholder,
  multiple,
  defaultValue,
  ...props
}) {
  const [input, setInput] = useState("");
  const [defaultValueOutput, setDefaultValueOutput] = useState(
    defaultValue && defaultValue.length > 0 ? defaultValue : null
  );
  // const [defaultValueState, setDefaultValueState] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [idInput, setidInput] = useState(nextId());
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {}, []);

  const inputChange = (e) => {
    let str = e.target.value.toLowerCase();
    setInput(str);
    if (e.target.value?.length >= 0) {
      setFilteredData(
        [...data].filter((x) => x.label.toLowerCase().includes(str))
      );
      setOpen(true);
    } else {
      setFilteredData(data);
      setOpen(false);
    }
  };

  const inputBlur = (e) => {
    setTimeout(() => {
      setOpen(false);
    }, 250);
  };

  const addSelected = (e) => {
    if (multiple) {
      setInput("");
      if (!selectedData.some((x) => x.id === +e.target.id)) {
        setSelectedData([
          ...selectedData,
          filteredData.find((x) => x.id === +e.target.id),
        ]);
      }
    } else {
      setInput(e.target.innerText);
      setSelectedData(filteredData.filter((x) => x.id === +e.target.id));
    }

    setFilteredData(data);
    setOpen(false);
  };

  const removeSelected = (id) => {
    setSelectedData([...selectedData].filter((s) => s.id !== id));
  };

  const removeSelectedAll = (e) => {
    if (multiple) {
      setSelectedData([]);
    } else {
      setInput("");
      setSelectedData([]);
    }
  };

  props.onChange(selectedData);

  return (
    <div className="autocomplete">
      <label htmlFor={id}>{label || placeholder}</label>
      <div className="input-dropdown-wrap">
        <div
          className="input-wrap"
          onClick={(e) => document.getElementById(idInput).focus()}
        >
          {/* {multiple && selectedData && ( */}
          <div className="selected-wrap">
            {multiple && (
              <>
                {selectedData.map((x) => (
                  <span key={x.id}>
                    {x.label} <i onClick={() => removeSelected(x.id)}>x</i>
                  </span>
                ))}
              </>
            )}

            <input
              type="text"
              id={idInput}
              placeholder={placeholder}
              value={input}
              autoComplete={"off"}
              onChange={inputChange}
              onFocus={() =>
                filteredData && filteredData.length > 0
                  ? setOpen(true)
                  : setOpen(false)
              }
              onBlur={inputBlur}
            />
          </div>
          {/* )} */}

          {selectedData.length > 0 && <i onClick={removeSelectedAll}>x</i>}
        </div>
        {open && (
          <ul>
            {filteredData && filteredData.length > 0 ? (
              <>
                {filteredData?.map((x) => (
                  <li key={x.id} id={x.id} onClick={addSelected}>
                    {x.label}
                  </li>
                ))}
              </>
            ) : (
              <p>Introuvable</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
