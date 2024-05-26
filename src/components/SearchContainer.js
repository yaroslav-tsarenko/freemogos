import BackgroundBorderShadow2 from "./BackgroundBorderShadow2";
import BackgroundBorderShadow from "./BackgroundBorderShadow";
import ContinentHeader from "./ContinentHeader";
import PropTypes from "prop-types";
import "./SearchContainer.css";

const SearchContainer = ({ className = "" }) => {
  return (
    <section className={`search-container ${className}`}>
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <div className="search-input-inner-wrapper">
            <div className="search-input-and-placeholder">
              <b className="heading-1">Where are you going?</b>
            </div>
            <div className="input6">
              <img className="image-icon30" alt="" src="/image.svg" />
              <input
                className="search-for-data1"
                placeholder="Search for data plans"
                type="text"
              />
            </div>
          </div>
          <div className="esim-question">
            <div className="what-devices-support2">{`What devices support eSIM? >`}</div>
          </div>
        </div>
      </div>
      <div className="regional-plans">
        <div className="backgroundbordershadow18">
          <b className="regional-plans1">Regional plans</b>
          <div className="regional-plans-header">
            <BackgroundBorderShadow2
              packageAsiaPacificpng="/package-asia-pacificpng1@2x.png"
              asiaPacific="Asia-Pacific"
              countries="16 Countries"
              gB="1GB"
              asiaPacificDataAmountEmpt="$2.00"
              days="3Days"
            />
            <div className="backgroundbordershadow19">
              <div className="europe-flags-container">
                <div className="europe-flags-images">
                  <div className="europe-flags-sub-containers">
                    <img
                      className="package-europepng-icon1"
                      loading="lazy"
                      alt=""
                      src="/package-europepng1@2x.png"
                    />
                    <div className="europe-flags-labels">
                      <div className="europe-flags-names">
                        <div className="container14">
                          <div className="europe39">EUROPE39</div>
                        </div>
                        <div className="countries2">39 Countries</div>
                      </div>
                    </div>
                  </div>
                  <div className="starting-from9">Starting from</div>
                </div>
                <div className="europe-data-amount">
                  <div className="gb9">3GB</div>
                  <div className="europe-data-amount1">$5.00</div>
                </div>
              </div>
              <div className="days12">30Days</div>
            </div>
            <BackgroundBorderShadow2
              packageAsiaPacificpng="/package-europepng-1@2x.png"
              asiaPacific="EUROPE31"
              countries="31 Countries"
              gB="1GB"
              asiaPacificDataAmountEmpt="$2.00"
              days="15Days"
              propAlignSelf="stretch"
              propFlex="1"
              propMinWidth="120px"
              propMinWidth1="54px"
              propMinWidth2="69px"
            />
          </div>
          <div className="regional-plans-header1">
            <BackgroundBorderShadow2
              packageAsiaPacificpng="/globalpng@2x.png"
              asiaPacific="Regional P…"
              countries="11 Countries"
              gB="6GB"
              asiaPacificDataAmountEmpt="$14.80"
              days="8Days"
              propAlignSelf="unset"
              propFlex="unset"
              propMinWidth="115px"
              propMinWidth1="61.4px"
              propMinWidth2="62px"
            />
            <BackgroundBorderShadow
              globalpng="/globalpng-1@2x.png"
              regionalP="Regional P…"
              countries="63 Countries"
              gB="6GB"
              prop="$29.90"
              days="15Days"
            />
            <BackgroundBorderShadow
              globalpng="/package-north-americapng@2x.png"
              regionalP="USA/Canada"
              countries="2 Countries"
              gB="500MB"
              prop="$2.00"
              days="3Days"
              propAlignSelf="stretch"
              propFlex="1"
              propMinWidth="102.5px"
              propGap="unset"
              propMinWidth1="67.3px"
              propMinWidth2="54px"
              propMinWidth3="62px"
            />
          </div>
          <b className="europe">Europe</b>
          <div className="regional-plans-header2">
            <div className="backgroundbordershadow20">
              <div className="frpng-group">
                <img
                  className="frpng-icon1"
                  loading="lazy"
                  alt=""
                  src="/frpng1@2x.png"
                />
                <div className="container-wrapper3">
                  <div className="container15">
                    <div className="france1">France</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent4">
                <div className="starting-from10">Starting from</div>
                <div className="gb-parent2">
                  <div className="gb10">1GB</div>
                  <div className="div7">$2.00</div>
                </div>
              </div>
              <div className="days13">15Days</div>
            </div>
            <div className="backgroundbordershadow21">
              <div className="grpng-parent">
                <img
                  className="grpng-icon"
                  loading="lazy"
                  alt=""
                  src="/grpng@2x.png"
                />
                <div className="container-wrapper4">
                  <div className="container16">
                    <div className="greece">Greece</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent5">
                <div className="starting-from11">Starting from</div>
                <div className="europe-days-data-amount">
                  <div className="gb11">1GB</div>
                  <div className="europe-days-data">$2.00</div>
                </div>
              </div>
              <div className="days14">15Days</div>
            </div>
            <div className="backgroundbordershadow22">
              <div className="depng-group">
                <img
                  className="depng-icon1"
                  loading="lazy"
                  alt=""
                  src="/depng1@2x.png"
                />
                <div className="container-wrapper5">
                  <div className="container17">
                    <div className="germany1">Germany</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent6">
                <div className="starting-from12">Starting from</div>
                <div className="gb-parent3">
                  <div className="gb12">1GB</div>
                  <div className="div8">$2.00</div>
                </div>
              </div>
              <div className="days15">15Days</div>
            </div>
          </div>
          <div className="regional-plans-header3">
            <div className="backgroundbordershadow23">
              <div className="itpng-parent">
                <img
                  className="itpng-icon"
                  loading="lazy"
                  alt=""
                  src="/itpng@2x.png"
                />
                <div className="container-wrapper6">
                  <div className="container18">
                    <div className="italy">Italy</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent7">
                <div className="starting-from13">Starting from</div>
                <div className="gb-parent4">
                  <div className="gb13">1GB</div>
                  <div className="div9">$2.00</div>
                </div>
              </div>
              <div className="days16">15Days</div>
            </div>
            <div className="backgroundbordershadow24">
              <div className="ispng-parent">
                <img
                  className="ispng-icon"
                  loading="lazy"
                  alt=""
                  src="/ispng@2x.png"
                />
                <div className="container-wrapper7">
                  <div className="container19">
                    <div className="iceland">Iceland</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent8">
                <div className="starting-from14">Starting from</div>
                <div className="gb-parent5">
                  <div className="gb14">1GB</div>
                  <div className="div10">$2.00</div>
                </div>
              </div>
              <div className="days17">15Days</div>
            </div>
            <div className="backgroundbordershadow25">
              <div className="nlpng-parent">
                <img className="nlpng-icon" alt="" src="/nlpng@2x.png" />
                <div className="container-wrapper8">
                  <div className="container20">
                    <div className="netherlands">Netherlands</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent9">
                <div className="starting-from15">Starting from</div>
                <div className="gb-parent6">
                  <div className="gb15">1GB</div>
                  <div className="div11">$2.00</div>
                </div>
              </div>
              <div className="days18">15Days</div>
            </div>
          </div>
          <div className="regional-plans-header4">
            <div className="backgroundbordershadow26">
              <div className="ptpng-parent">
                <img
                  className="ptpng-icon"
                  loading="lazy"
                  alt=""
                  src="/ptpng@2x.png"
                />
                <div className="container-wrapper9">
                  <div className="container21">
                    <div className="portugal">Portugal</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent10">
                <div className="starting-from16">Starting from</div>
                <div className="gb-parent7">
                  <div className="gb16">1GB</div>
                  <div className="div12">$2.00</div>
                </div>
              </div>
              <div className="days19">15Days</div>
            </div>
            <div className="backgroundbordershadow27">
              <div className="sepng-parent">
                <img
                  className="sepng-icon"
                  loading="lazy"
                  alt=""
                  src="/sepng@2x.png"
                />
                <div className="container-wrapper10">
                  <div className="container22">
                    <div className="sweden">Sweden</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent11">
                <div className="starting-from17">Starting from</div>
                <div className="gb-parent8">
                  <div className="gb17">1GB</div>
                  <div className="div13">$2.00</div>
                </div>
              </div>
              <div className="days20">15Days</div>
            </div>
            <div className="backgroundbordershadow28">
              <div className="espng-parent">
                <img className="espng-icon" alt="" src="/espng@2x.png" />
                <div className="container-wrapper11">
                  <div className="container23">
                    <div className="spain">Spain</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent12">
                <div className="starting-from18">Starting from</div>
                <div className="gb-parent9">
                  <div className="gb18">1GB</div>
                  <div className="div14">$2.00</div>
                </div>
              </div>
              <div className="days21">15Days</div>
            </div>
          </div>
          <div className="regional-plans-header5">
            <div className="backgroundbordershadow29">
              <div className="chpng-parent">
                <img
                  className="chpng-icon"
                  loading="lazy"
                  alt=""
                  src="/chpng@2x.png"
                />
                <div className="container-wrapper12">
                  <div className="container24">
                    <div className="switzerland">Switzerland</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent13">
                <div className="starting-from19">Starting from</div>
                <div className="gb-parent10">
                  <div className="gb19">1GB</div>
                  <div className="div15">$4.90</div>
                </div>
              </div>
              <div className="days22">15Days</div>
            </div>
            <div className="backgroundbordershadow30">
              <div className="trpng-parent">
                <img
                  className="trpng-icon"
                  loading="lazy"
                  alt=""
                  src="/trpng@2x.png"
                />
                <div className="container-wrapper13">
                  <div className="container25">
                    <div className="turkey">Turkey</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent14">
                <div className="starting-from20">Starting from</div>
                <div className="gb-parent11">
                  <div className="gb20">1GB</div>
                  <div className="div16">$5.90</div>
                </div>
              </div>
              <div className="days23">15Days</div>
            </div>
            <div className="backgroundbordershadow31">
              <div className="gbpng-group">
                <img className="gbpng-icon1" alt="" src="/gbpng@2x.png" />
                <div className="container-wrapper14">
                  <div className="container26">
                    <div className="uk1">UK</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent15">
                <div className="starting-from21">Starting from</div>
                <div className="gb-parent12">
                  <div className="gb21">1GB</div>
                  <div className="div17">$2.00</div>
                </div>
              </div>
              <div className="days24">15Days</div>
            </div>
          </div>
          <b className="north-america">North America</b>
          <div className="canada-flags">
            <div className="backgroundbordershadow32">
              <div className="canada-flags-images">
                <img
                  className="capng-icon2"
                  loading="lazy"
                  alt=""
                  src="/capng@2x.png"
                />
                <div className="canada-flags-labels">
                  <div className="container27">
                    <div className="canada4">Canada</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent16">
                <div className="starting-from22">Starting from</div>
                <div className="canada-data-amount">
                  <div className="mb3">500MB</div>
                  <div className="canada-data-amount1">$2.90</div>
                </div>
              </div>
              <div className="days25">3Days</div>
            </div>
            <div className="backgroundbordershadow33">
              <div className="uspng-parent">
                <img
                  className="uspng-icon"
                  loading="lazy"
                  alt=""
                  src="/uspng@2x.png"
                />
                <div className="container-wrapper15">
                  <div className="container28">
                    <div className="usa1">USA</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent17">
                <div className="starting-from23">Starting from</div>
                <div className="gb-parent13">
                  <div className="gb22">1GB</div>
                  <div className="div18">$2.90</div>
                </div>
              </div>
              <div className="days26">15Days</div>
            </div>
          </div>
          <b className="asia1">Asia</b>
          <div className="bangladesh-flags">
            <div className="backgroundbordershadow34">
              <div className="bangladesh-flags-images">
                <img
                  className="bdpng-icon"
                  loading="lazy"
                  alt=""
                  src="/bdpng@2x.png"
                />
                <div className="country-container">
                  <div className="container29">
                    <div className="bangladesh">Bangladesh</div>
                  </div>
                </div>
              </div>
              <div className="plan-price-container">
                <div className="starting-from24">Starting from</div>
                <div className="plan-data-size-container">
                  <div className="mb4">300MB</div>
                  <div className="spacer1">$2.50</div>
                </div>
              </div>
              <div className="days27">3Days</div>
            </div>
            <div className="backgroundbordershadow35">
              <div className="cnpng-parent">
                <img
                  className="cnpng-icon"
                  loading="lazy"
                  alt=""
                  src="/cnpng@2x.png"
                />
                <div className="container-wrapper16">
                  <div className="container30">
                    <div className="china-mai">China Mai…</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent18">
                <div className="starting-from25">Starting from</div>
                <div className="gb-parent14">
                  <div className="gb23">1GB</div>
                  <div className="div19">$3.90</div>
                </div>
              </div>
              <div className="days28">15Days</div>
            </div>
            <div className="backgroundbordershadow36">
              <div className="khpng-parent">
                <img className="khpng-icon" alt="" src="/khpng@2x.png" />
                <div className="container-wrapper17">
                  <div className="container31">
                    <div className="cambodia">Cambodia</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent19">
                <div className="starting-from26">Starting from</div>
                <div className="gb-parent15">
                  <div className="gb24">1GB</div>
                  <div className="div20">$2.00</div>
                </div>
              </div>
              <div className="days29">15Days</div>
            </div>
            <div className="backgroundbordershadow37">
              <div className="idpng-parent">
                <img
                  className="idpng-icon"
                  loading="lazy"
                  alt=""
                  src="/idpng@2x.png"
                />
                <div className="container-wrapper18">
                  <div className="container32">
                    <div className="indonesia">Indonesia</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent20">
                <div className="starting-from27">Starting from</div>
                <div className="gb-parent16">
                  <div className="gb25">1GB</div>
                  <div className="div21">$2.90</div>
                </div>
              </div>
              <div className="days30">15Days</div>
            </div>
            <div className="backgroundbordershadow38">
              <div className="inpng-parent">
                <img
                  className="inpng-icon"
                  loading="lazy"
                  alt=""
                  src="/inpng@2x.png"
                />
                <div className="container-wrapper19">
                  <div className="container33">
                    <div className="india">India</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent21">
                <div className="starting-from28">Starting from</div>
                <div className="gb-parent17">
                  <div className="gb26">1GB</div>
                  <div className="div22">$4.00</div>
                </div>
              </div>
              <div className="days31">15Days</div>
            </div>
            <div className="backgroundbordershadow39">
              <div className="llpng-group">
                <img className="llpng-icon1" alt="" src="/llpng@2x.png" />
                <div className="container-wrapper20">
                  <div className="container34">
                    <div className="israel1">Israel</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent22">
                <div className="starting-from29">Starting from</div>
                <div className="mb-container">
                  <div className="mb5">500MB</div>
                  <div className="div23">$3.00</div>
                </div>
              </div>
              <div className="days32">3Days</div>
            </div>
            <div className="backgroundbordershadow40">
              <div className="jppng-parent">
                <img
                  className="jppng-icon"
                  loading="lazy"
                  alt=""
                  src="/jppng@2x.png"
                />
                <div className="container-wrapper21">
                  <div className="container35">
                    <div className="japan1">Japan</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent23">
                <div className="starting-from30">Starting from</div>
                <div className="gb-parent18">
                  <div className="gb27">1GB</div>
                  <div className="div24">$3.90</div>
                </div>
              </div>
              <div className="days33">15Days</div>
            </div>
            <div className="backgroundbordershadow41">
              <div className="krpng-parent">
                <img
                  className="krpng-icon"
                  loading="lazy"
                  alt=""
                  src="/krpng@2x.png"
                />
                <div className="container-wrapper22">
                  <div className="container36">
                    <div className="korea">Korea</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent24">
                <div className="starting-from31">Starting from</div>
                <div className="gb-parent19">
                  <div className="gb28">1GB</div>
                  <div className="div25">$3.90</div>
                </div>
              </div>
              <div className="days34">15Days</div>
            </div>
            <div className="backgroundbordershadow42">
              <div className="kwpng-parent">
                <img className="kwpng-icon" alt="" src="/kwpng@2x.png" />
                <div className="container-wrapper23">
                  <div className="container37">
                    <div className="kuwait">Kuwait</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent25">
                <div className="starting-from32">Starting from</div>
                <div className="gb-parent20">
                  <div className="gb29">1GB</div>
                  <div className="div26">$4.00</div>
                </div>
              </div>
              <div className="days35">15Days</div>
            </div>
            <div className="backgroundbordershadow43">
              <div className="mypng-parent">
                <img
                  className="mypng-icon"
                  loading="lazy"
                  alt=""
                  src="/mypng@2x.png"
                />
                <div className="container-wrapper24">
                  <div className="container38">
                    <div className="malaysia">Malaysia</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent26">
                <div className="starting-from33">Starting from</div>
                <div className="gb-parent21">
                  <div className="gb30">1GB</div>
                  <div className="div27">$2.00</div>
                </div>
              </div>
              <div className="days36">15Days</div>
            </div>
            <div className="backgroundbordershadow44">
              <div className="mnpng-parent">
                <img
                  className="mnpng-icon"
                  loading="lazy"
                  alt=""
                  src="/mnpng@2x.png"
                />
                <div className="container-wrapper25">
                  <div className="container39">
                    <div className="mongolia">Mongolia</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent27">
                <div className="starting-from34">Starting from</div>
                <div className="mb-parent1">
                  <div className="mb6">500MB</div>
                  <div className="div28">$3.50</div>
                </div>
              </div>
              <div className="days37">3Days</div>
            </div>
            <div className="backgroundbordershadow45">
              <div className="pkpng-parent">
                <img className="pkpng-icon" alt="" src="/pkpng@2x.png" />
                <div className="container-wrapper26">
                  <div className="container40">
                    <div className="pakistan">Pakistan</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent28">
                <div className="starting-from35">Starting from</div>
                <div className="gb-parent22">
                  <div className="gb31">1GB</div>
                  <div className="div29">$4.00</div>
                </div>
              </div>
              <div className="days38">15Days</div>
            </div>
            <div className="backgroundbordershadow46">
              <div className="rupng-parent">
                <img
                  className="rupng-icon"
                  loading="lazy"
                  alt=""
                  src="/rupng@2x.png"
                />
                <div className="container-wrapper27">
                  <div className="container41">
                    <div className="russia">Russia</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent29">
                <div className="starting-from36">Starting from</div>
                <div className="gb-parent23">
                  <div className="gb32">1GB</div>
                  <div className="div30">$4.00</div>
                </div>
              </div>
              <div className="days39">15Days</div>
            </div>
            <div className="backgroundbordershadow47">
              <div className="lkpng-parent">
                <img
                  className="lkpng-icon"
                  loading="lazy"
                  alt=""
                  src="/lkpng@2x.png"
                />
                <div className="container-wrapper28">
                  <div className="container42">
                    <div className="sri-lanka">Sri Lanka</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent30">
                <div className="starting-from37">Starting from</div>
                <div className="mb-parent2">
                  <div className="mb7">300MB</div>
                  <div className="div31">$2.50</div>
                </div>
              </div>
              <div className="days40">3Days</div>
            </div>
            <div className="backgroundbordershadow48">
              <div className="sgpng-parent">
                <img className="sgpng-icon" alt="" src="/sgpng@2x.png" />
                <div className="container-wrapper29">
                  <div className="container43">
                    <div className="singapore">Singapore</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent31">
                <div className="starting-from38">Starting from</div>
                <div className="gb-parent24">
                  <div className="gb33">1GB</div>
                  <div className="div32">$2.00</div>
                </div>
              </div>
              <div className="days41">15Days</div>
            </div>
            <div className="backgroundbordershadow49">
              <div className="thpng-parent">
                <img
                  className="thpng-icon"
                  loading="lazy"
                  alt=""
                  src="/thpng@2x.png"
                />
                <div className="container-wrapper30">
                  <div className="container44">
                    <div className="thailand">Thailand</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent32">
                <div className="starting-from39">Starting from</div>
                <div className="gb-parent25">
                  <div className="gb34">1GB</div>
                  <div className="div33">$2.00</div>
                </div>
              </div>
              <div className="days42">15Days</div>
            </div>
            <div className="backgroundbordershadow50">
              <div className="aepng-group">
                <img
                  className="aepng-icon1"
                  loading="lazy"
                  alt=""
                  src="/aepng@2x.png"
                />
                <div className="container-wrapper31">
                  <div className="container45">
                    <div className="united-ara1">United Ara…</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent33">
                <div className="starting-from40">Starting from</div>
                <div className="mb-parent3">
                  <div className="mb8">500MB</div>
                  <div className="div34">$5.00</div>
                </div>
              </div>
              <div className="days43">3Days</div>
            </div>
            <div className="backgroundbordershadow51">
              <div className="vnpng-parent">
                <img className="vnpng-icon" alt="" src="/vnpng@2x.png" />
                <div className="container-wrapper32">
                  <div className="container46">
                    <div className="vietnam">Vietnam</div>
                  </div>
                </div>
              </div>
              <div className="starting-from-parent34">
                <div className="starting-from41">Starting from</div>
                <div className="gb-parent26">
                  <div className="gb35">1GB</div>
                  <div className="div35">$2.00</div>
                </div>
              </div>
              <div className="days44">15Days</div>
            </div>
          </div>
          <div className="continent-header-parent">
            <ContinentHeader
              oceania="Oceania"
              aupng="/aupng@2x.png"
              australia="Australia"
              gB="1GB"
              spacer="$2.00"
              days="15Days"
            />
            <ContinentHeader
              oceania="Africa"
              aupng="/ngpng@2x.png"
              australia="Nigeria"
              gB="500MB"
              spacer="$3.50"
              days="3Days"
              propMinWidth="72px"
              propWidth="unset"
              propDisplay="inline-block"
              propMinWidth1="85px"
              propGap="unset"
              propMinWidth2="67.4px"
              propDebugCommit="unset"
              propDebugCommit1="unset"
              propMinWidth3="62px"
            />
          </div>
        </div>
      </div>
      <div className="overlayshadow-wrapper">
        <div className="overlayshadow1">
          <div className="background25">
            <div className="support-content">
              <div className="support-header">
                <b className="what-devices-support3">
                  What devices support eSIM?
                </b>
                <button className="button8">
                  <div className="support-list1">Support list</div>
                  <div className="phone-image">
                    <img
                      className="image-icon31"
                      alt=""
                      src="/image-27@2x.png"
                    />
                  </div>
                </button>
              </div>
            </div>
            <img
              className="home-phone-37jxghkgpng-icon1"
              loading="lazy"
              alt=""
              src="/homephone37jxghkgpng@2x.png"
            />
          </div>
          <div className="sim-card-link">
            <div className="cant-find-your-container2">
              <span className="cant-find-your-container3">
                <span>{`Can't find your device? Go to `}</span>
                <span className="mogo-sim-card1">{`MOGO SIM CARD>>`}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
