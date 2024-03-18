import { Slider as BaseSlider, sliderClasses } from '@mui/base/Slider';
import { alpha, styled } from '@mui/material';

const Slider = styled(BaseSlider)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
    height: 6px;
    width: 100%;
    padding: 16px 0;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
  
    &.${sliderClasses.disabled} {
      pointer-events: none;
      cursor: default;
      color: #C7D0DD;
      opacity: 0.4;
    }
  
    & .${sliderClasses.rail} {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 6px;
      background-color: currentColor;
      opacity: 0.3;
    }
  
    & .${sliderClasses.track} {
      display: block;
      position: absolute;
      height: 4px;
      border-radius: 6px;
      background-color: currentColor;
    }
  
    & .${sliderClasses.thumb} {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-left: -6px;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border-radius: 50%;
      outline: 0;
      background-color: ${theme.palette.primary.main};
      transition-property: box-shadow, transform;
      transition-timing-function: ease;
      transition-duration: 120ms;
      transform-origin: center;
  
      &:hover {
        box-shadow: 0 0 0 6px ${alpha(
          theme.palette.primary.main,
          0.3,
        )};
      }
  
      &.${sliderClasses.focusVisible} {
        box-shadow: 0 0 0 8px ${alpha(
          theme.palette.primary.main,
          0.5,
        )};
        outline: none;
      }
  
      &.${sliderClasses.active} {
        box-shadow: 0 0 0 8px ${alpha(
          theme.palette.primary.main,
          0.5,
        )};
        outline: none;
        transform: scale(1.2);
      }
    }
  
    & .${sliderClasses.mark} {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 99%;
      background-color: ${theme.palette.primary.main};
      transform: translateX(-50%);
    }
  
    & .${sliderClasses.markActive} {
      background-color: ${theme.palette.primary.main};
    }

    & .valueLabel {
      font-weight: 500;
      font-size: 12px;
      position: relative;
      top: 2em;
      text-align: center;
      align-self: center;
    }
  `,
  );

  export default Slider;