import React from 'react';
import { Commit } from "../commit.interface";
import styles from './CommitList.module.css';

interface CommitListProps {
    commits: Commit[];
}

const CommitList: React.FC<CommitListProps> = ({ commits }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Commit List</h2>
            <ul className="space-y-4">
                {commits.map((commit) => (
                    <li key={commit.sha} className={styles.commitItem}>
                        <h3 className={styles.commitAuthor}>Author: {commit.commit.author.name}</h3>
                        <p className={styles.commitDate}>
                            Date: {new Date(commit.commit.author.date).toLocaleString()}
                        </p>
                        <p className={styles.commitMessage}>{commit.commit.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommitList;