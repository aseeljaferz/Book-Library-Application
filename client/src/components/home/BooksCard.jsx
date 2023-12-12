import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiInfoCircle, BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BooksSingleCard from "./BooksSingleCard";

const BooksCard = ({ books, searchQuery}) => {
    const filterBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()) || book.publishYear.toString()>=searchQuery ;
    })
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterBooks.map((item) => (
                <BooksSingleCard key={item._id} book={item} />
            ))}
        </div>
    )
}

export default BooksCard