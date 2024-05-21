import React from 'react';

export default function IssueAdd({ row }) {
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.status}</td>
            <td>{row.owner}</td>
            <td>{row.created.toDateString()}</td>
            <td>{row.effort}</td>
            <td>{row.due ? row.due.toDateString() : ''}</td>
            <td>{row.title}</td>
        </tr>
    );
}