import React, { useEffect, useState } from 'react';
import ShowDesing from '../ShowDesing/ShowDesing';

const Desing = () => {
    const [projects, setProject]= useState([])

    useEffect(()=>{
        fetch('desing.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProject(data)
        })
    },[])
    return (
        <div>
            <div id='project' className='md:p-10 mb-6'>

            <p className='text-center text-xl mb-12 text-white'>Only Desing </p>

            <div className='px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ' >
                {
                    projects.map(project => <ShowDesing
                        key={project.id}
                        project={project}
                    >

                    </ShowDesing>)
                }
            </div>
        </div>
        </div>
    );
};

export default Desing;