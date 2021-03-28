export class quote {
    PersonSubmitted:boolean;
  name: any;
}
constructor(
    public quote:string,
    public author:string,
    public personSubmitted:string,
    public upvote?:number,
    public downvote?:number,
    public entryDate?:Date,
    public entryTime?:Time
    )