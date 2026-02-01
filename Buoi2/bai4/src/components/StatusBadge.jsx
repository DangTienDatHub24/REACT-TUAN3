import { useState } from "react";
import "./StatusBadge.css";

function StatusBadge({ initialStatus = "offline" }) {
    const [status, setStatus] = useState(initialStatus);

    return (
        <div className="status-container">
            <div className={`badge ${status}`}>{status}</div>

            <div className="btn-group">
                <button onClick={() => setStatus("online")}>Online</button>
                <button onClick={() => setStatus("offline")}>Offline</button>
                <button onClick={() => setStatus("busy")}>Busy</button>
            </div>
        </div>
    );
}

export default StatusBadge;