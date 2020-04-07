import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;

// import { connect } from 'react-redux';
// import { setTodoVis } from '../redux/actions/todoActions';
// import Link from '../components/Link';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setTodoVis(ownProps.filter));
//     }
//   };
// };

// const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

// export default FilterLink;
