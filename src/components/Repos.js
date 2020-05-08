import React from "react";

const Repos = ({ repos }) => (
  <React.Fragment>
    {repos.map((rep) => (
      <div className="card mb-3" key={rep.id}>
        <div className="card-body">
          <h5>
            <a href={rep.html_url} rel="noopener noreferrer" target="blank">
              {rep.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </React.Fragment>
);

export default Repos
