import React from 'react';
import './ShowProject.css'
const ShowProject = ({ project }) => {
    const { name, link, photo,client,server } = project
    console.log(name);
    return (
        <div className="rounded-2xl border item shadow " data-aos="zoom-in">
            <figure className="p-2">

                <img src={photo} alt="" className="rounded-xl" />

            </figure>
            <div className="card-body w-full px-4 py-8">
                <h2 className="chef-name">Website Name: {name}</h2>
                <div className="flex justify-between gap-12  bottom-0">

                    <div className='py-4'>
                        <button className="btn-sm rounded font-semibold text-black btn btn-outline btn-info"> <a href={link} target='_blank'>Live </a> </button>
                    </div>
                    <div className=' flex py-4'>
                        <button className="btn-sm rounded font-semibold text-black btn btn-outline btn-info mr-2"> <a href={client} target='_blank'>Client </a> </button>
                        <button className="btn-sm rounded font-semibold text-blackbtn btn btn-outline btn-info"> <a href={server} target='_blank'>Server </a> </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowProject;