function Modal({ isOpen, onClose, children }) {
  //Rubric: conditionally rendered element
  if (!isOpen) return null;
  return (
    <div className="recipe-overlay" onClick={onClose}>
      <div className="recipe-card-detail" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✖️
        </button>
        <div className="modal-content">
          {/* Rubric: children props */}
          {children}
        </div>
      </div>
    </div>
  );
}
export default Modal;
