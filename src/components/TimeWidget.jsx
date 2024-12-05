import React from 'react'


function TimeWidget(){
    return(
        <>
            <div className='p-2 '>
                <div className='flex p-2 ring-4 rounded-sm ring-slate-400 text-center gap-2'>
                    <div className='text-4xl font-bold m-0'>10 <br /> 37</div>
                    <div className='flex flex-col font-bold text-sm'>
                        <p>Tuesday</p>
                        <p>May 26</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeWidget