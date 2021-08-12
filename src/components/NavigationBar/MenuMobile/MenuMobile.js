import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Menu.css';

export default class Menu extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="container">
        <button type="button" className="button" onClick={this.toggleDropdown}>
          &#9776;
        </button>

        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames="fade"
          unmountOnExit>
          <div className="dropdown">
            <ul className="list">
              <li>Обо мне</li>
              <li>Услуги и Цены</li>
              <li>Мои работы</li>
              <li>Контакты</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
