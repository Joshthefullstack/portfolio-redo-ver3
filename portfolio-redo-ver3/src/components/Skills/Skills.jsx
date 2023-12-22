import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Toolkit</h1>
      <section>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/html.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>HTML</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/css3.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>CSS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/javascript.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Javascript</p>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/react.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>React</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/nextjs_icon_212861.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NextJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/typescript.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Typescript</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/pngwing.com.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NestJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/node-removebg-preview.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>NodeJS</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="/assets/mongo-db.png" alt="" />
              </div>
            </div>
            <ul className="sci">
              <li>
                <p>Mongo DB</p>
              </li>
            </ul>
          </div>

          
          <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="/assets/github.png" alt=''/>
            </div>
          </div>
          <ul className="sci">
            <li>
              <p>Github</p>
            </li>
          </ul>
          </div>
          
          <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src="/assets/git.png" alt=''/>
            </div>
          </div>
          <ul className="sci">
            <li>
              <p>Git</p>
            </li>
          </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Skills;
