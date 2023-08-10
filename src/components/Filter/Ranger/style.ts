import { styled } from "styled-components";

const RangerStyle = styled.div` 
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: flex-start;


.slider {
  position: relative;
  width: var(--slider-Widht);

}

.slider__track,
.slider__range,
.slider__left-value,
.slider__right-value {
  position: absolute;
}


.slider__track,
.slider__range {
  border-radius: 3px;
  height: 5px;
}

.slider__track {
  z-index: 1;
}

.slider__range {
  z-index: 2;
  height: 10px;

  position: absolute;
  top:-5px;

  background-color: #9747FF;

}

.slider__left-value,
.slider__right-value {
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
}

.slider__left-value {
  left: 6px;
}

.slider__right-value {
  right: -4px;
}

.thumb,
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
}

.thumb {
  pointer-events: none;
  position: absolute;

  height: 10px;
  width: var(--slider-Widht);

  background-color: rgba(127, 39, 245, 0.2);

  border: none;
  border-radius: 10px;
  
  outline: none;
}

.thumb--zindex-3 {
  z-index: 3;
}

.thumb--zindex-4 {
  z-index: 4;
}

.thumb--zindex-5 {
  z-index: 5;
}

.thumb::-webkit-slider-thumb {
  background-color: #9747FF;

  border: none;
  border-radius: 50%;

  box-shadow: 0 0 1px 1px #ced4da;

  cursor: pointer;
  
  height: 18px;
  width: 18px;
  margin-top: 4px;

  pointer-events: all;
  position: relative;
}


` 

export default RangerStyle;