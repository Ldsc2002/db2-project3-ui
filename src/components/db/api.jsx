/* eslint-disable no-console */

import neo4j from 'neo4j-driver'

const driver = neo4j.driver(
    'neo4j+s://6b3a0b40.databases.neo4j.io:7687',
    neo4j.auth.basic('neo4j', '_a7U6SE-JXbJGjms6LlgxU9dQGu6bxrYGfRVTKEbrKY'),
)

const session = driver.session()

// Getters
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

export const getAllCompanies = async () => {
    const query = 'MATCH (n:enterprise) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const getAllPosts = async () => {
    const query = 'MATCH (n:post) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const getAllGroups = async () => {
    const query = 'MATCH (n:group) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const getAllNodes = async () => {
    const query = 'MATCH (n) RETURN n'
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

// Setters
export const addNode = async (label, properties) => {
    const query = `CREATE (n:${label} ${properties}) RETURN n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const updateNode = async (label, properties) => {
    const query = `MATCH (n:${label}) SET n += ${properties} RETURN n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const relBetweenUserAndJob = async (user, job) => {
    const query = `MATCH (u:user {username: '${user}'}), (j:job {title: '${job}'}) CREATE (u)-[r:applied]->(j) RETURN r`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('r').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteNode = async (label, properties) => {
    const query = `MATCH (n:${label} ${properties}) DETACH DELETE n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteRel = async (label, properties) => {
    const query = `MATCH ()-[r:${label} ${properties}]-() DELETE r`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('r').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteProperty = async (label, properties) => {
    const query = `MATCH (n:${label}) REMOVE n.${properties}`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}