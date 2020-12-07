import { useContext} from 'react'
import { DatePicker, Form, Input, Button } from 'antd';
import InfoContext from '../../Context/InforFormContext'

export const InfoForm = () => {

    const formInfo = useContext(InfoContext)

    const onFinish = (values) => {
        console.log('Success:', {
            name: formInfo.name,
            dateOfBirth: formInfo.dateOfBirth
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                ]}
            >
            <Input
                value={formInfo.name}
                onChange={e => formInfo.setName(e.target.value)}
            />
            </Form.Item>

            <Form.Item
                label="Date Of Birth"
                name="dateOfBirth"
                rules={[
                    {
                        required: true,
                        message: 'Please input your date of birth!',
                    },
                ]}
            >
            <DatePicker
                value={formInfo.dateOfBirth}
                onChange={(e, value) => formInfo.setDateOfBirth(e)}
            />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};