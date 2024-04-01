import { apiClient } from '@/lib/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  CreateReservationParams,
  GetDateListParams,
  GetDateListResponse,
  GetReservationResponse,
  GetRoomAvailableListResponse,
  GetRoomAvailableParams,
  GetRoomDetailParams,
  GetRoomDetailResponse,
  PostReservationResponse,
} from './rooms.type'
import dayjs from 'dayjs'

export const useGetDateList = ({ date = new Date() }: GetDateListParams) => {
  return useQuery({
    queryKey: ['get-date-list', dayjs(date).year()],
    queryFn: () =>
      apiClient.get<GetDateListResponse>(
        `/api/date?year=${dayjs(date).year()}`
      ),
    retry: 0,
    enabled: Boolean(date),
  })
}

export const useGetRoomAvailable = ({
  date = new Date(),
  night = 1,
}: GetRoomAvailableParams) => {
  return useQuery({
    queryKey: [
      'get-room-available-list',
      dayjs(date).format('DD-MM-YYYY'),
      night,
    ],
    queryFn: () =>
      apiClient.get<GetRoomAvailableListResponse>(
        `/api/rooms/available?date=${date.toISOString()}&night=${night}`
      ),
    retry: 0,
    enabled: Boolean(date),
  })
}

export const useGetRoomDetail = ({ id }: GetRoomDetailParams) => {
  return useQuery({
    queryKey: ['get-room-detail-list', id],
    queryFn: () => apiClient.get<GetRoomDetailResponse>(`/api/rooms/${id}`),
    retry: 0,
    enabled: Boolean(id),
  })
}

export const usePostCreateReservation = () => {
  return useMutation({
    mutationKey: ['create-reservation'],
    mutationFn: (data: CreateReservationParams) =>
      apiClient.post<PostReservationResponse>(`/api/reservation`, {
        ...data,
      }),
    retry: 0,
  })
}

export const useGetListReservation = () => {
  return useQuery({
    queryKey: ['get-reservation'],
    queryFn: () =>
      apiClient.get<GetReservationResponse>(`/api/reservation`),
    retry: 0,
  })
}
