import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Legend
} from 'chart.js';

// Register the components
ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Legend
);

const MyWork = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Demo Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <section id="work" className="main style3 primary dark">
            <div className="content">
                <header>
                    
                    <h2>Taxonomy</h2>
                    <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                        id varius justo euismod in. Curabitur egestas consectetur magna.
                        {/* Additional text omitted for brevity */}
                    </p>
                </header>
                

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    
                    <div style={{ flex: '1', marginRight: '20px' }}>
                        <h3>Data Table</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2' }}>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Month</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>January</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>65</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>February</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>59</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>March</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>80</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>April</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>81</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>May</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>56</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>June</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>55</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>July</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ flex: '2', maxHeight: '400px' }}>
                        <h3>Demo Graph Representation</h3>
                        <Line data={data} />
                    </div>
                </div>
            </div>
            
            <footer>
                <a href="#one" className="button style2 down anchored">Next</a>
                <a href="#two" className="button style3 up anchored">Previous</a>
            </footer>
        </section>
    );
};

export default MyWork;