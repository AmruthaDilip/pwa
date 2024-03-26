import React, { useState } from 'react';
import './App.css';

function App() {
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleRecipientAdd = (recipient) => {
    setRecipients([...recipients, recipient]);
  };

  const handleAttachmentAdd = (file) => {
    setAttachments([...attachments, file]);
  };

  const handleSend = () => {
    console.log('Sending email to:', recipients);
    console.log('Subject:', subject);
    console.log('Body:', body);
    console.log('Attachments:', attachments);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>RECIPIENT LIST</h2>
        <button>Upload List</button>
        <button>Add Address</button>
        <h2>COMPOSE</h2>
        <button onClick={() => handleAttachmentAdd('newfile.txt')}>
          Attach Files
        </button>
        <h2>FOLDERS</h2>
        <button>Inbox</button>
        <button>Sent</button>
        <button>Draft</button>
        <button>Delete</button>
      </div>
      <div className="main">
        <div className="subject-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          className="body-field"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;