import { FC } from "react";
import { Helmet } from "react-helmet-async";
import React, { useState } from 'react';
import './CreateUserForm.css';

const CreateUserPage: FC = () => {

    const [gender, setGender] = useState<string>('Female');

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    return (
        <div className="form-container">
            <label className="form-title">Create New User</label>
            <form>
                <label className="form-field">
                    First Name <input type="text" />
                </label>
                <label className="form-field">
                    Last Name <input type="text" />
                </label>
                <label className="form-field">
                    Date of Birth <input type="date" />
                </label>
                <label className="form-label-gender">Gender</label>
                <label className="form-radio">
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={handleGenderChange}
                    />
                    Female
                </label>
                <label className="form-radio">
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={handleGenderChange}
                    />
                    Male
                </label>
                <label className="form-field">
                    Joined Date <input type="date" />
                </label>
                <label className="form-field">
                    Type
                    <select>
                        <option>Staff</option>
                        <option>Admin</option>
                    </select>
                </label>
                <div className="form-buttons">
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUserPage;