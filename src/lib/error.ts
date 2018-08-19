export class Error {
  
  constructor(
    public message : string,
    public code ?: number,
    public trace ?: string
  ){

  }

  addTrace(trace : string) {
    this.trace = this.trace ? `${this.trace}:${trace}` : trace;
  }

}