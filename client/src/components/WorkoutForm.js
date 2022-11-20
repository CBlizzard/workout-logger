import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import {useWorkoutsContext} from "../hooks/useWorkoutsContext";

export default function WorkoutForm(){
    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    const [title, setTitle] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!user){
            setError("you must be logged in")
            return 
        }

        const workout = {title, sets, reps};

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setSets('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log( "new workout added   ", json );
            dispatch({type:'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create"  onSubmit={handleSubmit}>
            <h3>Add new workout</h3>
            <label>Exercise title: </label>
            <input 
                type="text"
                onChange={(e)=> setTitle(e.target.value)}
                value = {title}
                className = {emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Total sets: </label>
            <input 
                type="text"
                onChange={(e)=> setSets(e.target.value)}
                value = {sets}
                className = {emptyFields.includes('sets') ? 'error' : ''}
            />
            <label>Reps performed: </label>
            <input 
                type="text"
                onChange={(e)=> setReps(e.target.value)}
                value = {reps}
                className = {emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}