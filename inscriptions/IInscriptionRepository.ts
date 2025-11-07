export interface Inscription {
    course_id: string;
    user_id: string;
    progress: number;
}

export interface InscriptionRepository {
    get(user_id: string): Promise<Inscription[]>;
    create(course_id: string, user_id: string): Promise<Inscription>;
    update(course_id: string, user_id: string, progress: number): Promise<Inscription | null>;
    delete(course_id: string, user_id: string): Promise<boolean>;
}