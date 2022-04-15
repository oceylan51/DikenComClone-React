import React from 'react'

function UstMain() {
    return (<>
        <div className="ust-main">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active slider-button"
                    />
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                        className="slider-button"
                    />
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                        className="slider-button"
                    />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://picsum.photos/id/237/800/400"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://picsum.photos/id/237/800/400"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://picsum.photos/id/237/800/400"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev tik-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next tik-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </>
    )
}

export default UstMain