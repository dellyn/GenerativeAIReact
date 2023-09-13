import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useCallback,
  ChangeEvent,
} from 'react';
import debounce from 'lodash.debounce';
import type { BaseInputProps, BaseInputRefs } from './types';
import './styles.scss';
import classNames from 'classnames';

// const virtualInputStyles: CSSProperties = {
//   opacity: 0,
//   position: 'absolute',
//   left: -99999,
//   top: -99999,
//   boxSizing: 'border-box',
// };

// const inputNameSpace = classNames('input');
// const virtualNameSpace = classNames('virtual');

export const BaseInput = forwardRef<BaseInputRefs, BaseInputProps>(({
  debounceMs = 300,
  className,
  disabled,
  onChange,
  ...restProps
}, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const virtualInputRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(restProps.value || '');
  // const [isDynamicWidth, setIsDynamicWidth] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (!onChange) return;
    if (debounceMs > 0) {
      debounce(() => onChange?.(e), debounceMs);
    } else {
      onChange(e);
    }
  }, [debounceMs, onChange]);

  useImperativeHandle(ref, () => ({
    get inputRef() {
      return inputRef;
    },
  }));

  return (
    <input
      type="text"
      value={value}
      autoComplete="off"
      onChange={handleChange}
      ref={inputRef}
      className={classNames(
        'base-input',
        className,
        { disabled },
      )}
    />
  );
});
