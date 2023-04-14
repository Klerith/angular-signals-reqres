import { signal, computed } from "@angular/core";
import { User } from "../interfaces/users";


export const users = signal<User[]>([]);
export const currentPage = signal(1);

export const labelTotalUsers = computed( () => `Total de usuarios ${ users().length }`);
