import "./ScrollButtonRight.css"

export const ScrollButtonRight = ({scroll}) => {
    return (
        <button
        className="scroll-button-right"
        onClick={() => scroll("right")}
        >
            <img src="../../assets/arrow-right.png" alt="Scroll right" className="arrow-right-icon"/>
        </button>
    )
}