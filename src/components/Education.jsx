import React, { useState } from 'react';
import { education } from '../utils/education';
import Combo from '../theme/Combo';
import Input from '../theme/Input';

const Education = () => {
    const [rows, setRows] = useState([{ id: 1 }]);
    const [counter, setCounter] = useState(2); // Start from 2 since the initial row has id 1

    const addRow = () => {
        setRows([...rows, { id: counter }]);
        setCounter(counter + 1);
    };

    const removeRow = () => {
        if (rows.length > 1) {
            setRows(rows.slice(0, -1));
            setCounter(counter - 1);
        }
    };

    return (
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <p className="text-xl font-semibold text-blue-700 border-b pb-2 mb-4">Education</p>
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
                <div key={row.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Combo name={`Education-${row.id}`} data={education} />
                    <Input type="text" name={`school/college-${row.id}`} title="School/College" placeholder="School/College" />
                    <Input type="text" name={`passing-${row.id}`} title="Passing Year" placeholder="Passing Year" />
                    <Input type="text" name={`percentage-${row.id}`} title="Percentage" placeholder="Percentage" />
                </div>
            ))}
        </div>
    );
};

export default Education;
