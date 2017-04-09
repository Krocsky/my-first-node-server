let {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
let User = require('./models/User')

let singleUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    name: {
      type: GraphQLString,
      resolve(u) {
        return u.name
      }
    },
    age: {
      type: GraphQLInt,
      resolve(u) {
        return u.age
      }
    },
    job: {
      type: GraphQLString,
      resolve(u) {
        return u.job
      }
    },
  }
})

let userList = new GraphQLList(singleUser);

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'DefaultQuery',
    fields: {
      userList: {
        type: userList,
        args: {
          name: {
            type: GraphQLString,
            require: false
          }
        },
        description: 'all users',
        resolve(root, param, session) {
          if (!param.name)
            return User.find()
          else
            return User.find({
              name: param.name
            })
        }
      }
    }
  })
})

module.exports = schema;
