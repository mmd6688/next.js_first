// pages/graph.js

import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from '../styles/Table.module.css'; // 追加

const Graph = () => {
  // 表のデータ
    const tableData = [
        { id: 1, x: 1.2, y: 2 },
        { id: 2, x: 2.1, y: 4 },
        { id: 3, x: 3.3, y: 7 },
        { id: 4, x: 4.9, y: 9 },
        { id: 5, x: 5.6, y: 11 },
    ];

  // グラフのデータ
    const graphData = {
        datasets: [
            {
                label: 'Scatter Dataset',
                data: tableData.map(item => ({
                    x: item.x,
                    y: item.y
                })),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            }
        ]
    };

  // グラフのオプション
    const graphOptions = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
        <div style={{ width: '50%' }}>
            <h2>Table</h2>
            <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                <th className={styles.th}>#</th>
                <th className={styles.th}>X</th>
                <th className={styles.th}>Y</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row) => (
                <tr className={styles.tr} key={row.id}>
                    <td className={styles.td}>{row.id}</td>
                    <td className={styles.td}>{row.x}</td>
                    <td className={styles.td}>{row.y}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        <div style={{ width: '50%' }}>
            <h2>Graph</h2>
            <Scatter data={graphData} options={graphOptions} />
        </div>
        </div>
    );
};

export default Graph;
