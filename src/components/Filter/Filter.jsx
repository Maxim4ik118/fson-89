import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from 'redux/products/products.reducer';
import { selectProductsFilterTerm } from 'redux/products/products.selectors';

const Filter = () => {
  const filterTerm = useSelector(selectProductsFilterTerm);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setFilterTerm(event.target.value));
  };

  return (
    <div>
      <input
        value={filterTerm}
        onChange={onChange}
        type="text"
        placeholder="Enter product name"
      />
    </div>
  );
};

export default Filter;
