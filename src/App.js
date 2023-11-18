import { Card, Col, Row, Layout, Flex, Button, Divider, Typography } from 'antd';
import './App.css';
import TasksFooter from './TasksFooter';
import TasksForm from './TasksForm';
import TasksList from './TasksList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectTasks, selectDeletedTasks, addTask, deleteTask, updateTask, completedTask, restoreDeletedTask } from './app/features/task/tasksSlice';

const { Text } = Typography;
const { Content } = Layout;

function App() {
  const tasksList = useSelector(selectTasks);
  const draftTasks = useSelector(selectDeletedTasks);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Layout>
        <Content style={{ padding: '20px' }}>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={'space-around'}>
            <Col span={12}>
              <Card title="Tasks Form" style={{ width: '100%' }}>
                <TasksForm onAddText={(task) => {
                  dispatch(addTask({ task }));
                }} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Tasks List" style={{ width: '100%' }}>
                <TasksList tasks={tasksList}
                  onChange={(newTask) => {
                    dispatch(updateTask(newTask));
                  }}
                  onDelete={(task) => {
                    dispatch(deleteTask({ id: task.id }));
                  }} />
                <TasksFooter tasks={tasksList}
                  onCompletedClear={() => {
                    dispatch(completedTask());
                  }} />
              </Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <Card title="Draft Lists" style={{ width: '100%' }}>
                {
                  draftTasks.length > 0 ?
                    (draftTasks.map((draft) => {
                      return (
                        <>
                          <Flex key={draft.id} justify={'space-between'} gap={'middle'}>
                            <Flex vertical gap={'middle'}>
                              <Text>
                                {draft.id} / {draft.title}
                              </Text>
                              <Text>
                                {draft.description}
                              </Text>
                            </Flex>
                            <Button type="link" onClick={() => {
                              dispatch(restoreDeletedTask(draft))
                            }}>
                              Restore
                            </Button>
                          </Flex>
                          <Divider />
                        </>
                      )
                    }))
                    : (
                      <Text type="secondary">Empty draft</Text>
                    )
                }
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div >
  );
}

export default App;
