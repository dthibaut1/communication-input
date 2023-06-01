export class Skill {
  constructor(
    private _name: string,
    private _logo: string,
    private _site : string
  ) {}

  get name(): string {
    return this._name;
  }

  get logo(): string {
    return this._logo;
  }

  get site(): string {
    return this._site;
  }
}
