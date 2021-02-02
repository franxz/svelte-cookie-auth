import approve from 'approvejs'


export class Field {
  constructor(value, rules) {
    this.value = value
    this.rules = rules
    this.validate()
  }
  
  validate() {
    this.valResult = approve.value(this.value, this.rules)
  }
}