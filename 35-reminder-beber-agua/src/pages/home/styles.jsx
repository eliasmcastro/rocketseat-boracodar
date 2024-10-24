import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 770px) {
    align-items: flex-start;
    margin-top: 40px;
  }
`;

export const Swapper = styled(motion.div)`
  width: 630px;
  height: 490px;
  display: flex;
  flex-direction: column;
  gap: 76px;

  @media (max-width: 770px) {
    width: 100%;
    gap: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivHello = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
`;

export const DivGoal = styled.div`
  display: flex;
  gap: 102px;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 67px;
    gap: 40px
  }

  .modal,
  .github-username-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-git-modal);
    z-index: 999;
  }

  .modal-content {
    width: 299px;
    height: 254px;
    border-radius: 23px;
    background: var(--gray-400);
    box-shadow: 17px 25px 57px 0px var(--shadow-modal-content);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 51px;
    gap: 24px;
    position: relative;

    .input-name {
      background-color: var(--gray-300);
      color: var(--white);
      outline: 2px solid transparent;
      outline-offset: 2px;
      letter-spacing: 0.96px;
      line-height: 32px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 12px;
      padding-right: 12px;
      border: 1px solid var(--gray-200);
      border-radius: 6px;

      &:focus {
        border: 1px solid var(--blue);
      }

      &::placeholder {
        color: var(--gray-150);
      }
    }

    button {
      position: absolute;
      right: 12.5px;
      top: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      gap: 10px;
      background: var(--gray-200);
      border: 0;
      border-radius: 100%;
      transition: all 0.3s;

      &:hover {
        background: var(--gray-300);
      }
    }

    h1 {
      color: var(--blue);
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.72px;
    }
  }
`;

export const DivDrink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 208px;
  height: 350px;
  padding: 32px 40px;
  gap: 40px;
  border-radius: 20px;
  background: var(--blue);

  span {
    color: var(--gray-400);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const Drink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 9px;

    h1 {
      color: var(--gray-400);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
    }

    span {
      color: var(--gray-400);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: 0.48px;
    }
  }
`;

export const DivGoalDiary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;

  .button-disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const DailyGoal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 770px) {
    width: 100%;
  }
  gap: 9px;

  input[type="range"] {
    height: 6px;
    width: 320px;

    @media (max-width: 770px) {
      width: 100%;
      flex: 1;
    }

    border-radius: 5px;
    accent-color: var(--blue);
    background-color: var(--blue);
    outline: none;
    border: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: var(--blue);
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    outline: 6px solid var(--blue-dark-input);
  }

  input[type="range"]::-webkit-slider-thumb:active {
    outline: 6px solid var(--blue-input);
    scale: 0.95;
  }
`;

export const Daily = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: var(--blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.48px;
  }

  p {
    color: var(--text);
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const QuantifyTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 770px) {
    width: 100%;
  }
  gap: 9px;

  input[type="range"] {
    height: 6px;
    width: 320px;

    @media (max-width: 770px) {
      width: 100%;
      flex: 1;
    }

    border-radius: 5px;
    accent-color: var(--blue);
    background-color: var(--blue);
    outline: none;
    border: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: var(--blue);
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    outline: 6px solid var(--blue-dark-input);
  }

  input[type="range"]::-webkit-slider-thumb:active {
    outline: 6px solid var(--blue-input);
    scale: 0.95;
  }
`;

export const Quantify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: var(--blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.48px;
  }

  p {
    color: var(--text);
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const DivTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  p {
    color: var(--white);
    text-align: center;
    font-size: 32.305px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.969px;
  }
`;

export const DivHour = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--gray-200);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
`;

export const Second = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  padding: 12px 0px;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid var(--gray-200);
  background: var(--gray-400);
  color: var(--gray-100);
  text-align: center;
  outline: none;
  &:focus {
    border: 1px solid var(--blue);
  }

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.96px;
`;

export const DivMin = styled.div`
  display: flex;
  gap: 4px;
  color: var(--gray-200);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
  align-items: center;
`;

export const Min = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  padding: 12px 0px;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid var(--gray-200);
  background: var(--gray-400);
  color: var(--gray-100);
  text-align: center;
  outline: none;
  &:focus {
    border: 1px solid var(--blue);
  }

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.96px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;

  @media (max-width: 770px) {
    width: 100%;
  }

  padding: 16px;
  gap: 8px;
  border-radius: 6px;
  background: var(--blue);
  border: 0;
  color: var(--gray-500);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
  transition: all 0.3s;

  &:hover {
    background: var(--blue-dark);
  }
`;
