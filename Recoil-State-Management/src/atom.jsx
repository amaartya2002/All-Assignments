import {atom , selector} from "recoil"

export const notificationAtom = atom({
  key : "notificationAtom",
  default : 12
})


export const jobsAtom = atom({
  key : "jobsAtom",
  default : 3
})

export const networkAtom = atom({
  key : "networkAtom",
  default : 104
})

export const messaagingAtom = atom({
  key : "messagingAtom",
  default : 0
})



export const totalNotificationSelector = selector({
  key : "totalNotificationSelector",
  get : ({get}) => {

    const notificationsCount = get(notificationAtom)
    const messaagingCount = get(messaagingAtom)
    const networkCount = get(networkAtom)
    const jobsCount = get(jobsAtom)

    return notificationsCount+messaagingCount+networkCount+jobsCount
  }
})