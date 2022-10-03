import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ColombianApplyForm.scss";
import { useAuth } from "../../hooks/useAuth";

export function ColombianApplyForm() {
  const auth = useAuth();
  const price = React.useRef();
  const tokenURI = React.useRef();
  const tokenId = React.useRef();

  const putInSale = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="supply__container">
      <div className="supply">
        <h1 className="supply__title">Submit Project</h1>
        <form className="supply-form" onSubmit={putInSale}>
          <div className="supply-form__container">
            <div className="supply-form-box">
              <div className="supply-form-box__container">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="supply-form-box__exclamation"
                />
                <div className="supply-form-box__head">
                  <p>Public Address</p>
                  <p style={{ color: "#69a6ce" }}>{auth.user.walletAddress}</p>
                </div>
              </div>
              <p>
                To improve your privacy, we recommend using an address which is
                already public or a new one-seeded through tornado.cash.
              </p>
            </div>
            <div className="supply-form-box" style={{ marginBottom: "2rem" }}>
              <div className="supply-form-box__container">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="supply-form-box__exclamation"
                />
                <div className="supply-form-box__head">
                  <p>Advice</p>
                </div>
              </div>
              <p>
                Submissions are final and cannot be edited. Be sure to follow
                all submission rules to not lose your deposit.
              </p>
            </div>
            <span>
              <p>Name </p>
              <input placeholder="Vitalik" />
            </span>
            <span>
              <p>Last Name </p>
              <input placeholder="Buterin" />
            </span>
            <span>
              <p>Project Name </p>
              <input placeholder="Biolumen" />
            </span>
            <span>
              <p>Bio </p>
              <textarea placeholder="Biolumen is an DAO that..." />
            </span>
            <div className="supply-form-box">
              <div className="supply-form-box__container">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="supply-form-box__exclamation"
                />
                <div className="supply-form-box__head">
                  <p>Pro Tip</p>
                </div>
              </div>
              <p>
                People can try to notify you of problems in your submission and
                save your deposit via your ethmail.cc. Make sure to check it
                while submission is being processed.
              </p>
            </div>
            <span>
              <p>Share project logo</p>
              <div className="supply-form-box-logo">
                <div className="supply-form-box-logo__container">
                  <div className="supply-form-box-logo__head">
                    <p>{"(Max Size: 2 MB | *.jpg, *.jpeg, *.png)"}</p>
                  </div>
                </div>
                <p>
                  People can try to notify you of problems in your submission
                  and save your deposit via your ethmail.cc. Make sure to check
                  it while submission is being processed.
                </p>
                <div className="supply-form-box__upload">
                  <button>Click here to browse file</button>{" "}
                </div>
              </div>
            </span>

            <div className="supply-form__create">
              <button>Submit</button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
