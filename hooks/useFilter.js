import { useSelector } from 'react-redux';

export default function useFilter(
  filterDataSelector,
  filterBehaviourSelector,
  localdataSelector,
  reducer,
  remoteApiUrlSelector
) {
  const filterBehaviour = useSelector(state => filterBehaviourSelector(state));
  const filterData = useSelector(state => filterDataSelector(state));

  const localSelector = (filter, data) => {
    return data.filter(todo => {
      if (filter) {
        let isMatched = false;
        reducer(todo).forEach(field => {
          if(field.includes(filter)) isMatched = true;
        });
        return isMatched;

      } else if (filter === '' || filter === undefined) return true;
      else return false;
    });
  };

  let data;

  if (filterBehaviour === 'remote') {
    let url = remoteApiUrlSelector && remoteApiUrlSelector(filterData);
    if (url) {
      let filteredData = remoteApiUrlSelector(filterData, state);
      data = filteredData;
    }
  } else {
    const localData = useSelector(
      state =>
        localdataSelector && localSelector(filterData, localdataSelector(state))
    );
    data = localData;
  }

  return data;
}
