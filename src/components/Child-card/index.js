import React from 'react'
import Progress from '../Progress-count'

export default function Childcard({item_title,progress_bar}) {
  return (
    <div className='bg-neutral-50 py-5 mt-2 px-4 border-solid border-[1px] border-neutral-300 rounded-md'>
        <h2 className='font-bold text-neutral-700 text-lg'>{item_title}</h2>
        <hr className='border-[0px] border-b-2 border-dashed border-neutral-300 my-3' />
          <Progress progress_bar={progress_bar} />
    </div>
  )
}
