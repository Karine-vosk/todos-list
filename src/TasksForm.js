import { useState } from 'react';
import { Button, Divider, Form, Input } from 'antd';


const TasksForm = ({ onAddText }) => {
    const [title, setTitle] = useState('');
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                size="medium"
                initialValues={""}
                autoComplete="off"
                layout="vertical"
                onFinish={(() => {
                    onAddText(title);
                    setTitle('');
                })}>
                <Form.Item
                    label="title"
                    name="title"
                    rules={[{ required: true, message: 'Please input title!' }]}
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="description"
                    name="description"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="deadle"
                    name="deadline"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ span: 8 }}>
                    <Button type="primary" htmlType="submit" size="large" style={{ width: "100%" }}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
            <Divider/>
            {/* <form onSubmit={(e => {

                e.preventDefault();
                onAddText(title);
                setTitle('');
            })}>
                <input type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                <Button type="primary" htmlType="submit">Add</Button>
            </form> */}
        </div>
    )
}

export default TasksForm;