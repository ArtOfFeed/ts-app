export interface IGuest {
    id: string
    name: string
    email?: string
    status: boolean
}

export interface PropsGuest {
    guest: IGuest
    onManage: (guest: IGuest) => void
}

export interface IEvent {
    title: string
    guests: IGuest[]
}

export interface GuestProps {
    guests: IGuest[]
    onManage: (guest: IGuest) => void
}

export interface IAllEvents {
    title: string
    guests: IGuest[]
}

export interface PropsDialog {
    guest: IGuest
    onChangeStatus: (acceptedStatus: boolean, guest: IGuest) => void
}

export interface EventsProps {
    eventSoon: IAllEvents[]
}

export interface TitleProps {
    title: string
}
