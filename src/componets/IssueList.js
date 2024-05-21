import React from 'react';
import IssueAdd from './IssueAdd';
import IssueTable from './IssueTable';
import IssueFilter from './IssueFilter';

export default function IssueList() {
    const issues = [
        {
            id: 1, status: 'New', owner: 'Me', created: new Date('2021-01-01'), effort: 5, due: undefined, title: 'Fix the issue'
        },
        {
            id: 2, status: 'Assigned', owner: 'Me', created: new Date('2021-01-01'), effort: 5, due: undefined, title: 'Fix the issue'
        }
    ];
    return (
        <div className='issueList'>
            <IssueFilter />
            <IssueAdd />
            <IssueTable issues={issues}/>
        </div>
    );
}
