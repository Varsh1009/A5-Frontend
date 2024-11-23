import React from "react";

interface DeleteModuleModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: (moduleId: string) => void;
  moduleId: string;
  title?: string;
}

export default function DeleteModuleModal({
  show,
  onClose,
  onConfirm,
  moduleId,
  title = "Are you sure you want to delete this module?",
}: DeleteModuleModalProps) {
  return (
    <>
      {show && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
        />
      )}
      <div
        className={`modal fade ${show ? "show" : ""}`}
        tabIndex={-1}
        style={{ display: show ? "block" : "none" }}
        aria-labelledby="deleteModuleModalLabel"
        aria-hidden={!show}
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModuleModalLabel">
                Confirm Module Deletion
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">{title}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onConfirm(moduleId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
