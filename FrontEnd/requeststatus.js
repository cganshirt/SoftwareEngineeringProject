import React from "react";

import "./requeststatus.css";

function RequestStatus() {
  return (
    <div className="BigBox">
      <div className="TitleBox">
        <h1>Request Status</h1>
      </div>
      <div className="PEtitlebox">
        <h2>Peer Evaluations:</h2>
      </div>
      <div className="PElist">
        <div id="textbox">
          <p class="alignleft">Request To</p>
          <p class="alignright">Status</p>
        </div>
        <div className="PEitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="in-progress">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Sam Yot</div>
                            </div>
                            <div class="widget-content-right">In Progress</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left">
                            <div class="widget-heading">John Doe</div>
                          </div>
                          <div class="widget-content-right">Denied</div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">Sean Who</div>
                          </div>
                          <div class="widget-content-right">Denied</div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="approve">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Samantha Due</div>
                            </div>
                            <div class="widget-content-right">Approved</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="approve">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left flex2">
                              <div class="widget-heading">Johnny Smith</div>
                            </div>
                            <div class="widget-content-right">Approved</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="in-progress">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left flex2">
                              <div class="widget-heading">Jane Doe</div>
                            </div>
                            <div class="widget-content-right">In Progress</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <p></p>
      <div className="PTOtitlebox">
        <h2>Paid Time Off:</h2>
      </div>
      <div className="PTOlist">
        <div id="textbox">
          <p class="alignleft">Request To</p>
          <p class="alignright">Status</p>
        </div>
        <div className="PTOitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="approve">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Sam Yot</div>
                            </div>
                            <div class="widget-content-right">Approved</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left">
                            <div class="widget-heading">John Doe</div>
                          </div>
                          <div class="widget-content-right">Denied</div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">Sean Who</div>
                          </div>
                          <div class="widget-content-right">Denied</div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="approve">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Samantha Due</div>
                            </div>
                            <div class="widget-content-right">Approved</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="approve">
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left flex2">
                              <div class="widget-heading">Johnny Smith</div>
                            </div>
                            <div class="widget-content-right">Approved</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">Jane Doe</div>
                          </div>
                          <div class="widget-content-right">Denied</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestStatus;
