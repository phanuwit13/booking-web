export interface FormRequestLogin {
  username: string
  password: string
}

export interface LoginResponse {
  data: {
    accesToken: string
  }
}

export interface RegisterParam {
  username: string
  email: string
  passwordHash: string
  name: string
  phoneNumber: string
}

export interface ProfileItem {
  userId: string
  username: string
  name: string
  email: string
  phoneNumber: string
}

export interface ProfileResponse extends ApiResponse {
  data: ProfileItem
}
export interface RegisterResponse extends ApiResponse {
  data: ProfileItem
}
