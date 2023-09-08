interface Button {
    btnClass?: string;
    title: string;
    onClick?:(event: React.FormEvent)=> void
}

interface GithubAuth {
    clientId: string;
    clientSecret: string;
}

interface Progress {
    progress:number;
}

interface arrayType {
    map: Function
}