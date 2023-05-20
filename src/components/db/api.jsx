/* eslint-disable no-console */

import neo4j from 'neo4j-driver'

const driver = neo4j.driver(
    'neo4j+s://6b3a0b40.databases.neo4j.io:7687',
    neo4j.auth.basic('neo4j', '_a7U6SE-JXbJGjms6LlgxU9dQGu6bxrYGfRVTKEbrKY'),
)

const session = driver.session()

export const getAllJobs = async () => {
    const query = 'MATCH (n:job) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const getAllUsers = async () => {
    const query = 'MATCH (n:user) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}