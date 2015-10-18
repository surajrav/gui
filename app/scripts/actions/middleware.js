// FREENAS MIDDLEWARE CONNECTION - ACTION CREATORS
// ===============================================

"use strict";

import * as actionTypes from "./actionTypes";
import MiddlewareClient from "../websocket/MiddlewareClient";

export function changeSockState ( readyState ) {
  return (
    { type: actionTypes.WS_STATE_CHANGED
    , payload: { readyState }
    }
  )
}

export function changeSockTarget ( targetData ) {
  return (
    { type: actionTypes.WS_TARGET_CHANGED
    , payload: { ...targetData }
    }
  )
}

export function attemptConnection () {
  return { type: actionTypes.ATTEMPT_CONNECTION }
}

export function reconnectTick () {
  return { type: actionTypes.RECONNECT_TICK }
}