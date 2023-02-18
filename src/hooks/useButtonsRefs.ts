import {useRef} from 'react';
import {ColorButtonRefType} from '../components';

export const useButtonsRefs = () => {
  const firstButtonRef = useRef<ColorButtonRefType>(null);
  const secondButtonRef = useRef<ColorButtonRefType>(null);
  const thirdButtonRef = useRef<ColorButtonRefType>(null);
  const fourthButtonRef = useRef<ColorButtonRefType>(null);

  const buttonsRefs = [
    firstButtonRef,
    secondButtonRef,
    thirdButtonRef,
    fourthButtonRef,
  ];

  return {
    buttonsRefs,
    firstButtonRef,
    secondButtonRef,
    thirdButtonRef,
    fourthButtonRef,
  };
};
