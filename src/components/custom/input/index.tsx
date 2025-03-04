import React, { ReactElement } from "react";
import {
  DatePicker,
  Input,
  Select,
  SelectProps,
  Space,
  Typography,
} from "antd";
import { DefaultOptionType } from "antd/es/select";
import { cn } from "@/utils/helpers";

interface FloatLabelProps {
  children: ReactElement;
  label: string;
  value?: any;
  onChange?: (...args: any) => unknown;
}

const { Text } = Typography;

const FloatLabel = (props: FloatLabelProps) => {
  const [focus, setFocus] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { children, label, value, onChange } = props;
  const [initialValue, setInitialValue] = React.useState<any>(undefined);

  let childrenWithProps: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;

  const filterOption:
    | boolean
    | ((inputValue: string, option: DefaultOptionType) => boolean) = (
    inputValue: string,
    option
  ) => {
    const label = option?.label;
    const value = option?.value;

    let labelMatches = false;
    if (Array.isArray(label)) {
      labelMatches = label
        .join("")
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    } else if (typeof label === "string") {
      labelMatches = label.toLowerCase().includes(inputValue.toLowerCase());
    }

    let valueMatches = false;
    if (value != null) {
      valueMatches = String(value)
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    }

    return labelMatches || valueMatches;
  };

  const filterSort: (
    optionA: DefaultOptionType,
    optionB: DefaultOptionType,
    info: {
      searchValue: string;
    }
  ) => number = (optionA, optionB) => {
    const labelA = optionA?.label ?? "";
    const labelB = optionB?.label ?? "";
    return String(labelA)
      .toLowerCase()
      .localeCompare(String(labelB).toLowerCase());
  };

  const labelRender: SelectProps["labelRender"] = (props) => {
    const { label } = props;

    return <Text className="text-label-medium">{label}</Text>;
  };

  const optionRender: SelectProps["optionRender"] = (option) => (
    <Space size={0} className="py-2">
      <Text className="text-label-large">{option.data.label}</Text>
    </Space>
  );

  if (children.type === Input) {
    childrenWithProps = React.cloneElement(children, {
      ref: inputRef,
      className: cn("w-full pt-5 text-label-large", children.props.className),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      value: value ?? initialValue,
      onChange:
        onChange ??
        ((e: React.ChangeEvent<HTMLInputElement>) =>
          setInitialValue(e.target.value)),
    });
  } else if (children.type === Input.Password) {
    childrenWithProps = React.cloneElement(children, {
      ref: inputRef,
      className: cn(
        "w-full text-label-large h-[52px]",
        children.props.className
      ),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      value: value ?? initialValue,
      onChange:
        onChange ??
        ((e: React.ChangeEvent<HTMLInputElement>) =>
          setInitialValue(e.target.value)),
    });
  } else if (children.type === Select) {
    childrenWithProps = React.cloneElement(children, {
      ref: inputRef,
      className: cn("w-full !h-[52px]", children.props.className),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      value: value ?? initialValue,
      onChange: onChange ?? ((value: string) => setInitialValue(value)),
      filterOption: children.props.showSearch
        ? children.props.filterOption ?? filterOption
        : children.props.filterOption,
      filterSort: children.props.showSearch
        ? children.props.filterSort ?? filterSort
        : children.props.filterSort,
      labelRender: children.props.labelRender ?? labelRender,
      optionRender: children.props.optionRender ?? optionRender,
    });
  } else if (children.type === DatePicker) {
    childrenWithProps = React.cloneElement(children, {
      ref: inputRef,
      placeholder: "",
      className: cn(
        "w-full text-label-large !h-[52px]",
        children.props.className
      ),
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      value: value ?? initialValue,
      onChange: onChange ?? ((date: any) => setInitialValue(date)),
    });
  } else {
    childrenWithProps = children;
  }

  return (
    <div className="!relative !w-full !text-[#7B929D]">
      {childrenWithProps}
      <span
        className={cn(
          "!absolute !left-3 !pointer-events-none transition-all duration-200 ease-in-out",
          children.type === Input.Password && "!z-[9999]",
          focus ||
            (value && value.length !== 0) ||
            (initialValue && initialValue.length !== 0)
            ? "!top-2 !text-body-xxsmall"
            : "!top-[30%] !text-label-medium"
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default FloatLabel;
