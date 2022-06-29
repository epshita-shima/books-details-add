import React, { useEffect, useState } from 'react';
import AddItem from '../AddItem';
import { CSVLink } from 'react-csv';
import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    const headers = [
        { label: 'Author', key: 'author' },
        { label: 'Title', key: 'title' },
        { label: 'Original_language', key: 'original_language' },
        { label: 'Publish_date', key: 'publish_date' },
        { label: 'Genres', key: 'genres' }
    ]
    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    };
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
            <button className='btn btn-light mt-4'><CSVLink {...csvReport} className='text-decoration-none text-dark fw-bold'>Generate</CSVLink></button>
        </div>
    );
};

export default Table;