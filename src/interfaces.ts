export interface IGuest {
    id?: string
    name?: string
    email?: string
    status?: boolean
}

export interface IEvent {
    title?: string
    guest?: IGuest
}