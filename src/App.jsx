
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Api from "./components/Api";
import History from "./components/History";
import { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { incrementContextCreation } from "./context/IncrementContext";

function App() {
    // State
    let { reset, setDefault } = useContext(incrementContextCreation);
    let [cntr, setCntr] = useState("");

    // Return
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Dashboard</Link>
                            <Link className="nav-link" to="/counters">Counters</Link>
                            <Link className="nav-link" to="/api">API Status</Link>
                            <Link className="nav-link" to="/history">History</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="dashboard-main">
                <Routes>
                    <Route path="/" element={
                        <div className="dashboard-grid">
                            <div className="dashboard-card">
                                <Child1 />
                            </div>
                            <div className="dashboard-card">
                                <Child2 />
                            </div>
                            <div className="dashboard-card">
                                <Api />
                            </div>
                            <div className="dashboard-card">
                                <History />
                            </div>
                            <div className="dashboard-card controls-card">
                                <h3>Controls</h3>
                                <div className="controls-content">
                                    <button type="button" className="btn btn-dark mb-3" onClick={reset}>Reset Counter</button>
                                    <div className="input-group">
                                        <label htmlFor="set_default" className="input-group-text">Set Default:</label>
                                        <input
                                            type="number"
                                            id="set_default"
                                            className="form-control"
                                            value={cntr}
                                            onChange={(e) => setCntr(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                setDefault(cntr);
                                                setCntr("");
                                            }}
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route path="/counters" element={
                        <div className="dashboard-grid">
                            <div className="dashboard-card">
                                <Child1 />
                            </div>
                            <div className="dashboard-card">
                                <Child2 />
                            </div>
                            <div className="dashboard-card controls-card">
                                <h3>Controls</h3>
                                <div className="controls-content">
                                    <button type="button" className="btn btn-dark mb-3" onClick={reset}>Reset Counter</button>
                                    <div className="input-group">
                                        <label htmlFor="set_default" className="input-group-text">Set Default:</label>
                                        <input
                                            type="number"
                                            id="set_default"
                                            className="form-control"
                                            value={cntr}
                                            onChange={(e) => setCntr(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                setDefault(cntr);
                                                setCntr("");
                                            }}
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route path="/api" element={
                        <div className="dashboard-grid">
                            <div className="dashboard-card">
                                <Api />
                            </div>
                        </div>
                    } />
                    <Route path="/history" element={
                        <div className="dashboard-grid">
                            <div className="dashboard-card">
                                <History />
                            </div>
                        </div>
                    } />
                </Routes>
            </main>
        </div>
    );
}

export default App;