import { FaTimes, FaEdit } from 'react-icons/fa';
import EditTask from './EditTask';
import { useState, useEffect } from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  const [showEditTask, setShowEditTask] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editDate, setEditDate] = useState(task.day);

  const onEdit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text: editText,
        day: editDate,
      }),
    });

    // if (!text) {
    //   alert('Please add a task');
    //   return;
    // }

    setEditText(editText);
    setEditDate(editDate);
    setShowEditTask(false);
  };

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {editText}
        <div>
          <FaEdit
            style={{
              color: 'green',
              cursor: 'pointer',
              marginRight: '10px',
            }}
            onClick={() => setShowEditTask(!showEditTask)}
          />
          <FaTimes
            style={{
              color: 'red',
              cursor: 'pointer',
            }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p>{editDate}</p>

      {showEditTask === true ? (
        <EditTask
          textToEdit={editText}
          dateToEdit={editDate}
          editedText={(e) => setEditText(e.target.value)}
          editedDate={(e) => setEditDate(e.target.value)}
          onEdit={onEdit}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Task;
