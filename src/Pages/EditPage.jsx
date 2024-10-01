import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = ({ tasks = [], setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Ensure tasks are defined before using find
  const taskToEdit = tasks.length > 0 ? tasks.find(task => task.id === parseFloat(id)) : null;

  const [title, setTitle] = useState('');
  const [term, setTerm] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setTerm(taskToEdit.term);
      setName(taskToEdit.name);
      setSurname(taskToEdit.surname);
      setAdditionalInfo(taskToEdit.additionalInfo);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskToEdit,
      title,
      term,
      name,
      surname,
      additionalInfo,
    };

    setTasks(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task));
    navigate('/');
  };

  // Handle case where task isn't found or undefined
  if (!taskToEdit) {
    return <p>Task not found!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <textarea
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default EditPage;
