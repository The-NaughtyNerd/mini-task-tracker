const EditTask = ({
  onEdit,
  textToEdit,
  dateToEdit,
  editedText,
  editedDate,
}) => {
  return (
    <form onSubmit={onEdit}>
      <div className="form-control">
        <label for="task">Edit Task</label>
        <input
          type="text"
          name="task"
          value={textToEdit}
          onChange={editedText}
          // placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label for="day">Edit Date</label>
        <input
          type="text"
          name="date"
          value={dateToEdit}
          onChange={editedDate}
          // placeholder="Add Day & Time"
        />
      </div>

      <input type="submit" value="Edit Task" className="btn btn-block" />
    </form>
  );
};

export default EditTask;
