import { DefaultOptionType } from "antd/es/select";

export interface FieldProps {
  name: string;
  type: string;
  rules: any;
  label: string;
  select?: SelectProps;
  date?: DatePickerProps;
}

export interface SelectProps {
  options: DefaultOptionType[] | undefined;
  optionRender?: (...args: any) => any;
  labelRender?: (...args: any) => any;
}

export interface DatePickerProps {
  dateServer?: Date;
  maxDate?: number;
  disabledDate?: (...args: any) => any;
  cellRender?: (...args: any) => any;
}
