import "./ScrollButtonLeft.css"

export const ScrollButtonLeft = ({scroll}) => {
    return (
        <button
        className="scroll-button-left"
        onClick={() => scroll("left")}
        >
            <img src="../../assets/arrow-left.png" alt="Scroll left" className="arrow-left-icon"/>
        </button>
    )
}