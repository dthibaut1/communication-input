import { Skill } from "./skill.model";

export class Developer {
  constructor(
    private _lastName: string,
    private _firstName: string,
    private _age: number,
    private _gender: string,
    private _bio: string,
    private _skills: Skill[]
  ) {}

  get lastName(): string {
    return this._lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  get age(): number {
    return this._age;
  }

  get gender(): string {
    return this._gender;
  }

  get bio(): string {
    return this._bio;
  }

  get skills() : Skill[] {
    return this._skills;
  }
}
