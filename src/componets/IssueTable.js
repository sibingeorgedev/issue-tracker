import React from 'react';
import IssueRow from './IssueRow';

export default function IssueTable({ issues }) {
    return (
        <div className='innerChild' style={{ backgroundColor: "Yellow" }}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <IssueRow row={issue} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
