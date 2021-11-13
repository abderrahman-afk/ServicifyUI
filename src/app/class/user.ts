export class User {
    constructor( public username , public email , public employee ) {}
    toJSON() {
        return JSON.stringify({...this})
    }
}
