import { useState } from 'react';
import { Button, Space, DatePicker, version } from 'antd';

const TasksForm = ({onAddText}) => {
    const [text, setText] = useState('');
    return (       
        <div>
            <form onSubmit={(e => {
                e.preventDefault();
                onAddText(text);
                setText('');
            })}>
                <input type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    } }/>
                <Button type="primary">Add</Button>
            </form>
        </div>
    )
}

export default TasksForm;