import React from 'react';
import FilterLink from './FilterLink';

const FilterList = () =>
  <div>
    <FilterLink filter={'all'} label={'All'} />
    <FilterLink filter={'active'} label={'Active'} />
    <FilterLink filter={'complete'} label={'Complete'} />
  </div>;

export default FilterList;
