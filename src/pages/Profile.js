import React, { useContext, useEffect } from "react";
import { GithubContext } from "../context/github/githubContext";
import { Link, withRouter } from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlname = match.params.name;

  useEffect(() => {
    getUser(urlname);
    getRepos(urlname);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
  } = user;

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-link">
        Go home
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img alt='ava' src={avatar_url} style={{width: '250px'}}/>
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <React.Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </React.Fragment>
              )}
              <a href={html_url} target="blank" className="btn btn-dark">
                Open Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong> {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary">
                Subscribers: {followers}
              </div>
              <div className="badge badge-success">Subscribed: {following}</div>
              <div className="badge badge-info">Repository: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </React.Fragment>
  );
};

export default withRouter(Profile);
