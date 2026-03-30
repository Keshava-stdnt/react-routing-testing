import { useContext } from 'react';
import { incrementContextCreation } from '../context/IncrementContext';

function History() {
    const { history } = useContext(incrementContextCreation);

    return (
        <div className='card-content'>
            <h2 className="card-title">Counter History</h2>
            <div className="history-list">
                {history.length === 0 ? (
                    <p>No actions yet.</p>
                ) : (
                    <ul className="list-group">
                        {history.slice(-10).reverse().map((entry, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{entry.action} to {entry.value}</span>
                                <small className="text-muted">{entry.timestamp}</small>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default History;