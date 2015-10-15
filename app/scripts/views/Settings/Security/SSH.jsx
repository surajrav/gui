// SSH Configuration
// =================

"use strict";

import React from "react";
import { Button, ButtonToolbar, Input, Panel } from "react-bootstrap";

import ToggleSwitch from "../../../components/ToggleSwitch";

// TODO: get these from the schema
const LOG_LEVELS = [ "QUIET"
                   , "FATAL"
                   , "ERROR"
                   , "INFO"
                   , "VERBOSE"
                   , "DEBUG"
                   , "DEBUG2"
                   , "DEBUG3"
                   ];

const LOG_FACILITIES = [ "DAEMON"
                       , "USER"
                       , "AUTH"
                       , "LOCAL0"
                       , "LOCAL1"
                       , "LOCAL2"
                       , "LOCAL3"
                       , "LOCAL4"
                       , "LOCAL5"
                       , "LOCAL6"
                       , "LOCAL7"
                       ];

function createDropdownOptions ( optionArray ) {
  var options =
    optionArray.map( function mapOptions ( optionValue, index ) {
                       return (
                         <option
                           value = { optionValue }
                           key = { index }>
                           { optionValue }
                         </option>
                       );
                     }
                   );
  return options;
}

export default class SSH extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render() {

    const toggleService = (
      <div className = "pull-right" >
        <ToggleSwitch
          toggled = { true }
        />
      </div>
    );

    const tcpPort = (
      <Input
        type = "text"
        label = "TCP Port"
        value = { this.props.port }
      />
    );

    const portForwarding = (
      <Input
        type = "checkbox"
        label = "TCP Port Forwarding"
        value = { this.props.allow_port_forwarding }
      />
    );

    const rootPasswordLogin = (
      <Input
        type = "checkbox"
        label = "Login as root with password"
        value = { this.props.permit_root_login }
      />
    );

    const passwordAuthentication = (
      <Input
        type = "checkbox"
        label = "Allow Password Authentication"
        value = { this.props.allow_password_auth }
      />
    );

    const compressConnection = (
      <Input
        type = "checkbox"
        label = "Compress Connection"
        value = { this.props.compression }
      />
    );

    const stfpLogLevel = (
      <Input
        type = "select"
        label = "SFTP Log Level"
        value = { this.props.sftp_log_level }
      >
        { createDropdownOptions( LOG_LEVELS ) }
      </Input>
    );
    const stfpLogFacility = (
      <Input
        type = "select"
        label = "SFTP Log Facility"
        value = { this.props.sftp_log_facility }
      >
        { createDropdownOptions( LOG_FACILITIES ) }
      </Input>
    );

    // Spooky. Put this behind a warning.
    const extraOptions = (
      <Input
        type = "textarea"
        label = "Extra Options"
        value = { this.props.auxiliary }
        rows = { 5 }
      />
    );

    const formControlButtons = (
      <ButtonToolbar className = "pull-right">
        <Button
          bsStyle = "default"
        >
          { "Reset" }
        </Button>
        <Button
          bsStyle = "primary"
        >
          { "Apply" }
        </Button>
      </ButtonToolbar>
    );

    return (
      <Panel>
        <h4>SSH</h4>
        { toggleService }
        <form className = "settings-config-form">
          { tcpPort }
          { portForwarding }
          { rootPasswordLogin }
          { passwordAuthentication }
          { compressConnection }
          { stfpLogLevel }
          { stfpLogFacility }
          { extraOptions }
          { formControlButtons }
        </form>
      </Panel>
    );
  }
};

SSH.propTypes = { sftp_log_facility: React.PropTypes.string
                , permit_root_login: React.PropTypes.bool
                , compression: React.PropTypes.bool
                , sftp_log_level: React.PropTypes.string
                , allow_password_auth: React.PropTypes.bool
                , allow_port_forwarding: React.PropTypes.bool
                , port: React.PropTypes.number
                , auxiliary: React.PropTypes.string
                };
