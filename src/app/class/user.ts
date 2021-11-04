export class User {
    constructor( public username , public email ) {}
    toJSON() {
        return JSON.stringify({...this})
    }
}
