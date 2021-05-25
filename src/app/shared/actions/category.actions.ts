export class LoadCategory {
  static readonly type = '[CATEGORY] Load';
}
export class SelectCategory {
  static readonly type = '[CATEGORY] Select'
  constructor(public payload: string) {}
}
