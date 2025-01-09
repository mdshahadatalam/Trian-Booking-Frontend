import React from 'react'

export const BookinSearch = () => {
  return (
    <>
    <section className='bg-[#000000] bookinHT  nav h-[300px]'>
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center pt-20">
            {/* Activity Dropdown */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4">
                <div className='mt-3'>
                    <h4 className='activity text-white'>Activity</h4>
                    <form>
                        <select  className='select shadow-md w-full p-2 rounded'>
                            <option value="au">Chittagong</option>
                            <option value="ca">Dhaka</option>
                            <option value="usa">Shylet</option>
                            <option value="usa">Borishal</option>
                            <option value="usa">Rajshahi</option>
                            <option value="usa">Cox bazar</option>
 
                        </select>
                    </form>
                </div>
            </div>

            {/* Destination Dropdown */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4">
                <div className='mt-3'>
                    <h4 className='activity text-white'>Destination</h4>
                    <form>
                        <select className='select shadow-md w-full p-2 rounded'>
                        <option value="au">Chittagong</option>
                            <option value="ca">Dhaka</option>
                            <option value="usa">Shylet</option>
                            <option value="usa">Borishal</option>
                            <option value="usa">Rajshahi</option>
                            <option value="usa">Cox bazar</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* Date Input */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4">
                <div className='mt-3'>
                    <h4 className='activity text-white'>Date</h4>
                    <form>
                        <input className='select shadow-md w-full p-2 rounded' type="date" />
                    </form>
                </div>
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4">
                <div className='pt-8'>
                <button className='selectBtn w-full p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
                   Search
                  </button>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}
