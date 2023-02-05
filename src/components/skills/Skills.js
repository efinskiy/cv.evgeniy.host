import classNames from "classnames";

let colors = ['#4681f4', '#5783db', '#55c2da',
    '#5dbea3', '#33b249', '#5adbb5',
    '#a881af', '#80669d', '#dd7973', '#ffbd03']


export const Skills = (props) => {
    return (
        <div className="skills">
            {props.skills.map(skill =>
            <div className={classNames("skill__wrapper")}>
                    <span className={'skill'}>{skill}</span>
            </div>
            )}
        </div>
    )
}