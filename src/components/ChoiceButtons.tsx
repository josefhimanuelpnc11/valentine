import type { RefObject } from 'react'

type ChoiceButtonsProps = {
  onYes: () => void
  onNo: () => void
  showNoButton: boolean
  noExiting: boolean
  yesRef: RefObject<HTMLButtonElement | null>
}

function ChoiceButtons({ onYes, onNo, showNoButton, noExiting, yesRef }: ChoiceButtonsProps) {
  return (
    <div className="button-row" role="group" aria-label="Gift swap choice">
      <button ref={yesRef} type="button" className="btn btn-yes" onClick={onYes}>
        Yes
      </button>
      {showNoButton && (
        <button
          type="button"
          className={`btn btn-no ${noExiting ? 'exiting' : ''}`}
          onClick={onNo}
          disabled={noExiting}
        >
          No
        </button>
      )}
    </div>
  )
}

export default ChoiceButtons
