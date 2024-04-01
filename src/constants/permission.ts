import { ROUTE } from './routes'

// permission ในการเข้าหน้า หรือ ปุ่มต่างๆ
const ROUTE_PERMISSION: RolePermission = {
  [ROUTE.LOGIN]: {
    guard: 'Guest',
    permission: [],
  },
  [ROUTE.HOME]: {
    guard: 'All',
    permission: [],
  },
  [ROUTE.ROOMS]: {
    guard: 'All',
    permission: [],
  },
  [ROUTE.PROFILE]: {
    guard: 'Auth',
    permission: [],
  },
}

export { ROUTE_PERMISSION }
