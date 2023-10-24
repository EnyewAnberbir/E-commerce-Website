import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      Create a Listing
    </h1>
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
      <div className='flex flex-col gap-4 flex-1'>
        <input
          type='text'
          placeholder='Name'
          className='border p-3 rounded-lg'
          id='name'
          maxLength='62'
          minLength='10'
          required
          onChange={handleChange}
          value={formData.name}
        />
        <textarea
          type='text'
          placeholder='Description'
          className='border p-3 rounded-lg'
          id='description'
          required
          onChange={handleChange}
          value={formData.description}
        />
        {/* ... Other input elements and form controls ... */}
      </div>
      <div className='flex flex-col flex-1 gap-4'>
        <p className='font-semibold'>
          Images:
          <span className='font-normal text-gray-600 ml-2'>
            The first image will be the cover (max 6)
          </span>
        </p>
        <div className='flex gap-4'>
          <input
            onChange={(e) => setFiles(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full'
            type='file'
            id='images'
            accept='image/*'
            multiple
          />
          <button
            type='button'
            disabled={uploading}
            onClick={handleImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          > Create Listing
          </button>
        </div>

      </div>
    </form>
  </main>
  
  )
}
