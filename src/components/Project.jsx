import React, { useState } from 'react';
import Input from '../theme/Input';

const Project = () => {
    const [rows, setRows] = useState([{ id: 1 }]);
    const [count, setCount] = useState(2); // Start from 2 since the initial row has id 1

    const addRow = () => {
        setRows([...rows, { id: count }]);
        setCount(count + 1);
    }

    const removeRow = () => {
        if (rows.length > 1) {
            setRows(rows.slice(0, -1));
            setCount(count - 1);
        }
    }

    return (
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-blue-700 border-b pb-2 mb-4">Project</p>
            <div className="flex justify-end mb-4 gap-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    onClick={addRow}
                >
                    Add
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                    onClick={removeRow}
                >
                    Remove
                </button>
            </div>
            {rows.map((row) => (
                <div key={row.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Input type="text" name={`title-${row.id}`} title="Project Title" placeholder="Project Title" />
                    <Input type="text" name={`link-${row.id}`} title="Project Link" placeholder="Project Link" />
                    <Input type="text" name={`description-${row.id}`} title="Project Description" placeholder="Project Description" />
                </div>
            ))}
        </div>
    );
}

export default Project;
