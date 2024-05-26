import { useCallback } from "react";
import InstructionsIcons from "./InstructionsIcons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkButtonClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="how-to-use-container-parent">
        <div className="how-to-use-container">
          <div className="how-to-use">
            <b className="how-to-use1">How to use MOGO eSIM?</b>
            <div className="user-types">
              <div className="background18">
                <button className="background19">
                  <div className="first-time-user">FIRST TIME USER</div>
                </button>
                <div className="returning-user-container">
                  <div className="returning-user">RETURNING USER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="instructions">
          <InstructionsIcons
            homeDataPlanLeft7UxzClBUp="/homedataplanleft7uxzclbupng@2x.png"
            selectESIMDataPlan="Select eSIM data plan"
          />
          <InstructionsIcons
            homeDataPlanLeft7UxzClBUp="/homescanleft41iwgehypng@2x.png"
            selectESIMDataPlan="Scan QR code to install"
          />
          <div className="instructions-icons1">
            <img
              className="home-activate-left-icdp4dkupn-icon"
              loading="lazy"
              alt=""
              src="/homeactivatelefticdp4dkupng@2x.png"
            />
            <div className="turn-on-data-roaming-to-activa-wrapper">
              <b className="turn-on-data">Turn on data roaming to activate</b>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials">
          <div className="testimonials-title">
            <b className="hear-what-mogo">Hear what MOGO users have to say</b>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="content1">
                <img className="image-icon7" alt="" src="/image-7.svg" />
              </div>
              <div className="container8">
                <div className="backgroundbordershadow12">
                  <div className="user">
                    <div className="info">
                      <div className="stars">
                        <img
                          className="image-icon8"
                          alt=""
                          src="/image-8.svg"
                        />
                        <img
                          className="image-icon9"
                          alt=""
                          src="/image-9.svg"
                        />
                        <img
                          className="image-icon10"
                          alt=""
                          src="/image-10.svg"
                        />
                        <img
                          className="image-icon11"
                          alt=""
                          src="/image-11.svg"
                        />
                        <img
                          className="image-icon12"
                          alt=""
                          src="/image-12.svg"
                        />
                      </div>
                      <div className="location">
                        <div className="country">
                          <div className="japan">Japan</div>
                        </div>
                        <img
                          className="image-icon13"
                          alt=""
                          src="/image-13@2x.png"
                        />
                      </div>
                    </div>
                    <div className="paragraph">
                      <div className="title">
                        <b className="excellent-customer">Excellent customer</b>
                        <b className="service">service!</b>
                      </div>
                      <div className="comment">
                        <div className="when-i-first">
                          When I first purchased an eSIM and asked their
                          customer
                        </div>
                        <div className="service-how-to">
                          service how to install and use it, they replied very
                          quickly and
                        </div>
                        <div className="patiently-so-that">
                          patiently, so that I was able to install it in just a
                          few minutes.
                        </div>
                        <div className="sentence">
                          <div className="the-overall-experience">
                            The overall experience was great! I'm also satisfied
                            and the
                          </div>
                          <div className="speed">
                            <div className="network-speed-is">
                              network speed is fast.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="miyazaki-yumi">Miyazaki Yumi</div>
                </div>
                <div className="background20" />
              </div>
            </div>
            <div className="testimonial-card1">
              <div className="container9">
                <div className="backgroundbordershadow13">
                  <div className="user1">
                    <div className="info1">
                      <div className="stars1">
                        <img
                          className="image-icon14"
                          alt=""
                          src="/image-8.svg"
                        />
                        <img
                          className="image-icon15"
                          alt=""
                          src="/image-9.svg"
                        />
                        <img
                          className="image-icon16"
                          alt=""
                          src="/image-10.svg"
                        />
                        <img
                          className="image-icon17"
                          alt=""
                          src="/image-11.svg"
                        />
                        <img
                          className="image-icon18"
                          alt=""
                          src="/image-12.svg"
                        />
                      </div>
                      <div className="location1">
                        <div className="country1">
                          <div className="usa">USA</div>
                        </div>
                        <img
                          className="image-icon19"
                          alt=""
                          src="/image-19@2x.png"
                        />
                      </div>
                    </div>
                    <div className="paragraph1">
                      <b className="great-coverage1">Great Coverage!</b>
                      <div className="comment1">
                        <div className="fast-and-best">
                          Fast and Best pricing! I have used MOGO several times
                          and
                        </div>
                        <div className="am-very-satisfied">
                          am very satisfied with their services and products.
                          They offer
                        </div>
                        <div className="data-plans-for">
                          data plans for almost every country.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="derrick">Derrick</div>
                </div>
                <div className="background21" />
                <div className="container10">
                  <div className="backgroundbordershadow14">
                    <div className="user2">
                      <div className="info2">
                        <div className="stars2">
                          <img
                            className="image-icon20"
                            alt=""
                            src="/image-20.svg"
                          />
                          <img
                            className="image-icon21"
                            alt=""
                            src="/image-20.svg"
                          />
                          <img
                            className="image-icon22"
                            alt=""
                            src="/image-20.svg"
                          />
                          <img
                            className="image-icon23"
                            alt=""
                            src="/image-20.svg"
                          />
                          <img
                            className="image-icon24"
                            alt=""
                            src="/image-20.svg"
                          />
                        </div>
                        <div className="location2">
                          <div className="country2">
                            <div className="canada2">
                              <div className="canada3">Canada</div>
                            </div>
                            <img
                              className="image-icon25"
                              alt=""
                              src="/image-25@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="feedback">
                        <b className="just-what-you-container">
                          <span>
                            <p className="just-what-you">
                              Just what you need for
                            </p>
                            <p className="your-trip">your trip</p>
                          </span>
                        </b>
                        <p className="very-simple-and-container">
                          <span>
                            <span className="very-simple-and">
                              Very simple and convenient! Before taking off, I
                              can easily
                            </span>
                            <span className="install-the-esim">
                              install the eSIM and use it when I land. We don't
                              have to buy a
                            </span>
                            <span className="local-sim-card">
                              local SIM card or lose them.
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="alan">Alan</div>
                  </div>
                  <div className="navigation">
                    <div className="list">
                      <div className="item-button" />
                      <div className="item-button1" />
                      <div className="item-button2" />
                      <div className="item-button3" />
                      <div className="item-button4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-wrapper">
                <img className="image-icon26" alt="" src="/image-2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="support">
        <div className="overlayshadow">
          <div className="background22">
            <div className="title-and-button-wrapper">
              <div className="title-and-button">
                <b className="what-devices-support1">
                  What devices support eSIM?
                </b>
                <button className="button5">
                  <div className="support-list">Support list</div>
                  <div className="image-container">
                    <img
                      className="image-icon27"
                      alt=""
                      src="/image-27@2x.png"
                    />
                  </div>
                </button>
              </div>
            </div>
            <img
              className="home-phone-37jxghkgpng-icon"
              loading="lazy"
              alt=""
              src="/homephone37jxghkgpng@2x.png"
            />
          </div>
          <div className="device-links">
            <div className="cant-find-your-container">
              <span className="cant-find-your-container1">
                <span>{`Can't find your device? Go to `}</span>
                <span className="mogo-sim-card">{`MOGO SIM CARD>>`}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="background23">
          <div className="frame-parent4">
            <div className="image-parent">
              <img className="image-icon28" alt="" src="/image-28@2x.png" />
              <b className="get-what-you-container">
                <span>
                  <p className="get-what-you">Get What You Give</p>
                  <p className="discount-for-both">10% discount for both</p>
                </span>
              </b>
            </div>
            <div className="get-your-friends-to-apply-your-wrapper">
              <p className="get-your-friends-container">
                <span>
                  <span className="get-your-friends">
                    Get your friends to apply your invitation code in their eSIM
                    first order and
                  </span>
                  <span className="both-of-you">
                    both of you can get a 10% discount data voucher.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <img className="image-icon29" alt="" src="/image1@2x.png" />
          <div className="link-button-wrapper">
            <button className="link-button10" onClick={onLinkButtonClick}>
              <b className="refer-your-friend">Refer Your Friend Now</b>
            </button>
          </div>
        </div>
      </div>
      <div className="background24">
        <b className="download-mogo-app-container">
          <span className="download-mogo-app-container1">
            <p className="download-mogo-app-manage-and">
              <span>{`Download MOGO App, `}</span>
              <span className="manage">manage</span>
              <span className="and"> and</span>
            </p>
            <p className="topup-your-esims-anywhere-any">
              <span className="topup">topup</span>
              <span> your eSIMs anywhere, anytime</span>
            </p>
          </span>
        </b>
        <img className="link-icon1" loading="lazy" alt="" src="/link@2x.png" />
        <img className="link-icon2" alt="" src="/link-1@2x.png" />
        <div className="app-info">
          <div className="gradient" />
          <img
            className="img-app-xfd5uxgppng-icon"
            loading="lazy"
            alt=""
            src="/img-appxfd5uxgppng@2x.png"
          />
        </div>
      </div>
    </div>
  );
};



export default FrameComponent;
