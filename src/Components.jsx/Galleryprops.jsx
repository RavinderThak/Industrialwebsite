import React from 'react'

export default function Galleryprops(props) {
  return (
    <>
     <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure>
                    <img src={props.image} alt="#" />
                  </figure>
                </div>
              </div>
    </>
  )
}
