const data = [
  {
    make: 'honda',
    year: 1996,
    model: 'cr-v',
    power: 149,
  },
  {
    make: 'toyota',
    year: 2000,
    model: 'solara',
    power: 204,
  },
  {
    make: 'toyota',
    year: 2000,
    model: 'land cruiser',
    power: 190,
  },
  {
    make: 'mercedes-benz',
    year: 1990,
    model: '190e',
    power: 149,
  },
  {
    make: 'bmw',
    year: 2000,
    model: 'e46',
    power: 204,
  }
]

class DB {
  constructor(data) {
    this.data = data.map(clone)
    this.indices = new Map()
  }

  insert(item) {}
  remove(id) {}

  find(by = {}) {
    const fields = Object.keys(by)
    if (fields.length === 1) {
      if (this.indices.has(fields[0])) {
        if (this.indices.get(fields[0]).has(by[fields[0]])) {
          return this.indices.get(fields[0]).get(by[fields[0]]).map(clone)
        }
        return []
      }
    }

    return this._findIterative(by)
  }

  _findIterative(by) {
    return this.data.filter(item => {
      for (let key in by) {
        if (item[key] !== by[key]) {
          return false
        }
      }
      return true
    }).map(clone)
  }

  indexate(field) {
    if (!this.indices.has(field)) {
      this.indices.set(field, new Map())
      for (let item of this.data) {
        if (item[field]) {
          if (!this.indices.get(field).get(item[field])) {
            this.indices.get(field).set(item[field], [])
          }
          this.indices.get(field).get(item[field]).push(item)
        }
      }
    }
  }
}

function clone(obj) {
  const result = {}
  for (let key in obj) {
    result[key] = obj[key]
  }
  return result
}

const db = new DB(data)
// console.log(db.find())
db.indexate('power')
console.log(db.indices)
// console.log(db.find({ year: 2000 }))
console.log(db.find({ power: 149 }))
// console.log(db.find({ power: 204, year: 2000 }))
// console.log(db.find({ power: 300 }))