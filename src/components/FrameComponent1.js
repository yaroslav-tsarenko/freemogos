import Background from "./Background";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent ${className}`}>
      <div className="discount-container-wrapper">
        <div className="discount-container">
          <div className="discount-content">
            <b className="unlock-exclusive-15-container">
              <span>
                <p className="unlock-exclusive">Unlock Exclusive</p>
                <p className="discount-for">15% Discount for</p>
                <p className="visa-cardholders">Visa Cardholders!</p>
              </span>
            </b>
            <p className="experience-seamless-connectivi-container">
              <span>
                <span className="experience-seamless-connectivi">
                  Experience seamless connectivity with
                </span>
                <span className="discount-exclusively">
                  15% discount - Exclusively for Visa
                </span>
                <span className="cardholders">Cardholders</span>
              </span>
            </p>
            <button className="link-button9">
              <div className="check-it-out">Check it out</div>
            </button>
          </div>
          <img
            className="link-170732171111816png"
            loading="lazy"
            alt=""
            src="/link--170732171111816png@2x.png"
          />
        </div>
      </div>
      <div className="data-plan-container-wrapper">
        <div className="data-plan-container">
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="background5" />
              <div className="background6" />
            </div>
          </div>
          <div className="search-inputs">
            <div className="search-input-labels">
              <b className="where-are-you">Where are you going?</b>
            </div>
            <div className="input5">
              <img className="image-icon" alt="" src="/image.svg" />
              <input
                className="search-for-data"
                placeholder="Search for data plans"
                type="text"
              />
            </div>
            <div className="search-input-labels1">
              <div className="what-devices-support">{`What devices support eSIM? >`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundbordershadow-wrapper">
        <div className="backgroundbordershadow">
          <div className="e-sim-type-content">
            <div className="e-sim-type-options">
              <h2 className="item-local">Local eSIMs</h2>
              <h2 className="item-regional">Regional eSIMs</h2>
            </div>
          </div>
          <div className="background7" />
          <div className="destination-container-parent">
            <div className="destination-container">
              <div className="backgroundbordershadow1">
                <div className="destination-card-containers">
                  <img
                    className="capng-icon1"
                    loading="lazy"
                    alt=""
                    src="/capng@2x.png"
                  />
                  <div className="destination-names-container">
                    <div className="container1">
                      <h2 className="canada1">Canada</h2>
                    </div>
                  </div>
                </div>
                <div className="starting-from-parent">
                  <div className="starting-from">Starting from</div>
                  <div className="data-size-container">
                    <div className="mb">500MB</div>
                    <div className="separator">$2.90</div>
                  </div>
                </div>
                <div className="days1">3Days</div>
              </div>
              <div className="backgroundbordershadow2">
                <div className="aepng-parent">
                  <img
                    className="aepng-icon"
                    loading="lazy"
                    alt=""
                    src="/aepng@2x.png"
                  />
                  <div className="container-wrapper">
                    <div className="container2">
                      <h2 className="united-ara">United Ara…</h2>
                    </div>
                  </div>
                </div>
                <div className="starting-from-group">
                  <div className="starting-from1">Starting from</div>
                  <div className="mb-parent">
                    <div className="mb1">500MB</div>
                    <div className="div1">$5.00</div>
                  </div>
                </div>
                <div className="days2">3Days</div>
              </div>
              <div className="backgroundbordershadow3">
                <div className="gbpng-parent">
                  <img
                    className="gbpng-icon"
                    loading="lazy"
                    alt=""
                    src="/gbpng@2x.png"
                  />
                  <div className="container-container">
                    <div className="container3">
                      <h2 className="uk">UK</h2>
                    </div>
                  </div>
                </div>
                <div className="starting-from-container">
                  <div className="starting-from2">Starting from</div>
                  <div className="gb-parent">
                    <div className="gb1">1GB</div>
                    <div className="english">$2.00</div>
                  </div>
                </div>
                <div className="days3">15Days</div>
              </div>
              <div className="backgroundbordershadow4">
                <div className="depng-parent">
                  <img
                    className="depng-icon"
                    loading="lazy"
                    alt=""
                    src="/depng@2x.png"
                  />
                  <div className="container-frame">
                    <div className="container4">
                      <h2 className="germany">Germany</h2>
                    </div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="starting-from3">Starting from</div>
                  <div className="gb-group">
                    <div className="gb2">1GB</div>
                    <div className="div2">$2.00</div>
                  </div>
                </div>
                <div className="days4">15Days</div>
              </div>
              <div className="backgroundbordershadow5">
                <div className="llpng-parent">
                  <img
                    className="llpng-icon"
                    loading="lazy"
                    alt=""
                    src="/llpng@2x.png"
                  />
                  <div className="container-wrapper1">
                    <div className="container5">
                      <h2 className="israel">Israel</h2>
                    </div>
                  </div>
                </div>
                <div className="starting-from-parent1">
                  <div className="starting-from4">Starting from</div>
                  <div className="mb-group">
                    <div className="mb2">500MB</div>
                    <div className="div3">$3.00</div>
                  </div>
                </div>
                <div className="days5">3Days</div>
              </div>
              <div className="backgroundbordershadow6">
                <div className="frpng-parent">
                  <img
                    className="frpng-icon"
                    loading="lazy"
                    alt=""
                    src="/frpng@2x.png"
                  />
                  <div className="container-wrapper2">
                    <div className="container6">
                      <h2 className="france">France</h2>
                    </div>
                  </div>
                </div>
                <div className="starting-from-parent2">
                  <div className="starting-from5">Starting from</div>
                  <div className="gb-container">
                    <div className="gb3">1GB</div>
                    <div className="item-heading">$2.00</div>
                  </div>
                </div>
                <div className="days6">15Days</div>
              </div>
            </div>
            <div className="check-all-offers-wrapper">
              <h2 className="check-all-offers">{`Check all offers >`}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundbordershadow-container">
        <div className="backgroundbordershadow7">
          <div className="limited-offer-images">
            <img className="image-icon1" alt="" src="/image-1.svg" />
          </div>
          <div className="limited-offer-content">
            <div className="heading-2-limited-time-offer-wrapper">
              <b className="heading-22">Limited Time Offer</b>
            </div>
            <div className="container7">
              <Background
                capng="/capng-1@2x.png"
                canada="Canada"
                gB="5GB"
                prop="$17.90"
                prop1="$40.00"
                days="5Days"
              />
              <Background
                capng="/package-europepng@2x.png"
                canada="EURO…"
                gB="3GB"
                prop="$12.00"
                prop1="$25.00"
                days="30Days"
                propPadding="unset"
                propAlignSelf="unset"
                propWidth="124.7px"
                propDisplay="flex"
                propMarginLeft="-4.699999999999989px"
                propDisplay1="flex"
                propWidth1="48.2px"
                propMinWidth="74px"
              />
              <div className="background8">
                <div className="package-asia-pacificpng-wrapper">
                  <img
                    className="package-asia-pacificpng-icon"
                    loading="lazy"
                    alt=""
                    src="/package-asia-pacificpng@2x.png"
                  />
                </div>
                <h1 className="asia-p">Asia-P…</h1>
                <div className="background-inner">
                  <div className="frame-group">
                    <div className="gb-wrapper">
                      <div className="gb4">1GB</div>
                    </div>
                    <div className="parent">
                      <div className="div4">$3.00</div>
                      <s className="s1">$8.00</s>
                    </div>
                  </div>
                </div>
                <div className="days-wrapper">
                  <div className="days7">3Days</div>
                </div>
              </div>
              <div className="background9">
                <div className="package-europepng-wrapper">
                  <img
                    className="package-europepng-icon"
                    alt=""
                    src="/package-europepng@2x.png"
                  />
                </div>
                <h1 className="euro">EURO…</h1>
                <div className="frame-container">
                  <div className="gb-frame">
                    <div className="gb5">10GB</div>
                  </div>
                  <div className="group">
                    <div className="div5">$36.90</div>
                    <s className="s2">$80.00</s>
                  </div>
                </div>
                <div className="days-container">
                  <div className="days8">90Days</div>
                </div>
              </div>
            </div>
          </div>
          <div className="limited-offer-images1">
            <img className="image-icon2" alt="" src="/image-2.svg" />
          </div>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="why-use-mogo-esim-wrapper">
          <b className="why-use-mogo">Why use MOGO eSIM?</b>
        </div>
        <div className="why-mogo-benefits">
          <div className="backgroundbordershadow8">
            <div className="benefit-titles">
              <b className="affordable-local-rates">Affordable local rates</b>
            </div>
            <div className="no-hidden-fees">No hidden fees. Pay as you go.</div>
            <div className="background10">
              <div className="background11">
                <img className="image-icon3" alt="" src="/image-3@2x.png" />
              </div>
            </div>
          </div>
          <div className="backgroundbordershadow9">
            <div className="great-coverage-wrapper">
              <b className="great-coverage">Great coverage</b>
            </div>
            <p className="quality-connectivity-in-container">
              <span>
                <span className="quality-connectivity-in">
                  Quality connectivity in Europe,
                </span>
                <span className="north-america-oceania">
                  North America, Oceania, and
                </span>
                <span className="asia">Asia.</span>
              </span>
            </p>
            <div className="background12">
              <div className="background13">
                <img className="image-icon4" alt="" src="/image-4@2x.png" />
              </div>
            </div>
          </div>
          <div className="backgroundbordershadow10">
            <b className="flexible-and-convenient">Flexible and convenient</b>
            <div className="top-up-and-manage-your-data-pl-wrapper">
              <div className="top-up-and-container">
                <p className="top-up-and">Top up and manage your data</p>
                <p className="plans">plans</p>
              </div>
            </div>
            <div className="background14">
              <div className="background15">
                <img className="image-icon5" alt="" src="/image-5@2x.png" />
              </div>
            </div>
          </div>
          <div className="backgroundbordershadow11">
            <div className="safer-than-public-wifi-wrapper">
              <b className="safer-than-public">Safer than public WiFi</b>
            </div>
            <p className="stable-and-safe-container">
              <span className="stable-and-safe">
                Stable and safe network to surf
              </span>
              <span className="without-worry">without worry.</span>
            </p>
            <div className="background16">
              <div className="background17">
                <img className="image-icon6" alt="" src="/image-6@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent2">
        <div className="who-is-mogo-esim-suitable-for-wrapper">
          <b className="who-is-mogo">Who is MOGO eSIM suitable for?</b>
        </div>
        <div className="suitable-for-cards">
          <div className="paragraphbackground">
            <b className="international-students">
              <span className="international-students-txt-container">
                <p className="international">International</p>
                <p className="students">students</p>
              </span>
            </b>
            <div className="stay-connected-wherever-container">
              <span className="stay-connected-wherever-container1">
                <p className="stay-connected-wherever">
                  Stay connected wherever I
                </p>
                <p className="go">go.</p>
              </span>
            </div>
          </div>
          <div className="paragraphbackground1">
            <h2 className="business-professionals">
              <span className="business-professionals-txt-container">
                <p className="business">Business</p>
                <p className="professionals">Professionals</p>
              </span>
            </h2>
            <p className="instant-connectivity-when-container">
              <span className="instant-connectivity-when-container1">
                <span className="instant-connectivity-when">
                  Instant connectivity when I
                </span>
                <span className="land-no-more">land. No more bad airport</span>
                <span className="wifi">WiFi!</span>
              </span>
            </p>
          </div>
          <div className="paragraphbackground2">
            <b className="local-residents">Local residents</b>
            <div className="mogo-esim-is-container">
              <span>
                <p className="mogo-esim-is">MOGO eSIM is always my</p>
                <p className="best-plan-b">best plan B.</p>
              </span>
            </div>
          </div>
          <div className="paragraphbackground3">
            <b className="travellers">Travellers</b>
            <div className="no-more-extra-container">
              <span className="no-more-extra-container1">
                <p className="no-more-extra">No more extra roaming</p>
                <p className="costs">costs.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FrameComponent1;
