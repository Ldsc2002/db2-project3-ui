import React, { useEffect, useState } from 'react'
import { getAllNodes } from '../../db/api'

function AllNodes() {
    const [nodes, setNodes] = useState([])

    useEffect(() => {
        getAllNodes().then((result) => {
            console.log(result)
            setNodes(result)
        })
    }, [])

    return (
        <div>
            <h3>Total nodes: {nodes.length}</h3>

            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                height: '80vh',
                overflowY: 'scroll',
                }}>

                {nodes.map((node) => (
                    <div key={node.ID}>
                        <h1>{node.ID}: {node.name ? node.name : node.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllNodes
