import { nanoid } from "nanoid";

class Course {
  constructor(
    id,
    { courceName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courceName = courceName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

const CourseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, CourseHolder[id]);
  },
  createCourse: ({ input }) => {
    let id = nanoid();
    CourseHolder[id] = input;
    return new Course(id, input);
  },
};

export default resolvers;
