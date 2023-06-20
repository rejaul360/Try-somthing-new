import React from 'react';

const ShowProject = ({ project }) => {
    const {  name, link, photo } = project
    console.log(name);
    return (
        <div className="rounded-lg border items shadow">
                <figure className="p-4">
                  
                        <img src={photo} alt="" className="rounded-xl" />
                
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="chef-name">Name: {name}</h2>
                    {/* <p className='experience'>Experience: {experience}</p> */}
                    <div className="flex justify-between gap-12 mt-4 ">
            
                            <button className="live">Live Link</button>
                    </div>
                </div>
            </div>
    );
};

export default ShowProject;