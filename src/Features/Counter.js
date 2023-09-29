import React from 'react'
import { increment , decrement } from './CounterSlice'
import { useSelector , useDispatch } from 'react-redux'

const Counter = () => {
const count = useSelector((state) => state.counter)
const dispatch = useDispatch()
return (
    <div>
 <div class="text-center">
        <h1 class="text-3xl font-semibold mb-4">Counter</h1>
        <div class="flex items-center justify-center space-x-4">
            <button   onClick={() => dispatch(decrement())} id="decrement" class="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">-</button>
            <span id="count" class="text-4xl font-bold">{count}</span>
            <button   onClick={() => dispatch(increment())} id="increment" class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">+</button>
        </div>
    </div>
    </div>
  )
}

export default Counter