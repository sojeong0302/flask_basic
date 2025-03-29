import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/register', {
                username,
                password,
            });
            alert(res.data.message);
        } catch (err) {
            alert('회원가입 실패');
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleRegister}>
                <input
                    type='text'
                    placeholder='아이디'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='비밀번호'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>가입</button>
            </form>
        </div>
    );
}

export default Register;
