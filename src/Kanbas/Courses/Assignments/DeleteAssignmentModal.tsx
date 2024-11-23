import React from "react";

interface DeleteModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
}

export default function DeleteAssignmentModal({
  show,
  onClose,
  onConfirm,
  title = "Are you sure you want to delete this assignment?",
}: DeleteModalProps) {
  return (
    <>
      {/* Greyed-out background overlay */}
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={onClose}
        />
      )}

      <div
        className={`modal fade ${show ? "show" : ""}`}
        tabIndex={-1}
        style={{
          display: show ? "block" : "none",
          zIndex: 1050,
        }}
        aria-labelledby="deleteModalLabel"
        aria-hidden={!show}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Deletion
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
                onClick={onConfirm}
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
