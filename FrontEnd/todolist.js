import React from "react";
import $ from "jquery";
import "popper.js";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/DropdownButton';
import "./todolist.css";

function RequestStatus() {
  return (
    <div className="BigBox">
      {/* <div className="TitleBox">
        <h1>To-Do List</h1>
      </div> */}
      <div className="IPtitlebox">
        <h2>In-Progress Tasks:</h2>
      </div>
      <div className="IPlist">
        <div className="IPitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <li class="list-group-item-IP">
                    <div>
                      {[DropdownButton].map((DropdownType, idx) => (
                        <DropdownType
                          size="sm"
                          variant="outline-danger"
                          title="Status"
                        >
                        <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                      </DropdownType>
                      ))}
                    </div>
                    <div classname='TypeOfPage'>
                      <p><center>Task: </center></p>
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="NStitlebox">
        <h2>Not Started Tasks:</h2>
      </div>
      <div className="NSlist">
        <div className="NSitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
              <div class="ps-content">
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-NS">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="Ctitlebox">
        <h2>Completed Tasks:</h2>
      </div>
      <div className="Clist">
        <div className="Citem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
                  <li class="list-group-item-C">
                  <div>
                    {[DropdownButton].map((DropdownType, idx) => (
                      <DropdownType
                        size="sm"
                        variant="outline-danger"
                        title="Status"
                      >
                      <Dropdown.Item href="#/action-1">In-Progress</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Not Started</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                    </DropdownType>
                    ))}
                    </div>
                  </li>
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
