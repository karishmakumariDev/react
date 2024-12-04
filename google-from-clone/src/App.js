
import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        
        // Reset form fields after submission
        setFormData({
            name: "",
            email: "",
            feedback: "",
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="form-container">
          <h1>Karishma Kumari</h1>
            <h1>Google Form Clone</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Feedback</label>
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
