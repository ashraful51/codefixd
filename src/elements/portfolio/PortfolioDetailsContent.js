import React from 'react';

const PortfolioDetailsContent = ({ data }) => {
    return (
        <div className="rwt-portfolio-details rn-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="inner">
                            <div className="details-list">
                                <div className="thumbnail alignwide">
                                    <img className="radius w-100 h-400" src={`${process.env.PUBLIC_URL}/${data.largeImage}`} alt="Corporate Image" />
                                </div>
                                <div className="portfolio-gallery mt--40">
                                <div className="gallery mt--30">
                                    <div className="thumbnail Container">
                                        <div className='row radius bg-port'>
                                            <div className="column pdt">

                                        <h1 className="titleOne">{data.titleOne}</h1>
                                       <div className="des" dangerouslySetInnerHTML={{__html: data.bodyOne}}></div> </div>
                                       <div className="column pdt"><img className="radius w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="Corporate Image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="row mt--40 row--30">
                                    <div className="col-lg-6">
                                        <div className="content-left">
                                
                                            <div className="single-list-wrapper">
                                                <div className="single-list">
                                                    <label>Date:</label>
                                                    <span>{data.date}</span>
                                                </div>
                                                <div className="single-list">
                                                    <label>Client:</label>
                                                    <span>{data.client}</span>
                                                </div>
                                                <div className="single-list">
                                                    <label>Category:</label>
                                                    <span>{data.category}</span>
                                                </div>
                                            </div>
                                            <div className="view-btn mt--50">
                                                <a className="btn-default btn-large round" href={`${data.btn.link}`}>{data.btn.buttontext}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                                        <div className="content-right">
                                            <h5 className="subtitle">{data.subtitle}</h5>
                                            <div className="description" dangerouslySetInnerHTML={{__html: data.bodyTwo}}></div>
                                            <div className="download-button mt--20">
                                            
                                            <a
                                              className="btn-read-more"
                                              target="_blank"
                                              rel="noreferrer"
                                              href="https://www.upwork.com/freelancers/ashraful41"
                                            >
                                              <span>View My Upwork Profile</span>
                                            </a>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetailsContent;
