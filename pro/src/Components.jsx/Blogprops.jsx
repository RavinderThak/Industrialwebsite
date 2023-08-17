import React from 'react'

export default function Blogprops(props) {
  return (
    <>
     <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure>
                      <img src={props.image} alt="#" />
                    </figure>
                  </div>
                  <div className="blog_room">
                    <h3>{props.name}</h3>
                    <span>The standard chunk </span>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need to be
                      sure there isn't anything embarrassing hidden in the middle of
                      text. All the Lorem Ipsum generatorsIf you are{" "}
                    </p>
                  </div>
                </div>
              </div> 
    </>
  )
}
