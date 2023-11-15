import { Checkbox, Button, Flex, Divider } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TasksItem = ({ todo, onChange, onDelete, onEdit }) => {
    return (
        <div>
            <Flex gap="middle" justify="space-between" align="center">
                <Checkbox onChange={(e) => {

                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}>
                    {todo.title}
                </Checkbox>
                <div>
                    <Button type="link" icon={<EditOutlined />}>
                        edit or save
                    </Button>
                    <Button type="link" icon={<DeleteOutlined />}
                        onClick={() => {
                onDelete(todo);
            }}></Button>
                </div>
            </Flex>
            <Divider/>

            {/* <label>
                <input type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => {

                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }} />
                {todo.title}
            </label> */}

            {/* <button onClick={() => {
                onEdit(todo);
            }}>
                Edit Save
            </button>
            <button onClick={() => {
                onDelete(todo);
            }}>
                X
            </button> */}
        </div>
    )
}

export default TasksItem;