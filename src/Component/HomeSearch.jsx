import React from 'react'
import { BookinSearch } from './BookinSearch'
import box1 from '../assets/image/booking/box (1).png'
import box2 from '../assets/image/booking/box (2).png'
import box3 from '../assets/image/booking/box (3).png'

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


         <div className="tab-content mt-5" id="myTabContent">
           <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
               
           <div className="container py-5">
               <div className="row">
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box1} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box2} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box3} alt="" /></div>
                 </div>
               </div>
             </div>
           </div>
           <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
               
           <div className="container py-5">
               <div className="row">
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box1} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box2} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box3} alt="" /></div>
                 </div>
               </div>

               <div className="row mt-4">
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box1} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box2} alt="" /></div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                   <div><img className='img-fluid MyImg' src={box3} alt="" /></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
    </div>
    </div>
   </section>
   </>
  )
}
