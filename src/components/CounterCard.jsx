import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByStep, decrementByStep, reset } from '../features/counter/counterSlice'
import { setStep, resetStep } from '../features/input/inputSlice'

const CounterCard = React.memo(() => {

    const count = useSelector((state) => state.counter)
    const step = useSelector((state) => state.input.step)
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-110 h-120 bg-[#2D2D2D] rounded-md shadow-2xl p-5 inter">
                <div className="w-full h-1/10 ">
                    <h2 className="text-white text-3xl font-bold">Counter App</h2>
                </div>
                <div className="flex justify-center items-center h-4/10 ">
                    <span className={`text-[#39E079] text-[120px] font-bold`}>{count}</span>
                </div>
                <div className='flex flex-col gap-3 h-5/10 py-2'>
                    <div className='w-full h-3/7 text-white text-center flex flex-col gap-2'>
                        <label className='text-[#CCCCCC] text-sm'>Step Value</label>
                        <input className='w-full  bg-[#1A1A1A] border border-[#555555] text-center rounded-lg items-center h-full' type="number" value={step} onChange={(e) => dispatch(setStep(e.target.value))} />
                    </div>
                    <div className='flex justify-between gap-5 w-full h-2/7'>
                        <button onClick={() => dispatch(incrementByStep(step))} className='w-1/2 bg-[#39E079] h-full text-white rounded-lg text-[18px] font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(57,224,121,0.3)] cursor-pointer'>Increase</button>
                        <button onClick={() => dispatch(decrementByStep(step))} className='w-1/2 bg-[#1A4A2A] h-full rounded-lg text-[18px] font-bold text-[#39E079] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0px_4px_20px_#4f735c] cursor-pointer'>Decrease</button>
                    </div>
                    <button onClick={() => {
                        dispatch(reset());
                        dispatch(resetStep());
                    }} className='bg-[#555555] w-full h-2/7 text-white rounded-lg text-[18px] font-bold transition-all duration-300 hover:bg-[#666666] cursor-pointer'>Reset</button>
                </div>
            </div>
        </>
    )
})

export default CounterCard
