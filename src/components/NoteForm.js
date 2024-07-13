import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      id: Date.now(),
      title,
      content
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
}

export default NoteForm;
