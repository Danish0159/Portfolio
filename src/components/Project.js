import React from 'react'

function Project({ imgSrc, name, url, githubUrl, description }) {

    return (
        <div className="project">
            <div className="project__imgdiv">
                <img className="project__img" src={imgSrc} alt="" />
            </div>
            <div className="projectC">
                <h3 className="projectC__title">{name}</h3>
                <div className="projectC__skills">
                    <p>{description}
                    </p>
                </div>
                <div className="projectC__btn">
                    <a href={url} className="btn-small btn-project" target="_blank">
                        See Live
                    </a>
                    <a href={githubUrl} className="btn-small btn-project" target="_blank">
                        See Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project


