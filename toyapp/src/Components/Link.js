import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onclick}) => {
    if(active) {
        return <span>{children}</span>
    }

    return (
        <a
        href=""
        onClick={e => {
            e.preventDefault()
            onClick()
        }}        
        >
            {children}
        </a>
    )
}

Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onclick: PropTypes.func.isRequired
}

export default Link