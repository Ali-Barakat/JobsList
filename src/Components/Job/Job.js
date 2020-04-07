import React, { Component } from 'react';
import data from './data';
import './JobStyle.scss';
export default class Job extends Component {
  state = {
    jobs: data.map(jobs => jobs),
    jobsToShow: 'all'
  }


  updateShow = (s) => {
    this.setState({
      jobsToShow: s
    })

    console.log('form updateShow', this.state.jobsToshow)
  }

  
  render() {
    let jobs = [];
    const jobsToShow = this.state.jobsToShow;
    // let languages =this.state.jobs.map(job => job.languages);
    if (jobsToShow === 'all') {
      jobs = this.state.jobs;
    } else if (jobsToShow === 'featured') {
      jobs = this.state.jobs.filter(job => job.featured);
    } else if(jobsToShow === 'new') {
      jobs = this.state.jobs.filter(job => job.new)
    } else if(jobsToShow === 'Senior Frontend Developer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    } else if(jobsToShow === 'Fullstack Developer') {
      jobs = (this.state.jobs.filter(job => job.position === jobsToShow))
    }else if (jobsToShow === 'Junior Frontend Developer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    }else if (jobsToShow === 'Software Engineer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    } else if(jobsToShow === 'Junior Backend Developer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    } else if (jobsToShow === 'Junior Developer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    } else if (jobsToShow === 'Full Stack Engineer') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    }else if (jobsToShow === 'Front-end Dev') {
      jobs = this.state.jobs.filter(job => job.position === jobsToShow)
    }else if (jobsToShow === 'Frontend') {
      jobs = this.state.jobs.filter(job => job.role === jobsToShow)
    } else if (jobsToShow === 'Fullstack') {
      jobs = this.state.jobs.filter(job => job.role === jobsToShow)
    } else if (jobsToShow === 'Backend') {
      jobs = this.state.jobs.filter(job => job.role === jobsToShow)
    } else if (jobsToShow === 'Senior') {
      jobs = this.state.jobs.filter(job => job.level === jobsToShow)
    }else if (jobsToShow === 'Midweight') {
      jobs =  this.state.jobs.filter(job => job.level === jobsToShow)
    } else if (jobsToShow === 'Junior') {
      jobs = this.state.jobs.filter(job => job.level === jobsToShow)
    }else if (this.state.jobsToShow === 'HTML') {
      jobs = this.state.jobs.filter(job => job.languages && job.languages.indexOf(jobsToShow) > -1)
    } else if (this.state.jobsToShow === 'CSS') {
      jobs = this.state.jobs.filter(job => job.languages && job.languages.indexOf(jobsToShow) > -1)
    } else if (this.state.jobsToShow === 'JavaScript') {
      jobs = this.state.jobs.filter(job => job.languages && job.languages.indexOf(jobsToShow) > -1)
    } else if (this.state.jobsToShow === 'Python') {
      jobs = this.state.jobs.filter(job => job.languages && job.languages.indexOf(jobsToShow) > -1)
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
              {job.new ? (<span onClick={() => this.updateShow('new')} className="danger  u-mr-r--small">new </span>):null}
              {job.featured ? (<span onClick={() => this.updateShow('featured')} className="danger  featured">featured</span>):null}
          </div> {/* /title-first */}
          <div className="title-second  u-mr-b--small">
            <h3 onClick={() => this.updateShow(job.position)} className="position">{job.position}</h3>
          </div> {/* /title-second */}
          <span className="subline">{job.postedAt} - {job.contract} - {job.location}</span>
          </div> {/* /wrap__info */}
      <div className="fitler-tablets  u-pdd-r--large"><span onClick={() => this.updateShow(job.role)} className="danger  tablets  u-mr-r--small">{job.role}</span>
        <span onClick={() => this.updateShow(job.level)} className="danger  tablets  u-mr-r--small">{job.level}</span>
      {job.languages ? job.languages.map( (language) => 
      <span onClick={() => this.updateShow(language) } key={language} className="danger  tablets  u-mr-r--small">{language} </span>
      
      ) : null}</div>
        </div> /* /jobcard */
      )
    })

    return(
      <div>
        <div className="u-mr-b--small u-pdd-t--small">
          {(this.state.jobsToShow && this.state.jobsToShow !== 'all') ?
          <div className="header"><div className="wrap__tags"><span className="tags">{this.state.jobsToShow} {jobs.length}</span></div>
          <div className="wrap__clear"><span onClick={() => this.updateShow('all')} className="clear">clear</span></div></div> : null}
        </div>
        <div className="job-list">{jobList}</div>
      </div>
    )
  }
}