export enum AcceptedKey {
  Up = `UP`,
  Right = `RIGHT`,
  Down = `DOWN`,
  Left = `LEFT`,
  Shoot = `SHOOT`,
  Pause = `PAUSE`,
}

export function keyReducer({ key }: KeyboardEvent): AcceptedKey | false {
  switch (key.toLowerCase()) {
    case `up`:
    case `arrowup`:
    case `w`:
      return AcceptedKey.Up;
    case `right`:
    case `arrowright`:
    case `d`:
      return AcceptedKey.Right;
    case `down` || `arrowdown` || `s`:
    case `arrowdown`:
    case `s`:
      return AcceptedKey.Down;
    case `left`:
    case `arrowleft`:
    case `a`:
      return AcceptedKey.Left;
    case `space`:
      return AcceptedKey.Shoot;
    case `escape`:
      return AcceptedKey.Pause;
    default:
      return false;
  }
}
