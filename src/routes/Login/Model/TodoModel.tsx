
export class TodoModel {

    completed: boolean = false;
    id: number = -99;
    title: string = "";
    userId: number = -99;

    constructor(json?: TodoModel) {
        if (json) {
            this.completed = json.completed || this.completed;
            this.id = json.id || this.id;
            this.title = json.title || this.title;
            this.userId = json.userId || this.userId;
        }
    }

    // JSON 데이터를 Model에 매핑
    setData(json: { completed: boolean; id: number; title: string; userId: number }) {
        this.completed = json.completed || this.completed;
        this.id = json.id || this.id;
        this.title = json.title || this.title;
        this.userId = json.userId || this.userId;
    }
}