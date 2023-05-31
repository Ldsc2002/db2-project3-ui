import React, { useState } from 'react';
import { updateRel, deleteRel, updateDeleteRel } from '../../db/api';

function UpdateRel() {
  const [showChangeJob, setShowChangeJob] = useState(false);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [cv, setCV] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (showChangeJob) {
      const changeTitle = window.confirm('Do you want to change the job application title?');
      if (changeTitle) {
        // Prompt the user for the new title
        const newTitle = prompt('Enter the new job application title:');
        
        // Call the function again with the new title
        updateDeleteRel(email, title, newTitle, cv, message)
        }
    }
    else {
        updateRel(email, title, { cv, message })
    }

  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input id="email" type="text" placeholder="Enter user email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input id="title" type="text" placeholder="Enter original job title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input id="CV" type="text" placeholder="Enter new CV link" value={cv} onChange={(e) => setCV(e.target.value)} />
      <input id="message" type="text" placeholder="Enter new message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <label>
        <input
          type="checkbox"
          checked={showChangeJob}
          onChange={(e) => setShowChangeJob(e.target.checked)}
        />
        Change job title to apply to
      </label>

      <button onClick={onSubmit} type="submit">Submit</button>
    </div>
  );
}

export default UpdateRel;
