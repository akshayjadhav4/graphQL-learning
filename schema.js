import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        courceName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssists]
    }
    type TeachingAssists {
        firstName: String
        lastName : String
        experience: Int
    }

    enum Stack {
        REACT
        MERN
        GraphQL
        JS
        REACTNATIVE
        FLUTTER
        IOS
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput {
        id: ID
        courceName: String!
        category: String!
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssistsInput]!
    }

    input TeachingAssistsInput {
        firstName: String!
        lastName : String!
        experience: Int!
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`);

export default schema;
