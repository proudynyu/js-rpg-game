type KeyboardKeys = 'w' | 's' | 'a' | 'd'

type MovementKeys = Record<KeyboardKeys, { pressed: boolean }>

type Vector2d = { x: number, y: number }