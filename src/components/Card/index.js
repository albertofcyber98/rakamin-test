import React from 'react'
import AddTask from '../Add-task'
import Childcard from '../Child-card'

export default function Card({title_task, border_color, bg_color, text_color, month, item_title, progress_bar}) {
    return (
        <div className={`border-solid border-2 rounded-md py-6 px-3 ${border_color} ${bg_color} mx-2 mb-4 xl:w-[350px]`}>
            <label className={`text-sm ${text_color} border-solid border-2 rounded-md ${border_color} px-3 py-1`}>{title_task}</label>
            <h4 className='pt-3 font-bold text-neutral-700'>{month}</h4>
            <Childcard item_title={item_title} progress_bar={progress_bar} />
            <AddTask/>
        </div>
    )
}
