import React,{useState} from 'react'
import iconclose from './../../assets/close.svg'
import Input from '../Input';
import './index.css'
import iconplus from './../../assets/plus.svg'

export default function AddTask() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            <div className='pr-2 cursor-pointer flex pt-3' onClick={toggleModal} >
                <img src={iconplus} className='h-6 pr-1' alt='icon-plus'></img>
                <h5 className='text-neutral-700'>New Task</h5>
            </div>    
            {
                modal && (
                    <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2 className='title-modal font-bold text-2xl text-neutral-700'>Create Task</h2>
                        <Input label="Task Name" placeholder="Type your Task" width="w-full"/>
                        <Input label="Progress" placeholder="70%" width="w-50"/>
                            <div className='text-right pt-8'>
                                <button className='border-2 py-2 px-4 rounded-md hover:bg-neutral-200 transition-all duration-500' onClick={toggleModal}>Cancel</button>
                                <button className='bg-[#01959F] hover:bg-[#28a5ae] hover:border-[#28a5ae] transition-all duration-500 border-2 border-[#01959f] text-white py-2 px-4 rounded-md ml-4'>Save Task</button>
                            </div>
                        <button className="close-modal" onClick={toggleModal}>
                                <img src={iconclose} alt='icon-close'></img>
                        </button>
                    </div>
                    </div>
                )
            }
        </>
    )
}
