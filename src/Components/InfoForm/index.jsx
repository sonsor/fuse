import { useContext} from 'react'
import { DatePicker, Form, Input, Button, Checkbox } from 'antd';
import InfoContext from '../../Context/InforFormContext'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


export const InfoForm = () => {

    const formInfo = useContext(InfoContext)

    const onFinish = (values) => {
        console.log('Success:', values, formInfo);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item label="Name">
            <Input
                value={formInfo.name}
                onChange={e => formInfo.setName(e.target.value)}
            />
            </Form.Item>

            <Form.Item label="Date Of Birth">
            <DatePicker
                value={formInfo.dateOfBirth}
                onChange={(e, value) => formInfo.setDateOfBirth(e)}
            />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};