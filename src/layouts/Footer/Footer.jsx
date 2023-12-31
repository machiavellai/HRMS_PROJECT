import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container py-5 mt-5">
      <div className="row">
        <div className="col">
          <Link to="/" className="navbar-brand fs-2 fw-bold">
            IN<span className="text-secondary">HIRES</span>
          </Link>
          <p className="text-muted">
            Finding the right talent for your organization is a crucial
            endeavor, and our HRMS simplifies the recruitment process from start
            to finish.
          </p>
          <div className="text-center align-items-center">
            <a
              href="mailto:oghenevictor54p@gmail.com"
              className="text-muted text-decoration-none link-muted"
            >
              <i className="bi bi-envelope text-primary my-5" />{" "}
              mail@INHIRES.com
            </a>
          </div>
        </div>
        <div className="col px-5">
          <p className="fw-bold fs-2 text-secondary">Useful Links</p>
          <ul className="list-group">
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Find Job
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Companies
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                About Us
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Post a Job
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <div className="col px-5">
          <p className="fw-bold fs-2 text-secondary">Job Titles</p>
          <ul className="list-group">
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Web Developer
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Software Developer
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                UI/UX Designer
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                Graphics Designer
              </Link>
            </li>
            <li className="list-group-item ps-0 border-0">
              <Link to="/" className="text-muted text-decoration-none">
                More
              </Link>
            </li>
          </ul>
        </div>
        <div className="col px-5">
          <p className="fw-bold fs-2 text-secondary">Follow Us</p>
          <ul className="list-group">
            <li className="list-group-item ps-0 border-0">
              <a
                href="/"
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Linked In
              </a>
            </li>
            <li className="list-group-item ps-0 border-0">
              <a
                href="/"
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="list-group-item ps-0 border-0">
              <a
                href="/"
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="list-group-item ps-0 border-0">
              <a
                href="/"
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
            <li className="list-group-item ps-0 border-0">
              <a
                href="/"
                className="text-muted text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
