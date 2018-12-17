import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = ({key, title, excerpt, date, tags}) => {
    const CardBase = styled.div`
        background-color: #fff;
        & p,time {
            color: #676767;
        }
    `

    const Tag = styled.span`
        background-color: #01579b;
        padding: 5px 10px;
        color: #FFF;
        font-size: 0.8rem;
    `
    return (
        <CardBase className="uk-card uk-card-hover uk-card-body uk-margin-top">
            <h3 className="card-title uk-card-title">
                {title}
            </h3>
            <p>{excerpt}</p>
            <time>{date}</time>
            <span uk-icon="icon: tag" className="uk-margin-small-left"></span>
            {
                tags && tags.map((tag,index) => <Tag className="uk-margin-small-left uk-margin-small-top" key={index}>{tag}</Tag>)
            }
        </CardBase>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
}


export default Card