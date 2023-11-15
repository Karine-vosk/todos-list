import { Card, Flex, Button } from 'antd';

const TasksFooter = ({ todos, onCompletedClear }) => {
    const completedLength = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <Card >
                <Flex align="cebter" justify="space-between">
                    <span>
                        {completedLength} / {todos.length} Completed
                    </span>
                    <Button onClick={onCompletedClear} type="default">
                        Clear
                    </Button>
                </Flex>
            </Card>

        </div>
    )
}

export default TasksFooter;