import React from 'react';
import './ShowDesing.css'

const ShowDesing = ({ project }) => {
    const { name, link, photo,client } = project
    console.log(name);
    return (
        <div>
            <div className="rounded-2xl border item shadow " data-aos="fade-up-left">
                <figure className="p-2">

                    <img src={photo} alt="" className="rounded-xl" />

                </figure>
                <div className="card-body w-full px-4 py-8 ">
                    <h2 className="chef-name">Website Name: {name}</h2>
                    <div className="flex justify-between gap-12  bottom-0">

                        <div className='py-4'>
                            <button className="btn-sm rounded font-semibold text-black btn btn-outline btn-info"> <a href={link} target='_blank'>Live </a> </button>
                        </div>
                        <div className='py-4'>
                            <button className="btn-sm rounded font-semibold text-black btn btn-outline btn-info"> <a href={client} target='_blank'>Code</a> </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDesing;