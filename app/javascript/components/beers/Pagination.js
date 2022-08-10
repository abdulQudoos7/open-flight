import React, { useState, useEffect } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  // let buttons = Math.ceil(total / showPerPage);
  const [numberOfButtons, setNumberOfButtons] = useState(0)
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    setNumberOfButtons(Math.ceil(total / showPerPage))
    // console.log(`numberOfButtons => ${numberOfButtons}`)
  }, [showPerPage,total])


  useEffect(() => {
    const value = showPerPage * counter;
    // console.log(" start Value ", value - showPerPage)
    // console.log(" end Value ", value)
    onPaginationChange(value - showPerPage, value)
  }, [counter])

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value)
  }, [showPerPage])


  const onButtonClick = (type) => {
    if (type === "previous") {
      if (counter === 1) {
        // setCounter(1);
      } else {
        setCounter(counter - 1)
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        // setCounter(counter)
      } else {
        setCounter(counter + 1)
      }
    }
  }

  return (
    <>
    <style>{`
    .btnLinks{
      border: 1px solid;
      margin: 2px;
    }
    .btnLinks:hover{
      cursor: pointer;  
    }
  `}
    </style>
    <div>
      <div>
        <h2>{numberOfButtons} buttons </h2>
        <h2>{total} Total </h2>
        <h2>{total/showPerPage} total / showPerPage </h2>

        <button onClick={() => onButtonClick("previous")} > Previous </button>
        {showPerPage && new Array(numberOfButtons).fill("").map((el, index) => (
          <a className='btnLinks' onClick={() => setCounter(index + 1)} key={`page-${index}`} > {index + 1} </a>

        ))}
        <button onClick={() => onButtonClick("next")} > Next </button>

      </div>
    </div>
    </>
  )
}

export default Pagination