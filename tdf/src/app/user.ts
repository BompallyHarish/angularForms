export class User {
    constructor(
        public name: string,
        public email:string,
        public phone:string,
        public street:string,
        public city:string,
        public course:string,
        public promoOffers:Boolean,
        public shift : string
    ){}
}
