/* eslint-disable no-console */

import neo4j from 'neo4j-driver'

const driver = neo4j.driver(
    'neo4j+s://6b3a0b40.databases.neo4j.io:7687',
    neo4j.auth.basic('neo4j', '_a7U6SE-JXbJGjms6LlgxU9dQGu6bxrYGfRVTKEbrKY'),
)

const session = driver.session()

const dataToString = (propertiesData) => {
    let properties = ''

    Object.keys(propertiesData).forEach((key) => {
        // if data is boolean, don't add quotes
        if (typeof propertiesData[key] === 'boolean') {
            properties += `${key}: ${propertiesData[key]}, `
        } else if (typeof propertiesData[key] === 'number') {
            properties += `${key}: ${propertiesData[key]}, `
        } else if (propertiesData[key] instanceof Array) {
            let array = '['
            propertiesData[key].forEach((element) => {
                array += `'${element}', `
            })
            array = array.slice(0, -2)
            array += ']'

            properties += `${key}: ${array}, `
        } else {
            properties += `${key}: '${propertiesData[key]}', `
        }
    })

    return properties.slice(0, -2)
}

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
export const addNode = async (label, propertiesData) => {
    const properties = dataToString(propertiesData)

    const query = `CREATE (n:${label} {${properties}}) RETURN n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const updateNode = async (label, propertiesData, newData) => {
    const properties = dataToString(propertiesData)
    const newProperties = dataToString(newData)

    const query = `MATCH (n:${label} {${properties}}) SET n += {${newProperties}} RETURN n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const relBetweenUserAndJob = async (user, job, salary) => {
    const query = `MATCH (u:user {email: '${user}'}), (j:job {title: '${job}'})
                CREATE (u)-[r:applied {desired_salary: ${salary}}]->(j)
                RETURN r`;


    return session.run(query)
        .then((result) => result.records.map((record) => record.get('r').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteNode = async (label, propertiesData) => {
    const properties = dataToString(propertiesData)

    const query = `MATCH (n:${label} {${properties}}) DETACH DELETE n`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteRel = async (user, job) => {
    const query = `MATCH (n:user {name: '${user}'})-[r:applied]->(j:job {title: '${job}'}) DELETE r`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('r').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteProperty = async (name, property) => {
    const query = `MATCH (n:user {name: '${name}'}) REMOVE n.${property}`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('n').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteRelProperty = async (user, job, property) => {
    const query = `MATCH (n:user {name: '${user}'})-[r:applied]->(j:job {title: '${job}'}) REMOVE r.${property}`
    return session.run(query)
        .then((result) => result.records.map((record) => record.get('r').properties))
        .catch((error) => {
            console.log(error)
            return []
        })
}
