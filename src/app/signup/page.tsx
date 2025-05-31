import React from 'react'

const Page = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-gray-100 ">
            <form action="/signup" className='w-70' autoComplete="true">
            <h1 className='text-5xl font-bold text-center mb-4'>DYW</h1>
                <div className="mb-3 flex flex-col gap-2">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="name" id="" className="border-2 border-gray-300 rounded-md p-2"  required/>
                </div>
                <div className="mb-3 flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" className="border-2 border-gray-300 rounded-md p-2"  required/>
                </div>
                <div className="mb-3 flex flex-col gap-2">
                    <label htmlFor="">Paaword</label>
                    <input type="password" name="password" id="" className="border-2 border-gray-300 rounded-md p-2"  required/>
                </div>
                <button className='bg-black w-full  py-2 text-white my-2 rounded-lg hover:bg-zinc-900'>Submit</button>
                <div className="">
                    <p className='text-center'>Already have an account? <a href="/login" className='text-blue-500'>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Page