import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime }, // props parameter desturctured
  ref // forwardRef render functions accept exactly two parameters: props and ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    // this handle is really meant to work together with forwardRef
    return {
      open() {
        dialog.current.showModal(); // showModal() is a built-in method for the <dialog>
      },
    };
  }); // this way the TimerChallenge comp or any other comp is detached from the dialog element in the ResultModal comp

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
