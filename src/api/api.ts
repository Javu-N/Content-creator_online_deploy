import { book_mock_data } from '@/api/mock/book_data'
import { PinkPoeWorks } from '@/api/mock/book_data';

// Mock API 
export const get_books = () => {
    return book_mock_data;
}

export const get_author_works = () => {
    return PinkPoeWorks;
}