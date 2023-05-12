import React from "react";
import Select, { StylesConfig } from "react-select";

interface CustomSelectProps {
  options: {
    value: number;
    label: string;
  }[];
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { options } = props;
  const customStyles: StylesConfig = {
    control: (styles, state: any) => ({
      ...styles,
      backgroundColor: "white",
      borderRadius: 0,
      border: state.isFocused ? "1px solid #ff8b67" : "1px solid #cccccc",
      boxShadow: state.isFocused ? "0px 0px 1px #ff8b67" : "none",
      "&:hover": {
        border: "1px solid #ff8b67",
        boxShadow: "0px 0px 1px #ff8b67",
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? "red"
          : isFocused
          ? "purple"
          : undefined,
        color: isDisabled ? "#ccc" : isSelected ? "white" : "black",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? "green"
              : "blue"
            : undefined,
        },
      };
    },
    placeholder: (styles) => ({ ...styles }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "red",
      "&:hover": {
        color: "darkred",
      },
    }),
  };

  return (
    <Select
      options={options}
      isClearable
      placeholder="Выберите размер"
      styles={customStyles}
    />
  );
};
