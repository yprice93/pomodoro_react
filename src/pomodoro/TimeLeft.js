import React from "react";

function TimeLeft({
  currentState,
  formattedTimeLeft,
  isPaused,
  hidden,
  ariaValue,
}) {
  return (
    hidden && (
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">
              {currentState} for {formattedTimeLeft} minutes
            </h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {formattedTimeLeft} remaining
            </p>
            <h2>{isPaused}</h2>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={ariaValue} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${ariaValue}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default TimeLeft;
