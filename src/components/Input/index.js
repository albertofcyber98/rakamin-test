import React from 'react'

export default function Input({label, placeholder, width}) {
  return (
      <>
        <div className='pt-6'>
            <label>{label}</label>
        </div>
        <div className='pt-2'>
            <input type="" id="" className={`h-10 ${width} rounded-md border-2 pl-3 text-sm`} placeholder={placeholder} name=""/>
        </div>
      </>
  )
}
