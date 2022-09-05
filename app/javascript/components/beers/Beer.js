import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import SearchFields from './SearchFields';
import Table from './Table';
import SetPagination from './SetPagination';

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [search, setSearch] = useState(
    {
      id: "",
      name: "",
      first_brewed: "",
      yeast: "",
      abv: "",
    }
  )
  const [showPerPage, setShowPerPage] = useState(25)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end })
  };
  const pageDivider = (e) => {

    const filterResult = e.target.value
    if (filterResult === "" || filterResult == 0) {
      setShowPerPage(25)
    }
    else {
      setShowPerPage(filterResult)
    }
  }

  // SEARCH FILTERS FUNCTION

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setSearch({
      ...search,
      [name]: value,
    })
  }

  const setValues = async () => {
    let beer = searchApiData;
    if (search.id !== '' || search.name !== '' || search.first_brewed !== '' || search.yeast !== '' || search.abv !== '') {
      if (search.name !== '') {
        const filterResult = beer.filter(({ name }) => name.toLowerCase().includes(search.name.toLowerCase()))
        beer = filterResult;
        setBeer(filterResult)
      }
      if (search.first_brewed !== '') {
        const filterResult = beer.filter(({ first_brewed }) => first_brewed.toLowerCase().includes(search.first_brewed.toLowerCase()))
        beer = filterResult;
        setBeer(filterResult)
      }
      if (search.abv !== '') {
        const filterResult = beer.filter(({ abv }) => abv >= search.abv)
        beer = filterResult;
        setBeer(filterResult)
      }
      if (search.yeast !== '') {
        const filterResult = beer.filter(({ ingredients }) => ingredients.yeast.toLowerCase().includes(search.yeast.toLowerCase()))
        beer = filterResult;
        setBeer(filterResult)
      }
      if (search.id !== '') {
        const filterResult = beer.filter(({ id }) => id == search.id)
        setBeer(filterResult)
      }
    } else {
      setBeer(searchApiData)
    }
  }

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "/api/v1/beers"
      );
      setBeer(data.data.beers);
      setSearchApiData(data.data.beers)
    };
    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValues();
    }, 800);
    return () => clearTimeout(timer);
  }, [search])


  return (
    <>
      <div className='Beers'>
        <div className="header">
          <h1>Beers</h1>
        </div>
        <h2>Total Number Of beers {beer.length}</h2>
        <SearchFields search={search} inputEvent={inputEvent} />
        <Table beer={beer} pagination={pagination} />
      </div>
      <SetPagination showPerPage={showPerPage} beer={beer} Pagination={Pagination} onPaginationChange={onPaginationChange} pageDivider={pageDivider} />
    </>
  )
}

export default Beer