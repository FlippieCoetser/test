export class JSONLoader {
  static async load(jsonPath) {
    try {
      const response = await fetch(jsonPath);
      const json = await response.json();

      return json;
    } catch (error) {
      console.warn("Error fetching external JSON:", error);
    }
  }
}
