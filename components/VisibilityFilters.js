import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0rem 20rem;
  justify-content: center;
`;

const FilterText = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  margin: 2rem;
`;

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <Container>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <FilterText
            key={`visibility-filter-${currentFilter}`}
            className={
              ("filter", currentFilter === activeFilter && "filter--active")
            }
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </FilterText>
        );
      })}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
