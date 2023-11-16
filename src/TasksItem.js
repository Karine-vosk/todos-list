import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Flex } from 'antd';

const TasksItem = ({ task, onChange, onDelete, onEdit }) => {
    return (
        <div>
            <Flex gap="middle" justify="space-between" align="center">
                <Checkbox onChange={(e) => {

                    onChange({
                        ...task,

                        isCompleted: e.target.checked
                    })
                }}>
                    {task.title}

                </Checkbox>
                <div>
                    <Button type="link" icon={<EditOutlined />}>
                        edit or save
                    </Button>
                    <Button type="link" icon={<DeleteOutlined />}
                        onClick={() => {
                onDelete(task);
            }}></Button>
                </div>
            </Flex>
            <Divider/>

            {/* <label>
                <input type="checkbox"
                    checked={task.isCompleted}
                    onChange={(e) => {

                        onChange({
                            ...task,
                            isCompleted: e.target.checked
                        })
                    }} />
                {task.title}
            </label> */}

            {/* <button onClick={() => {
                onEdit(task);
            }}>
                Edit Save
            </button>
            <button onClick={() => {
                onDelete(task);
            }}>
                X
            </button> */}
        </div>
    )
}

export default TasksItem;