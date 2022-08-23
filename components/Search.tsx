import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchText, setDropDownText } from '../actions';
import useFilter from '../hooks/useFilter';

let Search = () => {
  let [searchTerm, setSearchTerm] = useState();
  let [dropDownState, setDropDownState] = useState(false);

  let dispatch = useDispatch();
  //let [getLocations] = useLocation();
  
  let dropDownData = useFilter(
    state => state.dropDown,
    state => 'local',
    state => state.todos,
    reducer => [reducer.text],
    //(filterData, state) => getLocations(),
    null
  );

  function onChange(e) {
    e.target.value !== '' ? setDropDownState(true) : setDropDownState(false);
    dispatch(setDropDownText(e.target.value));
    setSearchTerm(e.target.value);
  }

  function onClick() {
    dispatch(setSearchText(searchTerm, 'local'));
  }

  function onClear() {
    setDropDownState(false);
    dispatch(setSearchText('', 'local'));
    setSearchTerm('');
  }

  function onDropDownSelected(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    setDropDownState(false);
  }

  return (
    <div style={{ float: 'right' }}>
      <input type="text" style={{ width: 362 }} onChange={onChange} value={searchTerm} />
      <button onClick={onClick}>Search</button>
      <button onClick={onClear}>Clear Filter</button>
      {dropDownState && (
        <div
          style={{
            width: '362px',
            height: '300px',
            backgroundColor: 'white',
            border: '1px',
            borderStyle: 'solid',
            display: 'flex',
            flexDirection: 'column',
            float: 'left'
          }}
          visibility={dropDownState}
        >
          {dropDownData.map(d => (
            <button
              onClick={onDropDownSelected}
              style={{ border: '1px', borderStyle: 'dottend', backgroundColor: 'white' }}
              value={d.text}
            >
              {d.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
