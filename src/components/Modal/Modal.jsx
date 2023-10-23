import React, { Component } from 'react';

import { StyledModal } from './Styled';

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

export default class Modal extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  handleIncrementProduct = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleOverayClick}>
        <div className="modal">
          <button onClick={this.props.closeModal} className="closeBtn">
            ❌
          </button>
          <h2>Product Details</h2>
          <div>
            <h3>Title: {this.props.modalData.title}</h3>
            <p>Price: {this.props.modalData.price}$</p>
            <p>Discount: {this.props.modalData.discount}$</p>
            <button onClick={this.handleIncrementProduct}>
              Add product: {this.state.counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  }
}
