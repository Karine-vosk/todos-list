import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Flex, Input, Col, Row, Space } from 'antd';
import { useState } from 'react';

const TasksItem = ({ task, onChange, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title)

    const onCancel = () => {
        setIsEditing(false);
        setEditedTitle(task.title);
    };

    const onSave = () => {
        setIsEditing(false);
        onChange({
            ...task,
            title: editedTitle,
        });
    };
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <Space direction='vertical'>
                    <div size='middle'>
                        <Input size='middle'
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                    </div>
                    <Flex size='middle'>
                        <Button type='primary'
                            onClick={onSave}>
                            Save
                        </Button>
                        <Button type='link' onClick={onCancel}>
                            Cancel
                        </Button>
                    </Flex>
                </Space>

            </>
        );
    } else {
        taskContent = (
            <>
                <Flex justify='space-between' align='start'>
                    <Flex vertical align='start'>
                        <p> {task.title} </p>
                        <p> {task.description} </p>
                        <p> {task.deadline} </p>
                    </Flex>
                    <Button type='link' icon={<EditOutlined />}
                        onClick={() => setIsEditing(true)}>
                    </Button>
                </Flex>

            </>
        );
    }

    return (
        <div>
            <Row gap='middle' justify='space-between' align='center'>
                <Col span='4'>
                    <Checkbox onChange={(e) => {
                        onChange({
                            ...task,
                            isCompleted: e.target.checked
                        })
                    }}>
                    </Checkbox>
                </Col>

                <Col span='16'>
                    {taskContent}
                </Col>
                <Col span='4'>
                    <Button type='link' danger icon={<DeleteOutlined />}
                        onClick={() => {
                            onDelete(task);
                        }}></Button>
                </Col>
            </Row>
            <Divider />
        </div>
    )
}

export default TasksItem;