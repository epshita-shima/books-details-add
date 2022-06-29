import React from 'react';

const AddItem = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const author = event.target.author.value;
        const title = event.target.title.value;
        const original_language = event.target.original_language.value;
        const publish_date = event.target.publish_date.value;
        const genres = event.target.genres.value;
        const booksDetail = { author, title, original_language, publish_date, genres };

        //send data to server

        fetch('http://localhost:5000/info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booksDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                alert('Info added successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <form onSubmit={handleAddItem} className="mt-4">
                <input className='me-4' type="text" name='author' placeholder='Author' required />
                <input className='me-4' type="text" name='title' placeholder='Title' required />
                <input className='me-4' type="text" name='original_language' placeholder='Original_language' required />
                <input className='me-4' type="text" name='publish_date' placeholder='Publish_date' required />
                <input className='me-4' type="text" name='genres' placeholder='Genres' required />
                <br /> <br />
                <input type="submit" value='Add Details' />
            </form>
        </div>
    );
};

export default AddItem;
