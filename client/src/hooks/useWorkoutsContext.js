import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

export const useWorkoutsContext = ()=>{
    const context = useContext(WorkoutsContext)

    // if trying to access context outside of its provider, throw error
    if(!context){
        throw Error("useWorkoutsContext must be used inside WorkoutsContextProvider");
    }

    // return the state & dispatch ie the context
    return context;
}