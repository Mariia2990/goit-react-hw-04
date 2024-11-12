import css from './SearchBar.module.css'
import { IoIosSearch } from "react-icons/io";
import { Field, Form, Formik } from 'formik'
import toast from 'react-hot-toast';

export default function SearchBar({onSubmit}) {

    const initialValues = { query: '' };
    const handleSubmit = (values, { resetForm }) => {
        if (values.query.trim() === '') {
            return toast.error("Please fill in the field");
        }
        onSubmit(values.query);
        resetForm(); 
    };

    return (
        <header className={css.header}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.form}>
                    <IoIosSearch className={css.iconSearch} />
                    <Field
                        name="query" 
                        className={css.searchInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button className={css.buttonSearch} type="submit">Search</button>
                </Form>
            </Formik>
        </header>

    )
}