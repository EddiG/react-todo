import React from 'react';
import FilterLink from './FilterLink';

const FilterList = () =>
  <div>
    <FilterLink filter={'ALL_VISIBLE'}>All</FilterLink>
    <FilterLink filter={'ACTIVE_VISIBLE'}>Active</FilterLink>
    <FilterLink filter={'COMPLETE_VISIBLE'}>Complete</FilterLink>
  </div>;

export default FilterList;
