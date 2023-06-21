import React from 'react';
import './ShowDesing.css'

const ShowDesing = ({project}) => {
    const {  name, link, photo } = project
    console.log(name);
    return (
        <div>
            <div className="rounded-2xl border item shadow " data-aos="fade-up-left">
                <figure className="p-2">
                  
                        <img src={photo} alt="" className="rounded-xl" />
                
                </figure>
                <div className="card-body ">
                    <h2 className="chef-name">Website Name: {name}</h2>
                    <div className="flex justify-between gap-12  bottom-0">
            
                            <button className="btn-sm rounded-md btn-primary"> <a href={link} target='_blank'>Live Link</a> </button>
                           
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDesing;