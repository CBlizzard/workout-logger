import {useState} from 'react'
import {UseSignup} from '../hooks/useSignup'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = UseSignup();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await signup(email, password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>

            <label>Email : </label>
            <input 
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email} 
            />

            <label>Password : </label>
            <input 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password} 
            />

            <button disabled={isLoading}>Signup</button>
            {error && <div className="error">{error}</div> } 
        </form>
    )
}