import { PropTypes } from 'prop-types'


export default function CounterButton({ by, incrementMethod, decrementMethod }) {

    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                    onClick={() => incrementMethod(by)}
                >+{by}</button>

                <button className='counterButton'
                    onClick={() => decrementMethod(by)}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.prototype = {
    by: PropTypes.number
}

// to set default value
CounterButton.defaultProps = {
    by: 1
}