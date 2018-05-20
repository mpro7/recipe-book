export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, descritpion: string, imagePath: string) {
    this.name = name;
    this.description = descritpion;
    this.imagePath = imagePath;
  }
}
