import React from 'react'
import { All } from '../view/project'
import { clx } from '../components/custom/clx';

const AllProjectPage = () => {
  const classes = clx("w-[93%] lg:w-[90%] flex flex-col mx-auto pt-8");
  return (
    <div className={classes}>
        <All/>
    </div>
  )
}

export default AllProjectPage