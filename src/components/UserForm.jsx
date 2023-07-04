import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');

    const savedUser = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            age: age,
            gender: gender,
        };

        dispatch({ type: 'SAVE_USER', payload: user });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            <div>
                <h3>Saved User:</h3>
                <p>Name: {savedUser.name}</p>
                <p>Age: {savedUser.age}</p>
                <p>Gender: {savedUser.gender}</p>
            </div>
        </div>
    );
};

export default UserForm;