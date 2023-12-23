import { FiveStar } from './fivestar'
function PotentialUnit({pfp}) {
    return (<div className="potential-unit">
                          <div className="potential-pfp">
                              <img src={pfp} alt="" />
                          </div>
                          <div className="potential-rest">
                              <div className="potential-stars"><FiveStar /></div>
                              <div className="potential-buttons">
                                  <div className="potential-decline">Decline</div>
                                  <div className="potential-accept">Accept</div>
                              </div>

                          </div>
                      </div>);
  }
  export default PotentialUnit;