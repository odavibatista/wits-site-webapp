// User
export interface LoginUserFormState {
  errors: {
    username?: string[]
    password?: string[]
    _form?: string
    _apiResponse?: string
  }
}

export interface RegisterUserFormState {
  errors: {
    name?: string[]
    email?: string[]
    password?: string[]
    confirmPassword?: string[]
    _form?: string
    _apiResponse?: string
  }
}

// Courses
export interface CreateCourseFormState {
  errors: {
    courseName?: string[]
    pointsWorth?: string[]
    _form?: string
    _apiResponse?: string
  }
}

export interface UpdateCourseFormState {
  success?: boolean
  errors: {
    courseName?: string[]
    pointsWorth?: string[]
    _form?: string
    _apiResponse?: string
  }
}

// Activity
export interface ActivityFormState {
  errors: {
    question?: string[]
    option1?: string[]
    option2?: string[]
    option3?: string[]
    option4?: string[]
    correctAnswer?: string[]
    _form?: string
    _apiResponse?: string
  }
}
