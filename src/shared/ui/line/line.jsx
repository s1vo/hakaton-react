import "./line.scss";

export const Line = ({ title, color, value }) => (
    <div className="line">
        <h1 className="line__title">{title}</h1>
        <div className="line__container">
            <div className="line__progress" style={{ width: `${value}%`, backgroundColor: color }}>
                <span className="line__value">{`${value}%`}</span>
            </div>
        </div>
    </div>
);