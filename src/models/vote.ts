export class VoteModel {
    id: number = 0;
    image_id: string = '';
    sub_id: string = '';
    created_at: Date = new Date();
    value: number = 0;
    country_code: string = '';
    image: any;// what is the type here?
}