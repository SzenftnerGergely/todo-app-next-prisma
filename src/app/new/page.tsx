import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form className='flex gap-2 flex-col'>
        <input
          type="text"
          name="title"
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded
          outline-none bg-transparent focus-within:border-slate-100'
        />
      </form>
      <div className='flex gap-1 justify-end mt-2'>
        <Link href=".." className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
        <button type='submit' className="border border-slate-300 text-slate-300 px-2 py-1 rounded
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
      </div>
    </>
  )
}
