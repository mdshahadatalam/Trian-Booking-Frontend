import React from 'react'
import { BookinSearch } from './BookinSearch'

export const HomeSearch = () => {
  return (
   <>
   <section className='HomeSearch'>
       <BookinSearch/>
    <div className="container">
        <div className="row">
              <ul className="nav nav-tabs mt-5 d-flex justify-between align-items-center" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <p className="nav-link navLi active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"         role="tab" aria-controls="home" aria-selected="true">Popular Tour Packages</p>
        </li>
        <li className="nav-item" role="presentation">
          <p className="nav-link navLiAll" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"         role="tab" aria-controls="profile" aria-selected="false">/ view all tours</p>
        </li>
      </ul>


         <div className="tab-content" id="myTabContent">
           <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
           <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
         </div>
    </div>
    </div>
   </section>
   </>
  )
}
