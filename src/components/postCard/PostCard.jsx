import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

/* eslint-disable react/jsx-props-no-spreading */

function PostCard(props) {
    const {
        title, description, edited, arrayTitle, arrayData, moreText,
    } = props
    const [array, setArray] = useState([])
    const [more, setMore] = useState([])

    useEffect(() => {
        if (arrayData !== undefined) {
            const newArray = []
            arrayData.forEach((item, index) => {
                if (index === array.length - 1) {
                    newArray.push(item)
                } else {
                    newArray.push(`${item}, `)
                }
            })

            setArray(newArray)
        }
    }, [arrayData])

    useEffect(() => {
        if (moreText !== undefined) {
            const newArray = []
            Object.keys(moreText).forEach((key) => {
                newArray.push(`${key}: ${moreText[key]}`)
            })

            setMore(newArray)
        }
    }, [moreText])

    return (
        <Card sx={{ maxWidth: 600, mb: 3 }}>
            <CardContent>
                <Typography variant="h3" color="text.secondary">
                    {title}
                </Typography>

                {description && (
                    <Typography variant="h5" color="text.secondary">
                        {description}
                    </Typography>
                )}

                {edited && (
                    <Typography variant="h6" color="text.secondary">
                        {`Edited: ${edited}`}
                    </Typography>
                )}

                {more && (
                    more.map((item) => (
                        <Typography variant="h6" color="text.secondary">{item}</Typography>
                    ))
                )}

                {arrayTitle && array && (
                    <div style={{ marginTop: '10px' }}>
                        {arrayTitle && (
                            <Typography variant="body3" color="text.secondary">
                                {`${arrayTitle}: `}
                            </Typography>
                        )}

                        {array && (
                            array.map((item) => (
                                <Typography variant="body3" color="text.secondary">{item}</Typography>
                            ))
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default PostCard
