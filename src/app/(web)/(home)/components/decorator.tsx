import FloatLabel from "@/components/custom/input";
import { DatePicker, Input, Select } from "antd";
import dayjs from "dayjs";
import React from "react";
import { DatePickerProps, FieldProps, SelectProps } from "../interfaces";

const GetComponent = (
  type: string,
  select?: SelectProps,
  date?: DatePickerProps
) => {
  switch (type) {
    case "date":
      return (
        <DatePicker
          placement="bottomLeft"
          format={"D MMM YYYY"}
          cellRender={date?.cellRender}
          disabledDate={date?.disabledDate}
          minDate={dayjs(date?.dateServer ?? undefined)}
          maxDate={
            date?.maxDate
              ? dayjs(date?.dateServer ?? undefined).add(date?.maxDate, "day")
              : undefined
          }
        />
      );
    case "select":
      return (
        <Select
          options={select?.options}
          optionRender={select?.optionRender}
          labelRender={select?.labelRender}
        />
      );
    case "select_advanced":
      return (
        <Select
          showSearch
          filterSort={(optionA, optionB) => {
            const sequenceA = optionA?.sequenceId ?? 0;
            const sequenceB = optionB?.sequenceId ?? 0;
            return sequenceB - sequenceA;
          }}
          options={select?.options}
          optionRender={select?.optionRender}
          labelRender={select?.labelRender}
        />
      );
    default:
      return <Input variant="outlined" />;
  }
};

const getFieldDecorator = (props: FieldProps) => {
  const { name, type, rules, label, select, date } = props;

  const component = GetComponent(type, select, date);

  return {
    name,
    rules,
    style: { marginBottom: 0 },
    children: <FloatLabel label={label}>{component}</FloatLabel>,
  };
};

export default getFieldDecorator;
