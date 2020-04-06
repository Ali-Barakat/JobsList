import React, { Component } from 'react';
import data from './data';
import './JobStyle.scss';
export default class Job extends Component {
  state = {
    jobs: data.map(jobs => jobs),
    jobsToShow: 'all'
  }


  UpdateShow = (s) => {
    this.setState({
      jobsToShow: s
    })
  }

  
  render() {
    let jobs = [];
    if (this.state.jobsToShow === 'all') {
      jobs = this.state.jobs;
    } else if (this.state.jobsToShow === 'featured') {
      jobs = this.state.jobs.filter(job => job.featured)
    } else if(this.state.jobsToShow === 'new') {
      jobs = this.state.jobs.filter(job => job.new)
    }
    const jobList = jobs.map(job => {
      return (
        <div className="job-card  u-mr-b--large" key={job.id}>
          <div className="logo  u-mr-r--medium  u-pdd-35">
            <img className="pic" src={require('/images' + job.logo)} alt="comapny logo" width="50px" />
          </div> {/* /logo */}
          <div className="wrap__content  u-mr-r--medium  u-pdd-35">
          <div className="title-first u-mr-b--small">
            <h4 className="company-name  u-mr-r--small">{job.company}</h4>
              {job.new ? (<span onClick={() => this.UpdateShow('new')} className="danger  u-mr-r--small">new </span>):null}
              {job.featured ? (<span onClick={() => this.UpdateShow('featured')} className="danger  featured">featured</span>):null}
          </div> {/* /title-first */}
          <div className="title-second  u-mr-b--small">
            <h3 className="position">{job.position}</h3>
          </div> {/* /title-second */}
          <span className="subline">{job.postedAt} - {job.contract} - {job.location}</span>
          </div> {/* /wrap__info */}
      <div className="fitler-tablets  u-pdd-r--large"><span className="danger  tablets  u-mr-r--small">{job.role}</span><span className="danger  tablets  u-mr-r--small">{job.level}</span>
      {job.languages ? job.languages.map( (language) => 
      <span key={language} className="danger  tablets  u-mr-r--small">{language}</span>
      ) : null}</div>
        </div> /* /jobcard */
      )
    })

    return(
      <div>

    <div className="job-list">{jobList}</div>
      </div>
    )
  }
}