import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private apiUrl = 'http://localhost:3001/todos';

    async getTodos() {
        const response = await axios.get(this.apiUrl);
        return response.data;
    }

    async addTodo(task: string) {
        const response = await axios.post(this.apiUrl, { task });
        return response.data;
    }

    async updateTodo(id: string, completed: boolean) {
        const response = await axios.put(`${this.apiUrl}/${id}`, { completed });
        return response.data;
    }

    async deleteTodo(id: string) {
        await axios.delete(`${this.apiUrl}/${id}`);
    }


}
