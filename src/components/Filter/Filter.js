import React from "react";
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
    <>
        <label htmlFor="find" className={css.Filter}>Find contacts by <span className={css.Filter__text}>name</span></label>
        <input type="text" value={value} className={css.Filter__input} onChange={onChange} />
    </>
);

export default Filter;