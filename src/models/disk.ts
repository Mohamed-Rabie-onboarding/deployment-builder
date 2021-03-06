import { v4 } from "uuid";

export class Disk {
  constructor(
    public id: string = v4(),
    public name: string = "mydisk",
    public size: number = 2,
    public description: string = "this is my disk description"
  ) {}
}
