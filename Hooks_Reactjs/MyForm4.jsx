import { useState } from "react";

function MyForm4() {
    const [fn, setFn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Submission Successful!\nName: ${fn}\nEmail: ${email}\nGender: ${gender}\nCity: ${city}`);
    }

    return (
        <>
            <h3>Registration Form</h3>

            <form onSubmit={handleSubmit}>
                fn: 
                <input type="text" value={fn} onChange={(e) => setFn(e.target.value)} />

                email: 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                password: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                textarea: 
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

                gender: 
                <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
                <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female

                <br />

                city: 
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">--Select City--</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default MyForm4;
