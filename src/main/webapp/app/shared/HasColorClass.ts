export class HasColorClass<T> {
  public static readonly COLOR_CLASSES = ['blue','pink','red'];

  colorClass: string;

  constructor(public element: T) {
    this.colorClass = HasColorClass.COLOR_CLASSES[Math.floor(Math.random() * HasColorClass.COLOR_CLASSES.length)];
  }
}

