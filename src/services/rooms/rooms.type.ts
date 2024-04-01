export interface GetDateListParams {
  date?: Date
}
export interface GetRoomAvailableParams {
  date?: Date
  night?: number
}

export interface GetRoomDetailParams {
  id?: string
}

export interface CreateReservationParams {
  roomId: string
  checkinDate: Date
  checkoutDate: Date
  otherName: string
  otherPhone: string
  otherEmail: string
}

export interface DateItem {
  start: Date
  count: number
  isFull: boolean
}

export interface GetDateListResponse extends ApiResponse {
  data: DateItem[]
}

export interface RoomAvailableItem {
  roomId: string
  roomNumber: string
  roomType: string
  capacity: number
  pricePerNight: number
  description: string
}
export interface ReservationItem {
  reservationId: string
  roomId: string
  userId: string
  checkinDate: Date
  checkoutDate: Date
  createdAt: Date
  otherName: string
  otherPhone: string
  otherEmail: string
  room: RoomAvailableItem
}

export interface GetRoomAvailableListResponse extends ApiResponse {
  data: RoomAvailableItem[]
}

export interface GetRoomDetailResponse extends ApiResponse {
  data: RoomAvailableItem
}

export interface PostReservationResponse extends ApiResponse {
  data: ReservationItem
}

export interface GetReservationResponse extends ApiResponse {
  reservation: ReservationItem[]
}
