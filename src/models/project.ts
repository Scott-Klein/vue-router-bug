export default class Project {
  id?: string;
  name?: string;

  isValid(): boolean {
    return !!this.name;
  }
}