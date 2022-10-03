export type IDialogInfo = {
  title: string
  subtitle: string
}

export interface IDialogState {
  info: IDialogInfo
  isOpen: boolean
}
