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
