import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { Favorite, DeleteForever } from '@mui/icons-material'
import { Chip } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import UserComment from '../userComment/UserComment'
import classes from './PostCard.module.css'
import { updateOneInCollection, deleteOneFromCollection } from '../db/api'

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
