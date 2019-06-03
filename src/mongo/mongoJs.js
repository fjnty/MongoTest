// 引入mongodb模块，获得客户端对象
const MongoClient = require('mongodb').MongoClient

const assert = require('assert')
// 连接字符串
const DB_CONN_STR = 'mongofb://localhost:27017/formtest'
// 数据库连接
const client = new MongoClient(DB_CONN_STR)
// 数据库名称
const dbName = 'formtest'
// 示例输出JS

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

/**
 * 判断是否为uuid
 */
export function testUUID (val) {
  if (val == null) { return 0 }
  var reg = /^[0-9a-z]{8}[0-9a-z]{4}[0-9a-z]{4}[0-9a-z]{4}[0-9a-z]{12}$/
  var r = val.match(reg)
  if (r == null) {
    return 0
  } else {
    return 1
  }
}

export async function insertManyData (collectionName, data) {
  try {
    await client.connect()
    console.log('Connect Successful')
    const db = client.db(dbName)
    db.collection(collectionName).insertMany(data)
    // var r = db.collection(collectionName).insertMany(data)
    // assert.equal(1, r.insertedCount) // ???
    client.close()
  } catch (e) {
    console.log(e.stack)
  }
}

export async function updateManyData (collectionName, keyData, setData) {
  try {
    await client.connect()
    console.log('Connect Successful')
    const db = client.db(dbName)
    db.collection(collectionName).updateMany(keyData, setData)
    // var r = db.collection(collectionName).updateMany(keyData, setData)
    // assert.equal(1, r.matchedCount) // 验证方法
    // assert.equal(1, r.modifiedCount)
    client.close()
  } catch (e) {
    console.log(e.stack)
  }
}

export async function findManyData (collectionName, keyData) {
  try {
    await client.connect()
    console.log('Connect Successful')
    const db = client.db(dbName)
    db.collection(collectionName).find(keyData)
    // var r = db.collection(collectionName).updateMany(keyData, setData)
    // assert.equal(1, doc.length)
    client.close()
  } catch (e) {
    console.log(e.stack)
  }
}

export async function deleteMany (collectionName, keyData) {
  try {
    await client.connect()
    console.log('Connect Successful')
    const db = client.db(dbName)
    db.collection(collectionName).deleteMany(keyData)
    // var r = db.collection(collectionName).updateMany(keyData, setData)
    // assert.equal(1, doc.length)
    client.close()
  } catch (e) {
    console.log(e.stack)
  }
}
