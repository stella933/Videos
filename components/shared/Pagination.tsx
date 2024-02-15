"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'

const Pagination = ({arrayLength}:{arrayLength:number}) => {
    const [currPage,setCurrPage] =useState(1)
  return (
  <div className="w-full flex justify-center gap-5 mt-4">
    <Button className="hover:bg-PrimaryC" disabled={currPage === 1} onClick={() => setCurrPage(currPage + 1)}>Prev</Button>
    <Button className="hover:bg-PrimaryC" disabled={currPage === Math.ceil(arrayLength/ 30)} onClick={() => setCurrPage(currPage - 1)}>Next</Button>
  </div>
  )
}

export default Pagination