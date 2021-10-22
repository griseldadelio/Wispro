export type UserRegType = {
    id: string
    fullName: string
    email: string
    password: string
    newUser: string
    date: number
}

export type UserType = Omit<UserRegType, 'date'>