import { FC } from "react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateUserForm.css';

const CreateUserPage: FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [gender, setGender] = useState<string>('Female');
    const [joinedDate, setJoinedDate] = useState<string>('');
    const [type, setType] = useState<string>('Staff');
    /*const [selectedDate, setSelectedDate] = useState<string>('');
    const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);*/
    const navigate = useNavigate();

    // Enable the save button only if all required fields are filled
    const isSaveEnabled = firstName !== '' && lastName !== '' && dob !== '' && joinedDate !== '';

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDob(event.target.value);
        /*setSelectedDate(selectedDate);
        setShowPlaceholder(selectedDate === '');*/ // Show placeholder if no date is selected
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    const handleJoinedDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJoinedDate(event.target.value);
        /*setSelectedDate(selectedDate);
        setShowPlaceholder(selectedDate === '');*/ // Show placeholder if no date is selected
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your form submission logic here
        navigate('/users');
    };

    const handleCancel = () => {
        navigate('/users');
    };

    return (
        <div className="form-container">
            <label className="form-title">Create New User</label>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="form-field">
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="form-field">
                    <label>Date of Birth</label>
                    <input type="date" value={dob} onChange={handleDobChange} /*style={{
                        color: showPlaceholder ? 'initial' : 'transparent',
                        display: showPlaceholder ? 'initial' : 'none'
                    }}*/ />
                </div>
                <div className="form-field gender-field">
                    <label>Gender</label>
                    <div className="gender-options">
                        <div className="gender-option">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={handleGenderChange}
                            />
                            Female
                        </div>
                        <div className="gender-option">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={handleGenderChange}
                            />
                            Male
                        </div>
                    </div>
                </div>
                <div className="form-field">
                    <label>Joined Date</label>
                    <input type="date" value={joinedDate} onChange={handleJoinedDateChange} /*style={{
                        color: showPlaceholder ? 'initial' : 'transparent',
                        display: showPlaceholder ? 'initial' : 'none'
                    }}*/ />
                </div>
                <div className="form-field">
                    <label>Type</label>
                    <select value={type} onChange={handleTypeChange}>
                        <option>Staff</option>
                        <option>Admin</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="save-button" disabled={!isSaveEnabled}>
                        Save
                    </button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateUserPage;