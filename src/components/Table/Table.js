import React, { useEffect, useState } from 'react';
import AddItem from '../AddItem';
import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Books store</h2>

            <div className='table-fixed'>
                <table class="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Sl.</th>
                            <th scope="col">Author</th>
                            <th scope="col">Title</th>
                            <th scope="col">Original_language</th>
                            <th scope="col">Publish_date</th>
                            <th scope="col">Genres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{d.author}</td>
                                <td>{d.title}</td>
                                <td>{d.original_language}</td>
                                <td>{d.publish_date}</td>
                                <td>{d.genres}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <AddItem></AddItem>
        </div>
    );
};

export default Table;