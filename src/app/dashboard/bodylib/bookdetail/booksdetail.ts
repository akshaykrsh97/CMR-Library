




export class Booksearch {
constructor(public bookname: String,public bookauth: String, public numbofbooks : number
,public numberofref : number){}

    
}



export class Requestedbook {
constructor(public requestedid: number,public bookname: String, public bookauth : String
,public requesteddate : number){}

    
}




export class Booklistitems {
constructor(
    public bookid: number,
    public bookname: String,
     public bookauth : String
,public takenid : number
,public dataoftaken : string
,public dataofrenewal : string
,public panelty : number){}

    
}

