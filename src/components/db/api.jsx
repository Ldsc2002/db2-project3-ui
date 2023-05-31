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
    const query =
      'MATCH (u:user)-[c:comment]->(p:post) OPTIONAL MATCH (p:post) RETURN p, COLLECT(c.comment) AS comments';
  
    try {
      const result = await session.run(query);
      return result.records.map((record) => ({
        ...record.get('p').properties,
        comments: record.get('comments') || [], // Set comments to an empty array if null
      }));
    } catch (error) {
      console.log(error)
      return []
    }
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
export const addNode = async (label, propertiesData, admin) => {
    const properties = dataToString(propertiesData)

    // if admin is true, label admin
    if (admin) {
        const query = `CREATE (n:${label}:admin {${properties}}) RETURN n`
        return session.run(query)
            .then((result) => alert("Added!"))
            .catch((error) => {
                console.log(error)
                return []
            })
    }
    else {
        const query = `CREATE (n:${label} {${properties}}) RETURN n`
        return session.run(query)
            .then((result) => alert("Added!"))
            .catch((error) => {
                console.log(error)
                return []
            })
    }
}

export const updateNode = async (label, propertiesData, newData, admin) => {
    const properties = dataToString(propertiesData)
    const newProperties = dataToString(newData)

    if (admin) {
        const query = `MATCH (n:${label} {${properties}}) SET n += {${newProperties}} SET n:user:admin RETURN n`
        return session.run(query)
        .then((result) => alert("Updated!"))
        .catch((error) => {
            console.log(error)
            return []
        })
    }
    else {
        const query = `MATCH (n:${label} {${properties}}) SET n += {${newProperties}} RETURN n`
        return session.run(query)
            .then((result) => alert("Updated!"))
            .catch((error) => {
                console.log(error)
                return []
            })
    } 
}

export const updateRel = async (user, job, newData) => {
    const properties = dataToString(newData)

    const query = `MATCH (n:user {email: '${user}'})-[r:applies]->(j:job {title: '${job}'}) SET r += {${properties}} RETURN r`
    return session.run(query)
        .then((result) => alert("Applied!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const updateDeleteRel = async (user, job, newJob, state, message) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
    const day = date.getDate();

    const query = `
    MATCH (u:user {email: '${user}'})-[r:applies]->(j:job {title: '${job}'})
    DELETE r
    WITH u, j
    MATCH (j2:job {title: '${newJob}'})
    CREATE (u)-[:applies {date: date({year: ${year}, month: ${month}, day: ${day}}), cv: '${state}', message: '${message}'}]->(j2)
    RETURN u, j2`;

    return session.run(query)
        .then((result) => alert("Applied!"))
        .catch((error) => {
            console.log(error)
            return []
        }
    )
}

export const relBetweenUserAndJob = async (user, job, state, message) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
    const day = date.getDate();
    const query = `MATCH (u:user {email: '${user}'}), (j:job {title: '${job}'})
                CREATE (u)-[r:applies {date: date({year: ${year}, month: ${month}, day: ${day}}), cv: '${state}', message: '${message}'}]->(j)
                RETURN r`;

    return session.run(query)
        .then((result) => alert("Applied!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteNode = async (label, propertiesData) => {
    const properties = dataToString(propertiesData)

    const query = `MATCH (n:${label} {${properties}}) DETACH DELETE n`
    return session.run(query)
        .then((result) => alert("Deleted!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteRel = async (user, job) => {
    const query = `MATCH (n:user {name: '${user}'})-[r:applies]->(j:job {title: '${job}'}) DELETE r`
    return session.run(query)
        .then((result) => alert("Deleted!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteProperty = async (name, property) => {
    const query = `MATCH (n:user {name: '${name}'}) REMOVE n.${property}`
    return session.run(query)
        .then((result) => alert("Deleted!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}

export const deleteRelProperty = async (user, job, property) => {
    const query = `MATCH (n:user {name: '${user}'})-[r:applies]->(j:job {title: '${job}'}) REMOVE r.${property}`
    return session.run(query)
        .then((result) => alert("Deleted!"))
        .catch((error) => {
            console.log(error)
            return []
        })
}
  
  