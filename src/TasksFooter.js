import { Card, Flex, Button } from 'antd';

const TasksFooter = ({ tasks, onCompletedClear }) => {
    const completedLength = tasks.filter((task) => task.isCompleted).length;
    return (
        <div>
            <Card >
                <Flex align="cebter" justify="space-between">
                    <span>
                        {completedLength} / {tasks.length} Completed
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