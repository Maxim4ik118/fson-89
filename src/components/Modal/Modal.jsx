import React, { useContext, useEffect, useRef, useState } from 'react';

import { StyledModal } from './Styled';
import { ModalContext } from 'context/ModalContext';

/*
Методи життєвого циклу - це зарезервовані реактом методи(функції),
 які запускаються в певний період життя компоненти самим Реактом.

 componentDidMount() {} - метод життєвого цикл,
    що запускається один раз, після успішного монтування компонети в DOM.

    Використання:
    - Вішаються глобальні слухачі подій (addEventListener)
    - Встановлюються асинхронні таймери та лічильники (setTimeout, setInterval)
    - Зчитуються дані з локального сховища та встановлюємо їх в стейт
    - Надсилаються мережеві запити (HTTP request)

 componentWillUnmount() {} - метод життєвого цикл,
    що запускається один раз, перед повним видаленням компонети з DOM.

    Використання:
    - Прибираються глобальні слухачі подій (removeEventListener)
    - Прибирати асинхронні таймери та лічильники (clearTimeout, clearInterval)
    - Відхиляти мережеві запити (cancel HTTP request)

 componentDidUpdate(prevProps, prevState) {} - метод життєвого цикл,
    що запускається кожен раз, після того, як компонента оновилася(змінилися пропси, або стейт).
   
    Використання:
    - Надсилаються мережеві запити (HTTP request)
    - Оновлюють(синхронізуються) дані зі стейту з локальним сховищем
*/

const Modal = () => {
  const { modalData, closeModal } = useContext(ModalContext);
  const [counter, setCounter] = useState(1);
  const inputRef = useRef(null);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    console.log(inputRef.current);
    // const inputWidth = getComputedStyle(inputRef.current).width
    // console.log('inputWidth: ', inputWidth);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (firstRenderRef.current === false) {
      console.log('counter changed', counter);
    }

    return () => {
      firstRenderRef.current = false;
    };
  }, [counter]);

  return (
    <StyledModal onClick={handleOverayClick}>
      <div className="modal">
        <button onClick={closeModal} className="closeBtn">
          ❌
        </button>
        <h2>Product Details</h2>
        <div>
          <h3>Title: {modalData.title}</h3>
          <p>Price: {modalData.price}$</p>
          <p>Discount: {modalData.discount}$</p>
        </div>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonClick}>Select input</button>
        <button onClick={() => setCounter(prev => prev + 1)}>
          Product count: {counter}
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
