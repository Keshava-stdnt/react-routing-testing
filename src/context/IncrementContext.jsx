// First we create a new Context
import { createContext, useEffect, useState } from "react";

export const incrementContextCreation = createContext();

function IncrementContext({children}) {

    let defVal = -1;
    let fetchDefaultVal = async () => {
        try {let res = await fetch("http://localhost:3000/settings", {method: "GET"});
        let {defaultVal} = await res.json();
        setCounter(defaultVal);
        console.log("ntg", defaultVal);
        } catch (e) {
            console.log("Error:", e);
        }
    }
    useEffect(() => {
        fetchDefaultVal();
        console.log("inside useEffect()");
    }, []);

    let [counter, setCounter] = useState(defVal);
    let increment = () => {
        setCounter(counter + 1);
    }
    let decrement = () => {
        setCounter(counter - 1);
    }
    
    let reset = () => {
        setDefault(0);
    }
    
    let setDefault = async (val) => {
        let res = await fetch("http://localhost:3000/settings", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({defaultVal : val})
        });
        console.log(res);
        console.log("inside setDefault");
        await fetchDefaultVal();
    }

    // setTimeout(() => {
    //     setDefault(100);
    // }, 3000);
    // setDefault(100);

    return (
        <incrementContextCreation.Provider value={{counter, increment, decrement, reset, setDefault}}>
            {children}
        </incrementContextCreation.Provider>
    );
}

export default IncrementContext;