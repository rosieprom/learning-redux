import React, { useState } from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0rem 20rem;
  justify-content: center;
`;

const FilterText = styled.div`
  padding: 0.5rem;
`;

const CurrentFilterText = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ActiveFilterText = styled.button`
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
`;

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <Container>
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <FilterText
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter === activeFilter ? (
              <ActiveFilterText>{activeFilter}</ActiveFilterText>
            ) : (
              <CurrentFilterText>{currentFilter}</CurrentFilterText>
            )}
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
