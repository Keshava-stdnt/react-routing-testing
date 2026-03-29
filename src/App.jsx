
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { useContext,useState } from "react";
import { incrementContextCreation } from "./context/IncrementContext";

function App () {
    // State
    let {reset, setDefault} = useContext(incrementContextCreation);
    let [cntr, setCntr] = useState("");
    // Return
    return (
        <div className="container mt-2">
            <div className="row text-center">
                <div className="col-sm-6">
                    <Child1 />
                </div>
                <div className="col-sm-6 mt-3 mt-sm-0">
                    <Child2 />
                </div>

                <div className="my-3">
                    <button type="button" className="btn btn-dark" onClick={reset}>Reset</button>
                </div>
                <div className="input-group">
                    <label htmlFor="set_default" className="input-group-text">Set Default:</label>
                    <input type="number" id="set_default" className="form-control" value={cntr} onChange={(e) => setCntr(e.target.value)}/>
                    <button type="button" className="btn btn-outline-dark" onClick={() => {
                        setDefault(cntr);
                        setCntr("");
                        }}>change</button>
                </div>
            </div>
        </div>
    );
}

export default App;