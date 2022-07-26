import React, {useState} from 'react'
import checklist from './../../assets/checklist.svg'
import setting from './../../assets/setting.svg'
import iconclose from './../../assets/close.svg'
import Input from '../Input';
import './index.css'

export default function Progress({progress_bar}) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    let progress = "";
    let color = "bg-cyan-500";
    let persen = "100";
    if (progress_bar === '100') {
        progress = "w-full"
        color = 'bg-[#43936C]'
    } else if (progress_bar === '90') {
        progress = "w-[90%]"
        persen = "90"
    }else if (progress_bar === '80') {
        progress = "w-[80%]"
        persen = "80"
    }else if (progress_bar === '70') {
        progress = "w-[70%]"
        persen = "70"
    }else if (progress_bar === '60') {
        progress = "w-[60%]"
        persen = "60"
    }else if (progress_bar === '50') {
        progress = "w-[50%]"
        persen = "50"
    }else if (progress_bar === '40') {
        progress = "w-[40%]"
        persen = "40"
    }else if (progress_bar === '30') {
        progress = "w-[30%]"
        persen = "30"
    }else if (progress_bar === '20') {
        progress = "w-[20%]"
        persen = "20"
    }else if (progress_bar === '10') {
        progress = "w-[10%]"
        persen = "10"
    }else if (progress_bar === '0') {
        progress = "w-0"
    }
  return (
      <div className='flex'>
          <div className='w-full h-5 bg-slate-200 rounded-xl' >
              <div className={`${color} rounded-xl ${progress} w-full h-5`}>
                  
              </div>
          </div>
          <div className='pl-3'>
              {persen === "100" ?
                  (<img src={checklist} className='w-7' alt='icon-checklist' />) :
                  (<h6 className='text-neutral-400'>{persen}%</h6>)
                }
          </div>
          <div className='pl-7'>
              <img src={setting} className='w-8 hover:cursor-pointer' alt='icon-setting' onClick={toggleModal}></img>
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
    </div>
  )
}
