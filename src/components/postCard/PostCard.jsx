import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

/* eslint-disable react/jsx-props-no-spreading */

function PostCard(props) {
    const {
        title, description, arrayTitle, arrayData,
    } = props
    const [array, setArray] = useState([])

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

    return (
        <Card sx={{ maxWidth: 600, mb: 3 }}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>

                {arrayTitle && (
                    <Typography variant="body2" color="text.secondary">
                        {arrayTitle}
                    </Typography>
                )}

                {array && (
                    array.map((item) => (
                        <Typography variant="body3" color="text.secondary">{item}</Typography>
                    ))
                )}
            </CardContent>
        </Card>
    )
}

export default PostCard
