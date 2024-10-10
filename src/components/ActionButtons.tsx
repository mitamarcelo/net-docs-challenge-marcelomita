import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { setStepCount, toggleIsRunning } from "../store/action/slice";

import * as Styled from "./ActionButtons.styles";
import { nextStep } from "../store/grid/slice";

const ActionButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isRunning, stepCount } = useSelector(
    (state: RootState) => state.action
  );

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        dispatch(nextStep());
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRunning, dispatch]);

  const handleRunNextStep = useCallback(() => {
    dispatch(nextStep());
  }, [dispatch]);

  const handleRunNSteps = useCallback(() => {
    for (let i = 0; i < stepCount; i++) {
      setTimeout(() => {
        dispatch(nextStep());
      }, i * 100);
    }
  }, [dispatch, stepCount]);

  const handleClick = useCallback(() => {
    dispatch(toggleIsRunning());
  }, [dispatch]);

  return (
    <Styled.ButtonContainer>
      <Styled.Button onClick={handleRunNextStep}>Next Generation</Styled.Button>
      <Styled.Button onClick={handleClick}>
        {isRunning ? "Stop" : "Start"}
      </Styled.Button>
      <Styled.Button onClick={handleRunNSteps}>
        Run {stepCount} Steps
      </Styled.Button>
      <Styled.Label htmlFor="stepCount">Set number of steps:</Styled.Label>
      <Styled.Input
        id="stepCount"
        type="number"
        value={stepCount}
        onChange={(e) => dispatch(setStepCount(parseInt(e.target.value)))}
        min={1}
      />
    </Styled.ButtonContainer>
  );
};

export default ActionButtons;
