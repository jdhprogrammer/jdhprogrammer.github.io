import React from 'react'
import "./Project.css"

function Project({project, thumb}) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4 text-center">
            <div className="row">
                <div className="col p-3">
                    <p className="mb-0" style={{"fontSize": "25px"}}>{project.name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href={project.deploy} target="_blank" rel="noreferrer">
                        <img src={thumb} className="img-fluid rounded mx-auto d-block poFoImg" alt={project.alt} />
                    </a>
                    <a className="poFoLinks" target="_blank" rel="noreferrer" href={project.deploy}>[visitDeployedApplication]</a>
                    <a className="poFoLinks" target="_blank" rel="noreferrer" href={project.repo}>&#123;visitGitHubProject&#125;</a>
                </div>
            </div>
        </div>
    )
}

export default Project;