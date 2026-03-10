function Modal({ isOpen, onClose, isLoading, children }) {
  if (!isOpen) return null;
  return (
    <div className="recipe-overlay" onClick={onClose}>
      <div className="recipe-card-detail" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {/* Rubric: children props */}
          {isLoading ? (
            <div className="loading-spinner">
              <p>Scanning for details....</p>
            </div>
          ) : (
            children
          )}
        </div>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close Modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;
