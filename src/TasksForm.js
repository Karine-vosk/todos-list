import { Button, Divider, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle, changeDescription, changeDeadline, selectFormsField, resetForm } from './app/features/task/tasksFormSlice';

const TasksForm = ({ onAddText }) => {
    const dispatch = useDispatch();
    const formFields = useSelector(selectFormsField);
    const { title, description, deadline } = formFields;

    const handleDescriptionChange = (e) => {
        dispatch(changeDescription(e.target.value));
    };
    const handleChangeTitle = (e) => {
        dispatch(changeTitle(e.target.value));
    };
    const handleChangeDeadline = (e) => {
        dispatch(changeDeadline(e.target.value));
    };

    const handleSubmit = () => {
        onAddText({ title, description, deadline });
        dispatch(resetForm());
    };

    return (
        <div>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                size="medium"
                autoComplete="off"
                layout="vertical"
                onFinish={handleSubmit}>
                <Form.Item
                    label="title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                    value={title}
                    onChange={(handleChangeTitle)}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="deadline"
                    name="deadline"
                    value={deadline}
                    onChange={handleChangeDeadline}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 8 }}>
                    <Button type="primary" htmlType="submit" size="large" style={{ width: "100%" }}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
            <Divider />        
        </div>
    )
}

export default TasksForm;