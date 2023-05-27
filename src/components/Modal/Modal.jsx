import PropTypes from 'prop-types';
import { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css'; 

const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
 
  handleCloseByEscape = (even) => {
    if (even.code === "Escape") this.props.closeModal();
  };

 handleBackdropClick = (even) => {
    if (even.target === even.currentTarget) this.props.closeModal();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseByEscape);
  }

 

  render() {
    return createPortal(
      <div  className={css.overlay} onClick={this.handleBackdropClick}>
      <div className={css.modal}>
             <img src={this.props.imgSrc} alt={this.props.imgSrc}/>
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}
export default Modal;