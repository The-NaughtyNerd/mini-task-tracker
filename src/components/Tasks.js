import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          onEdit={onEdit}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
