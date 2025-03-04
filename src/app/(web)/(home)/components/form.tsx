import { Button, Flex, Form, FormProps, Space, Switch } from "antd";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { NotificationInstance } from "antd/es/notification/interface";
import getFieldDecorator from "./decorator";

interface FormCustomProps {
  api?: NotificationInstance;
}

const FormCustom = ({ api }: FormCustomProps) => {
  const [form] = Form.useForm();

  const onFinish: FormProps["onFinish"] = async (values) => {
    console.log("values:", values);

    api?.success({
      message: "Success",
      description: "Success",
    });
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current.isBefore(dayjs().startOf("day"));
  };

  return (
    <Form form={form} onFinish={onFinish} autoComplete="off">
      <Space direction="vertical" size={24} className="!w-full">
        <Space direction="vertical" size={8} className="!w-full">
          <Form.Item
            {...getFieldDecorator({
              name: "select_test_1",
              type: "select_advanced",
              rules: [{ required: true }],
              label: "Select Test 1",
              select: {
                options: [],
              },
            })}
          />
          <Form.Item
            {...getFieldDecorator({
              name: "select_test_2",
              type: "select_advanced",
              rules: [
                {
                  required: true,
                },
              ],
              label: "Select Test 2",
              select: {
                options: [],
              },
            })}
          />
        </Space>
        <Space direction="vertical" size={8} style={{ width: "100%" }}>
          <Form.Item
            {...getFieldDecorator({
              name: "pickerdate",
              type: "date",
              rules: [{ required: true }],
              label: "Select Date",
              date: {
                disabledDate,
              },
            })}
          />
          <Flex justify="space-between">
            <span className="!text-body-xsmall">Click Switch!</span>
            <Switch />
          </Flex>
        </Space>
        <Space direction="vertical" className="!w-full">
          <Form.Item
            {...getFieldDecorator({
              name: "select_test_3",
              type: "select",
              rules: [{ required: true }],
              label: "Select Test 3",
              select: {
                options: [],
              },
            })}
          />
        </Space>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Button
            type="primary"
            variant="solid"
            htmlType="submit"
            style={{ width: "100%", height: "52px" }}
            className="text-label-large"
          >
            Click
          </Button>
        </Space>
      </Space>
    </Form>
  );
};

export default FormCustom;
