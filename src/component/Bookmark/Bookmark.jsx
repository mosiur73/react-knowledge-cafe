import PropTypes from 'prop-types';
import SingleBook from '../SingleBook/SingleBook';

const Bookmark = ({bookmark,readingTime}) => {
    return (
        <div className='w-1/3 ml-4'>
            <h2>Reading Time:{readingTime}</h2>
            <h2>Bookmark:{bookmark.length}</h2>
            {
                bookmark.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
            }
        </div>
    );
};
Bookmark.PropTypes={
    bookmark:PropTypes.func
   
}

export default Bookmark;